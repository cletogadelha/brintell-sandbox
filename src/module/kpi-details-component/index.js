import React from "react";

export default class KpiDetailsComponent extends React.Component {

    /**
     * @type {KpiDetailsComponentSchema}
     */
    props;
    _baseClass = 'kpi-details-component';

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            config: props.config
        }
    }

    componentDidMount() {
        let metricNameKey = this.state.config.metricNameKey;
        let moleculeName = this.state.config.moleculeName;
        let initialMetricLabel = this.state.config.initialMetric.label;
        let finalMetricLabel = this.state.config.finalMetric.label;
        let moleculeValues = [];
        let colorPalette = [];
        let maxItems = this.state.config.maxItems;
        let data = this.filterMaxItems(this.props.data, maxItems);
        let lines = data.map((featureSet) => {
            let metricName = this.formatName(featureSet[metricNameKey]);
            let initial = {
                label: initialMetricLabel,
                value: featureSet[this.state.config.initialMetric.value] || 0,
                arrow: featureSet[this.state.config.initialMetric.arrow],
                sufix: this.state.config.initialMetric.sufix
            };
            let final = {
                label: finalMetricLabel,
                value: featureSet[this.state.config.finalMetric.value] || 0,
                sufix: this.state.config.finalMetric.sufix
            };

            moleculeValues = this.state.config.molecule.columnValues.map((key) => {
                return featureSet[key];
            });

            colorPalette = this.state.config.molecule.colorPalette.map((value) => {
                return value;
            });

            return {
                metricName : metricName,
                moleculeName: moleculeName,
                initial : initial,
                final : final,
                moleculeValues: moleculeValues,
                colorPalette : colorPalette
            };
        });

        this.setState(
            {
                lines: lines,
                moleculeName: moleculeName
            }
        );

    }

    filterMaxItems(data, maxItems) {
        if(data && data.length > 0 && maxItems && maxItems > 0) {
            let dataFiltered = [];
            data.forEach((value, index) => {
                if(index < maxItems) {
                    dataFiltered.push(value);
                }
            });

            return dataFiltered;
        } else {
            return data;
        }
    }

    formatName(name) {
        return name.replace("&amp;", "&");
    }

    verifyNumericValue = (value, suf) => {
        if(!value){
            return "No Data";
        }

        if(isNaN(value)){
            return "No Data";
        } else {
            return value + suf;
        }
    };

    render() {
        return (
            <section className={this._baseClass}>
                <div className={this._baseClass+'-b-lines'}>
                    {this.state.lines ?
                        this.state.lines.map((line, index) => {
                            let total = line.final.value;
                            let widthInitial = line.initial.value / line.final.value * 100;
                            {widthInitial > 100 ? widthInitial = line.initial.value : widthInitial = widthInitial}
                            let indicatorInitial = line.initial.arrow > 0 ? this._baseClass + '-b-indicator-green' : line.initial.arrow < 0 ? this._baseClass + '-b-indicator-red' : '';
                            return (
                                <div key={index} className={this._baseClass + '-b-line'}>
                                    <div className={this._baseClass + "-b-label"}>{line.metricName}</div>
                                    <div className={this._baseClass + "-b-content"}>
                                        <div className={this._baseClass + "-b-labels"}>

                                            { indicatorInitial && <div className={indicatorInitial}>&nbsp;</div> }

                                            <div className={this._baseClass + "-b-initial-value"}>
                                                {line.initial.label} <br/>
                                                <b>{this.verifyNumericValue(line.initial.value,line.initial.sufix)}</b>
                                            </div>
                                            <div className={this._baseClass + "-b-final-value"}>
                                                {line.final.label} <br/>
                                                <b>{this.verifyNumericValue(line.final.value,line.final.sufix)}</b>
                                            </div>
                                        </div>
                                        <div className={this._baseClass + "-b-bar"}>
                                            <div className={this._baseClass + "-b-initial-bar"}
                                                 style={{
                                                     width : widthInitial + '%',
                                                     background: this.props.config.barColor || '#267db3'
                                                 }}
                                            ></div>
                                            <div className={ this._baseClass + "-b-final-bar"}
                                                 style={{
                                                     width : (Math.abs(total - widthInitial)) + '%'
                                                 }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                        :
                        ''
                    }
                </div>
            </section>
        );
    }
}

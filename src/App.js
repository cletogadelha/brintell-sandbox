import React, { Component } from 'react';
import logo from './logo.jpg';

import SampleComponent from './module/sample-component';
import KpiDetailsComponent from './module/kpi-details-component';

class App extends Component {

  _baseClass = "app";

  sampleComponentConfig = {
    data: [{id:1, name:"sample 1"},{id:2, name:"sample 2"}]
  };

  kpiDetailsComponentConfig = {
                                "config": {
                                  "metricNameKey": "Metric Name",
                                  "moleculeName": "Year Trending",
                                  "initialMetric": {
                                    "label": "Actual",
                                    "value": "Actual",
                                    "arrow": "LY Var",
                                    "sufix": "%"
                                  },
                                  "finalMetric": {
                                    "label": "Target",
                                    "value": "Target Value",
                                    "sufix": "%"
                                  },
                                  "molecule": {
                                    "height": 20,
                                    "width": 100,
                                    "circleRadius": 5,
                                    "columnValues": [
                                      "CY-2",
                                      "CY-1",
                                      "CY"
                                    ],
                                    "colorPalette": [
                                      "#333333",
                                      "#333333",
                                      "#267DB3"
                                    ]
                                  }
                                },
                                "data": [{ "Metric Name": "African American, Not of Hispanic Origin", "Actual": 11, "Target Value": 0, "Target Var": -10, "CY-2": 13, "CY-1": 13, "CY": 11 }, { "Metric Name": "English Learners", "Actual": 10, "Target Value": 0, "Target Var": -3, "CY-2": 13, "CY-1": 13, "CY": 10 }, { "Metric Name": "English Learners (ELD 1-3)", "Actual": 10, "Target Value": 0, "Target Var": -1, "CY-2": 10, "CY-1": 10, "CY": 10 }, { "Metric Name": "English Learners (ELD 4-5)", "Actual": 12, "Target Value": 0, "Target Var": 1, "CY-2": 12, "CY-1": 12, "CY": 12 }, { "Metric Name": "Fluent English", "Actual": 10, "Target Value": 0, "Target Var": -1, "CY-2": 12, "CY-1": 12, "CY": 10 }, { "Metric Name": "Foster Youth", "Actual": 13, "Target Value": 0, "Target Var": -8, "CY-2": 13, "CY-1": 13, "CY": 13 }, { "Metric Name": "Hispanic or Latino", "Actual": 10, "Target Value": 0, "Target Var": -1, "CY-2": 12, "CY-1": 12, "CY": 10 }, { "Metric Name": "LTEL", "Actual": 15, "Target Value": 0, "Target Var": 4, "CY-2": 15, "CY-1": 15, "CY": 15 }, { "Metric Name": "Reclassified English Learners", "Actual": 10, "Target Value": 0, "Target Var": -1, "CY-2": 12, "CY-1": 12, "CY": 10 }, { "Metric Name": "Socioeconomically Disadvantaged", "Actual": 10, "Target Value": 0, "Target Var": -1, "CY-2": 10, "CY-1": 10, "CY": 10 }, { "Metric Name": "Student with Disability", "Actual": 21, "Target Value": 0, "Target Var": 3, "CY-2": 19, "CY-1": 19, "CY": 21 }]
                              }

  render() {
    return (
      <section className={this._baseClass}>
        <div className={this._baseClass+"-header"}>
          <img src={logo} className={this._baseClass+"-logo"} alt="logo" />
          <h2>Sandbox</h2>
        </div>
        <section className={this._baseClass+"-content"}>

          <div className={this._baseClass+"-element"}>
            <SampleComponent data={this.sampleComponentConfig.data}/>
          </div>

          <div className={this._baseClass+"-element"}>
            <KpiDetailsComponent data={this.kpiDetailsComponentConfig.data} config={this.kpiDetailsComponentConfig.config}/>
          </div>

          <div className={this._baseClass+"-element"}>
            <NovoComponent data={this.kpiDetailsComponentConfig.data} config={this.kpiDetailsComponentConfig.config}/>
          </div>

        </section>
      </section>
    );
  }
}

export default App;
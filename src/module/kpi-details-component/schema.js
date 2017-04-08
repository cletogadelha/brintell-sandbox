
class KpiDetailsComponentSchema {

    /**
     *
     * @type {{metricNameKey: {type: String, required: boolean, example: string}, initialMetric: {type: [*], required: boolean, example: {label: string, value: string, arrow: string, sufix: string}}, finalMetric: {type: [*], required: boolean, example: {label: string, value: string, sufix: string}}, maxItems: {type: Number, required: boolean, example: number}}}
     */
    config = {
        metricNameKey: {
            type: String,
            required: true,
            'example': 'Metric Name'
        },
        initialMetric: {
            type : [InitialMetricConfig],
            required: true,
            "example": {
                "label": "Actual",
                "value": "Actual",
                "arrow": "LY Var",
                "sufix": "%"
            }
        },
        finalMetric: {
            type : [FinalMetricConfig],
            required: true,
            "example": {
                "label": "Target",
                "value": "Target Value",
                "sufix": "%"
            }
        },
        maxItems: {
            type: Number,
            required: true,
            'example': 10
        }
    }
}


class InitialMetricConfig {
    /**
     *
     * @type {{label: String, value: String, arrow: String, sufix: String, required: boolean}}
     */
    config = {
        label: String,
        value: String,
        arrow: String,
        sufix: String,
        required : true
    };

}

class FinalMetricConfig {
    /**
     *
      * @type {{label: String, value: String, sufix: String, required: boolean}}
     */
    config = {
        label: String,
        value: String,
        sufix: String,
        required : true
    };

}
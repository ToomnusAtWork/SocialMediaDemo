import React from "react";
// import { Utils } from 'chart.js/dist/scripts/util.js'

export const Data = () => {
    const DATA_COUNT = 5;
    const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};
    const labels = ['Engineer', 'Marketing', 'Human Resource', 'Adminstrative', 'Customer Services'];
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: Utils.numbers(NUMBER_CFG),
                backgroundColor: [
                  Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
                  Utils.transparentize(Utils.CHART_COLORS.orange, 0.5),
                  Utils.transparentize(Utils.CHART_COLORS.yellow, 0.5),
                  Utils.transparentize(Utils.CHART_COLORS.green, 0.5),
                  Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
                ]
              }
        ]
    }
}

export default Data;

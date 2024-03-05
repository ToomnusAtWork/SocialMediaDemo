import React from "react";
import { PolarArea } from "react-chartjs-2"; 

const PolarChart = ({chartData}) => {
    return(
        <div className="chart-container">
            <h2 className="text-xl text-bold text-black text-center">Team member participation chart</h2>
            <PolarArea
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Various user on the system"
                        }
                    },
                    scales: {
                        r: {
                            pointLabels: {
                              display: true,
                              centerPointLabels: true,
                              font: {
                                size: 8
                              }
                            }
                          }
                    }
                }}
            />
        </div>
    );
};

export default PolarChart;
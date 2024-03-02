import React from "react";
import { PolarArea } from "react-chartjs-2"; 

const PolarChart = ({chartData}) => {
    return(
        <div className="chart-container">
            <h2 style={{ textAlign: "center" }}>Team member participation chart</h2>
            <PolarArea
                data={chartData}
                options={{
                plugins: {
                    title: {
                    display: true,
                    text: "Various user on the system"
                    }
                }
                }}
            />
        </div>
    );
};

export default PolarChart;
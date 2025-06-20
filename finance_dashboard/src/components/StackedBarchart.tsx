import react, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// const data = [
//   { name: "Monday", breakfast: 5, lunch: 10, dinner: 0 },
//   { name: "Tuesday", breakfast: 0, lunch: 5, dinner: 10 },
//   { name: "Wednesday", breakfast: 0, lunch: 10, dinner: 20 },
//   { name: "Thursday", breakfast: 0, lunch: 7.5, dinner: 15 },
//   { name: "Friday", breakfast: 0, lunch: 0, dinner: 0 },
//   { name: "Saturday", breakfast: 21, lunch: 19, dinner: 0 },
//   { name: "Sunday", breakfast: 0, lunch: 19, dinner: 21 },
// ];

const StackedBarChart = ({ data }) => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2>Weekly Meal Costs</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Labels" />
            <YAxis
              label={{
                value: "Cost ($)",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="Breakfast" stackId="a" fill="#8884d8" />
            <Bar dataKey="Lunch" stackId="a" fill="#82ca9d" />
            <Bar dataKey="Dinner" stackId="a" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StackedBarChart;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
  },
  content: {
    textAlign: "center",
    alignItemrs: "center",
    justifyContent: "center",
    width: "100%",
  },
};

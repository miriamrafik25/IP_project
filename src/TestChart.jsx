import React from "react";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

const data = [
  { name: "A", value: 10 },
  { name: "B", value: 20 }
];

export default function TestChart() {
  return (
    <div>
      <h1>Chart Test</h1>
      <BarChart width={500} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="value" fill="blue" />
      </BarChart>
    </div>
  );
}
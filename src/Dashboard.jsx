import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { month: "Jan", users: 20 },
  { month: "Feb", users: 40 },
  { month: "Mar", users: 60 },
  { month: "Apr", users: 80 },
  { month: "May", users: 100 },
  { month: "Jun", users: 120 }
];

function Dashboard() {
  return (
   <div className="w-full p-8 min-h-screen">

      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">Dashboard</h1>

      <p className="text-gray-400 mb-8">
        The administrator controls the platform and ensures it functions correctly.
      </p>

      {/* Cards */}
      <p className="text-red-500">Chart should appear below</p>
      <div className="grid grid-cols-3 gap-6 mb-10">

        <div className="bg-[#1f2937] p-6 rounded-xl">
          <p className="text-gray-400">Users</p>
          <h2 className="text-3xl font-bold">120</h2>
        </div>

        <div className="bg-[#1f2937] p-6 rounded-xl">
          <p className="text-gray-400">Courses</p>
          <h2 className="text-3xl font-bold">35</h2>
        </div>

        <div className="bg-[#1f2937] p-6 rounded-xl">
          <p className="text-gray-400">Active Sessions</p>
          <h2 className="text-3xl font-bold">18</h2>
        </div>

      </div>

  <div style={{ background: "#1f2937", padding: "20px", marginTop: "20px" }}>
  <h2>User Growth Test</h2>

  <BarChart width={600} height={300} data={data}>
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="users" fill="#3b82f6" />
  </BarChart>

</div>

      </div>

   
  );
}

export default Dashboard;
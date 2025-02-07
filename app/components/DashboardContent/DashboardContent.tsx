"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const DashboardContent = () => {
  const [stats, setStats] = useState({
    totalViews: 0,
    totalProfit: 0,
    totalProducts: 0,
    totalUsers: 0,
    profitThisWeek: [],
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get("/api/dashboard-stats");
        const data = res.data; 

        setStats({
          totalViews: data.totalViews || 0,
          totalProfit: data.totalProfit || 0,
          totalProducts: data.totalProducts || 0,
          totalUsers: data.totalUsers || 0,
          profitThisWeek: data.profitThisWeek || [],
        });
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
      }
    };

    fetchStats();
  }, []); 

  return (
    <div className="p-6 flex flex-col gap-6">
      <div className="grid grid-cols-4 gap-6">
        {[
          { title: "Total Views", value: stats.totalViews },
          { title: "Total Profit", value: `$${stats.totalProfit}` },
          { title: "Total Products", value: stats.totalProducts },
          { title: "Total Users", value: stats.totalUsers },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-4 shadow-md rounded-lg">
            <h4 className="text-gray-600">{item.title}</h4>
            <p className="text-xl font-bold">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h4 className="mb-4 text-gray-600">Total Revenue</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[{ month: "Jan", revenue: stats.totalProfit }, { month: "Feb", revenue: stats.totalProfit * 1.1 }]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#4CAF50" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 shadow-md rounded-lg">
          <h4 className="mb-4 text-gray-600">Profit This Week</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={stats.profitThisWeek}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="profit" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;

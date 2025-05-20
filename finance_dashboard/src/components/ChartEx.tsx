import "./Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  name: string;
  value: number;
}

const data: DataPoint[] = [
  { name: "Jan", value: 40 },
  { name: "Feb", value: 55 },
  { name: "Mar", value: 75 },
  { name: "Apr", value: 60 },
];

export default function Chart() {
  return (
    <div className="chart-container">
      <h2 className="chart-title">Monthly Data</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <defs>
            <linearGradient id="colorLine" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366F1" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#6366F1" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fill: "#6b7280" }} />
          <YAxis tick={{ fill: "#6b7280" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#f9fafb",
              borderColor: "#e5e7eb",
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="url(#colorLine)"
            strokeWidth={3}
            dot={{ r: 5, stroke: "#6366F1", strokeWidth: 2, fill: "#fff" }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

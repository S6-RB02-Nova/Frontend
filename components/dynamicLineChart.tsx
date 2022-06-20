import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

function DynamicLineChart({ filterEnum, lineData }: { filterEnum: string; lineData: any }) {
  return (
    <section className="pb-6 sm:pb-0">
      <h1>energy consumption per {filterEnum} </h1>
      <div className="h-[17rem] p-5 border-2">
        <ResponsiveContainer width="100%">
          <LineChart data={lineData}>
            <CartesianGrid />
            <XAxis dataKey="day" interval={'preserveStartEnd'} name="stature" />
            <YAxis dataKey="power" unit="kWh" />
            <Legend />
            <Tooltip />
            <Line dataKey="power" stroke="black" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default DynamicLineChart;

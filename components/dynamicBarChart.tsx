import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
  BarChart,
  Bar,
} from 'recharts';

function DynamicBarChart({ filterEnum, barData }: { filterEnum: string; barData: any }) {
  return (
    <section className="pb-6 sm:pb-0">
      <h1>Euro&apos;s saved per {filterEnum}</h1>
      <div className="h-[17rem] p-5 border-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={400}
            height={300}
            data={barData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip cursor={{ fill: 'transparent' }} />
            <Legend />
            <Bar barSize={75} dataKey="amountSaved" fill="#59A52C" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default DynamicBarChart;

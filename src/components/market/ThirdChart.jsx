import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { BAR_DATA } from '@/utils/constants/Boxes';

function ThirdChart() {
  return (
    <div className="bg-white px-6 py-6 flex flex-col rounded-3xl shadow-[0_10px_30px_rgba(238,238,238,0.502)]">
       <div className="flex">
            <h2 className="text-[18px] font-montserrat font-semibold">Top 10 Trending Locations</h2>
        </div>
        <div className="py-6 overflow-hidden">
         <ResponsiveContainer height={350}>
        <BarChart
          data={BAR_DATA}
          barCategoryGap={30}
          margin={{ top: 15, right: 0, left: 0, bottom: 10 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="var(--color-gray)"
          />

          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tickMargin={12}
          />

          <YAxis
            domain={[0, 60]}
            tickMargin={23}
            ticks={[1, 5, 10, 20, 30, 40, 50, 60]}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `${v}B`}
          />

          <Bar
            dataKey="value"
            fill="var(--color-red)"
            radius={[10, 10, 0, 0]}
            barSize={32}
          />
        </BarChart>
      </ResponsiveContainer>
       <div className="flex justify-center gap-8 mt-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-white text-xs"></span>
                  Sales Value
                </div>
                <div className="flex items-center gap-2 opacity-50">
                  <span className="w-4 h-4 rounded-full border" />
                  Sales Volume
                </div>
              </div>
        </div>
    </div>
  )
}

export default ThirdChart;
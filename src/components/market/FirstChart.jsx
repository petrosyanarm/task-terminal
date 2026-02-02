import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { SALES_DATA } from '@/utils/constants/Boxes';

function FirstChart(){
    return(
          <div className="bg-white px-6 py-6 shadow-[0_10px_30px_rgba(238,238,238,0.502)] flex flex-col rounded-3xl">
            <div className="w-full xl:w-200">
              <div className="flex gap-5 lg:gap-47">
                <h2 className="text-[14px] lg:text-[18px] font-montserrat font-semibold">2023 VS 2024</h2>
                <div className="flex gap-10 text-sm">
                  <div className="flex text-[14px] lg:text-[18px] items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-red-500" />
                    2023
                  </div>
                  <div className="flex text-[14px] lg:text-[18px]  items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-teal-500" />
                    2024
                  </div>
                </div>
              </div>
        
              <div className="py-6 overflow-hidden">
              <ResponsiveContainer height={350}>
                <AreaChart margin={{ top: 15, right: 0, left: 0, bottom: 10 }} data={SALES_DATA}>
                  <defs>
                    <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#EF4444" stopOpacity={0.25} />
                      <stop offset="100%" stopColor="#EF4444" stopOpacity={0} />
                    </linearGradient>
        
                    <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#14B8A6" stopOpacity={0.25} />
                      <stop offset="100%" stopColor="#14B8A6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
        
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis  axisLine={false} tickLine={false}  tickMargin={12} dataKey="month" />
                  <YAxis  domain={[0, 60]} ticks={[1, 5, 10, 20, 30, 40, 50, 60]} tickMargin={23} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}B`} />
                  <Tooltip />
        
                  <Area
                    type="monotone"
                    dataKey="y2023"
                    stroke="#EF4444"
                    strokeWidth={2}
                    fill="url(#redGradient)"
                    dot={{ r: 4 }}
                  />
        
                  <Area
                    type="monotone"
                    dataKey="y2024"
                    stroke="#14B8A6"
                    strokeWidth={2}
                    fill="url(#greenGradient)"
                    dot={{ r: 4 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
              </div>

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

export default FirstChart
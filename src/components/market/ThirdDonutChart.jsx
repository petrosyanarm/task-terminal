import { THIRD_DONUT_DATA,THIRD_DONUT_STAT_DATA } from "@/utils/constants/ChartData";
import { PieChart, Pie, ResponsiveContainer, Legend } from "recharts";
import charts from "@/utils/constants/ChartData"


function ThirdDonutChart() {
  const segments = charts(THIRD_DONUT_DATA, -55);
  return (
    <div className="bg-white px-1 xl:px-0 [@media(min-width:1440px)]:px-6.25 py-10 flex flex-col rounded-[28px] shadow-[0_10px_30px_rgba(238,238,238,0.502)]">
      <div className="flex flex-col gap-10">
        <div className="w-full h-80 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              {segments.map((segment) => (
                <Pie
                  key={`pie-${segment.id}`}
                  data={[{ value: segment.value, fill: segment.fill }]}
                  cx="50%"
                  cy="50%"
                  innerRadius={segment.innerRadius}
                  outerRadius={segment.outerRadius}
                  startAngle={segment.startAngle}
                  endAngle={segment.endAngle}
                  dataKey="value"
                />
              ))}
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="px-1 grid grid-cols-3 gap-y-3  [@media(min-width:1440px)]:grid-cols-4 gap-x-2 [@media(min-width:1440px)]:gap-y-5">
          {THIRD_DONUT_STAT_DATA.map((item) => (
            <div key={item.id} className="flex">
              <div className="flex gap-2.5">
                <div>
                  <div style={{ background: item.fill }} className="w-4 h-4 rounded-full mt-1" ></div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <span className="font-semibold font-montserrat text-[12px] lg:text-base text-[rgba(54,51,82,1)]">{item.name}</span>
                  <span className="font-medium font-montserrat text-[10px] lg:text-[14px] text-[rgba(54,51,82,1)]">{item.value}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ThirdDonutChart;
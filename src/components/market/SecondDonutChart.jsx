import { SECOND_DONUT_DATA } from "@/utils/constants/ChartData";
import charts from "@/utils/constants/ChartData"
import { PieChart, Pie, ResponsiveContainer, Legend } from "recharts";


function SecondDonutChart() {
const segments = charts(SECOND_DONUT_DATA, -160);
  return (
    <div className="bg-white px-1 xl:px-5 [@media(min-width:1440px)]:px-11.5 py-10 flex flex-col shadow-[0_10px_30px_rgba(238,238,238,0.502)] rounded-[28px]">
      <div className="flex flex-col gap-10">
        <div className="w-full h-75 flex items-center justify-center">
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
        <div className="flex px-3 lg:px-6 xl:px-0 gap-10">
          {segments.map((item) => (
            <div key={item.id} className="flex">
              <div className="flex gap-2.5">
                <div>
                  <div style={{ background: item.fill }} className="w-4 h-4 rounded-full mt-1" ></div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <span className="font-semibold text-[rgba(54,51,82,1)] font-montserrat text-[12px] lg:text-base">{item.name}</span>
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

export default SecondDonutChart;
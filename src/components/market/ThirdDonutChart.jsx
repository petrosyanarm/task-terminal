import { THIRD_DONUT_DATA } from "@/utils/constants/Boxes";
import { PieChart, Pie, ResponsiveContainer, Legend } from "recharts";


function ThirdDonutChart() {
  const total = THIRD_DONUT_DATA.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;

  const segments = THIRD_DONUT_DATA.map((item) => {
    const startAngle = currentAngle;
    const angle = (item.value / total) * 360;
    currentAngle += angle;
    return {
      ...item,
      startAngle: startAngle - 20,
      endAngle: startAngle + angle - 20,
    };
  })
  return (
    <div className="bg-black px-6.25 py-10 flex flex-col rounded-[28px] shadow-[0_10px_30px_rgba(238,238,238,0.502)]">
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
        <div className="max-h-50 px-2 lg:px-6 flex flex-wrap gap-7">
          {THIRD_DONUT_DATA.map((item) => (
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
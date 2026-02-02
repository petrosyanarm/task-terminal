import { PieChart, Pie } from "recharts";
import { PIE_DATA } from "@/utils/constants/Boxes";

function DonutChart() {
  return (
    <div className="bg-white px-8 xl:px-20.5 py-10 flex flex-col rounded-[28px] shadow-[0_10px_30px_rgba(238,238,238,0.502)]">
      <div className="flex flex-col gap-10">
        <div className="flex justify-center">
          <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
            <Pie
              data={PIE_DATA}
              innerRadius="80%"
              outerRadius="100%"
              // Corner radius is the rounded edge of each pie slice
              // cornerRadius="50%"
              // padding angle is the gap between each pie slice
              // paddingAngle={5}
              dataKey="value"
              // isAnimationActive={isAnimationActive}
            />
          </PieChart>
        </div>
        <div className="flex flex-wrap gap-15">
          {PIE_DATA.map((item) => (
            <div key={item.id} className="flex">
              <div className="flex gap-2.5">
                <div>
                  <div style={{ background: item.color }} className="w-4 h-4 rounded-full mt-1" ></div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <span className="font-semibold font-montserrat text-base">{item.name}</span>
                  <span className="font-medium font-montserrat text-[14px]">{item.value}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DonutChart;
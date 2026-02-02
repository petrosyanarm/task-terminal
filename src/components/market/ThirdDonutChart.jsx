import { DONUT_DATA } from "@/utils/constants/Boxes";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

function ThirdDonutChart(){
    return(
          <div className="bg-white px-6.25 py-10 flex flex-col rounded-[28px] shadow-[0_10px_30px_rgba(238,238,238,0.502)]">
              <div className="flex flex-col gap-10">
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={DONUT_DATA}
            dataKey="value"
            innerRadius={80}
            outerRadius={120}
            startAngle={90}
            endAngle={-270}
            paddingAngle={3}
            cornerRadius={6}
          >
            {DONUT_DATA.map((item) => (
              <Cell key={item.id} fill={item.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
            <div className="max-h-50 flex flex-wrap gap-8">
                      {DONUT_DATA.map((item) => (
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

export default ThirdDonutChart;
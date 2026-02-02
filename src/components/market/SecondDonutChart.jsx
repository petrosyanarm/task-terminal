import { VUE_DATA } from "@/utils/constants/Boxes";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from "recharts";

function SecondDonutChart() {
    return (
        <div className="bg-white px-5 xl:px-11.5 py-10 flex flex-col shadow-[0_10px_30px_rgba(238,238,238,0.502)] rounded-[28px]">
            <div className="flex flex-col gap-10">
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={VUE_DATA}
                            dataKey="value"
                            innerRadius={80}
                            outerRadius={120}
                            startAngle={90}
                            endAngle={-270}
                            paddingAngle={2}
                        >
                            {VUE_DATA.map((item) => (
                                <Cell key={item.id} fill={item.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                <div className="flex gap-10">
                    {VUE_DATA.map((item) => (
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

export default SecondDonutChart;
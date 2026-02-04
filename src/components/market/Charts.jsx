import FirstChart from "@/components/market/FirstChart";
import SecondChart from "@/components/market/SecondChart";
import DonutChart from "@/components/market/FirstDonutChart";
import SecondDonutChart from "@/components/market/SecondDonutChart";
import ThirdDonutChart from "@/components/market/ThirdDonutChart";
import ThirdChart from '@/components/market/ThirdChart';

function Charts() {
    return (
        <div className="flex flex-col xl:flex-row justify-between px-4 lg:px-15 pb-20">
            <div className="gap-5 flex flex-col ">
                <FirstChart />
                <SecondChart />
                <ThirdChart />
            </div>
            <div className="gap-5 flex flex-col">
                <DonutChart />
                <SecondDonutChart />
                <ThirdDonutChart />
            </div>

        </div>
    )
}

export default Charts
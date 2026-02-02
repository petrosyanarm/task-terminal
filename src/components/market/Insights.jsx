import { INSIGHTS, INSIGHTS_2 } from "@/utils/constants/Boxes"
import { useState } from "react"
import Button from "@/components/ui/Button"
import { twMerge } from "tailwind-merge"

function Insights() {
    const [active, setActive] = useState('1w')
    const [activeMarket, setActiveMarket] = useState('All')

    return (
        <div className="px-4 lg:px-15 pt-12 flex flex-col gap-5">
            <div>
                <span className="font-montserrat text-blue-gray text-xl sm:text-2xl lg:text-[28px] font-semibold leading-[150%]">Market Insights</span>
            </div>
            <div className="py-4 sm:py-6 px-4 sm:px-6 rounded-[28px] bg-black shadow-[0_10px_30px_rgba(238,238,238,0.502)] border border-[rgba(248,249,250,1)] flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-11.5">
                <div className="flex flex-col gap-2 sm:gap-6 lg:gap-9">
                    <div className="">
                        <span className="font-montserrat text-[18px] font-semibold leading-[150%] text-blue-gray">Select Date Range</span>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:gap-5 lg:gap-7.5">
                        {INSIGHTS.map((item) => (
                            <Button variant={'primary'} className={twMerge(active === item.value ? "font-bold text-red border border-red bg-[rgba(254,242,243,1)]"
                                : "font-medium text-black bg-[rgba(247,249,255,1)]")} key={item.id} onClick={() => setActive(item.value)}>{item.label}</Button>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-4 sm:gap-6 lg:gap-9">
                    <div className="">
                        <span className="font-montserrat text-[18px] font-semibold leading-[150%] text-blue-gray">Select Market</span>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:gap-6 lg:gap-10">
                        {INSIGHTS_2.map((item) => (
                            <Button variant={'secondary'} className={twMerge(activeMarket === item.value ? "font-bold text-red border border-red bg-[rgba(254,242,243,1)]"
                                : "font-medium text-black bg-[rgba(247,249,255,1)]")} key={item.id} onClick={() => setActiveMarket(item.value)} >{item.label}</Button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Insights

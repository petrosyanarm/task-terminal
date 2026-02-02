import { INSIGHTS, INSIGHTS_2 } from "@/utils/constants/Boxes"
import { useState } from "react"
import Button from "@/components/ui/Button"

function Insights() {
    const [active, SetActive] = useState('1w')
    const [activeMarket, setActiveMarket] = useState('All')

    return (
        <div className="px-4 lg:px-15 flex flex-col gap-5">
            <div>
                <span className="font-montserrat text-xl sm:text-2xl lg:text-[28px] font-semibold leading-[150%]">Market Insights</span>
            </div>
            <div className="py-4 sm:py-6 px-4 sm:px-6 rounded-[28px] bg-black shadow-[0_10px_30px_rgba(238,238,238,0.502)] border border-[rgba(248,249,250,1)] flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-11.5">
                <div className="flex flex-col gap-2 sm:gap-6 lg:gap-9">
                    <div className="">
                        <span className="font-montserrat text-[18px] font-semibold leading-[150%] text-[rgba(21,29,72,1)]">Select Date Range</span>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:gap-5 lg:gap-7.5">
                        {INSIGHTS.map((item) => (
                            <Button variant={'primary'} key={item.id} active={active === item.value} onClick={() => SetActive(item.value)} >{item.label}</Button>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-4 sm:gap-6 lg:gap-9">
                    <div className="">
                        <span className="font-montserrat text-[18px] font-semibold leading-[150%] text-[rgba(21,29,72,1)]">Select Market</span>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:gap-6 lg:gap-10">
                        {INSIGHTS_2.map((item) => (
                            <Button variant={'secondary'} key={item.id} active={activeMarket === item.value} onClick={() => setActiveMarket(item.value)} >{item.label}</Button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Insights

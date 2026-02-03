import { PRICES_BOXES } from "@/utils/constants/Boxes";
import IconVector from "@/assets/images/Vector.svg"
import Button from "@/components/ui/Button";
function Prices() {
    return (
        <div className="px-4 lg:px-15 py-5 flex flex-col gap-2 lg:gap-0 md:flex-row justify-between">
            {PRICES_BOXES.map((item) => (
                <div key={item.id} className="px-10 lg:px-15 xl:px-32.5 py-6 bg-white rounded-[28px] border border-[rgba(248,249,250,1)] shadow-[0_10px_30px_rgba(238,238,238,0.502)]">
                    <div className="flex flex-col items-center">
                        <span className="font-semibold text-[48px] text-[rgba(54,51,82,1)] font-montserrat leading-[150%]">{item.price}</span>
                        <span className="text-[rgba(102,100,120,1)] font-montserrat font-medium text-[18px] leading-[150%]">{item.title}</span>
                        <div className="flex items-center pt-4.25 gap-2">
                            <Button className="px-2.5 py-1 flex gap-2 bg-[rgba(85,212,167,0.1)] text-[rgba(60,178,136,1)] rounded-[20px] text-[14px] font-medium font-montserrat"><img alt="Icon_Vector" src={IconVector} />{item.percent}</Button>
                            <span className="text-[14px] text-[rgba(54,51,82,1)] font-montserrat font-medium leading-[150%]">YoY Change</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Prices;
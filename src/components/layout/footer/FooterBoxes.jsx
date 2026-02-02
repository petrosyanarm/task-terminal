import { FOOTER_BOXES } from "@/utils/constants/Boxes"
import { useState } from "react";
import IconVector from "@/assets/images/Vector.png"
import Button from "@/components/ui/Button";
import { twMerge } from "tailwind-merge"

function FooterBoxes() {
    const [activeId, setActiveId] = useState(5);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-3">
            {FOOTER_BOXES.map((item) => (
                <div onClick={() => setActiveId(item.id)} key={item.id} className={twMerge(activeId === item.id ? "bg-[rgba(72,72,78,1)]" : "bg-transparent", "w-full justify-between px-2 py-3 rounded-[38px] flex gap-2 items-center cursor-pointer")}>
                    <div className="flex gap-3">
                        <img alt="avatar" className="w-6 h-6 rounded-full object-cover" src={item.avatar} />
                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[rgba(46,46,50,1)]">
                            <img alt='Message_icon' className="w-3 h-3" src={item.icon} />
                        </div>
                        <div>
                            <span className="text-[10px] lg:text-[12px] font-montserrat leading-[100%] font-medium text-[rgba(254,254,255,1)]">{item.name}</span>
                        </div>
                    </div>
                    <Button className="px-2 py-1 flex justify-center items-center gap-2 bg-[rgba(85,212,167,0.1)] text-[rgba(35,148,107,1)] rounded-[20px] text-[10px] lg:text-[14px] font-medium font-montserrat"><img className="w-2 h-1" alt="Icon_Vector" src={IconVector} />{item.percent}</Button>
                </div>
            ))}
        </div>
    )
}
export default FooterBoxes
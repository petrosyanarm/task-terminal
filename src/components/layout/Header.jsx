import Header_logo from "@/assets/images/header_logo.svg";
import { LINKS } from "@/utils/constants/Boxes";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { twMerge } from "tailwind-merge"

function Header() {
    const [show, setShow] = useState(false)
    const handleMenu = () => {
        setShow(!show)
    }
    return (
        <div className="px-5 py-4 lg:px-15 xl:py-4 flex items-center justify-between">
            <div> <img alt="Header_Logo" src={Header_logo} className="object-cover" /></div>
            <div className="hidden lg:flex items-center gap-8">
                <div>
                    <ul className="flex gap-2 xl:gap-10 px-4 xl:px-[54.5px] py-6 border rounded-[50px] border-gray">
                        {LINKS.map((item) => (
                            <Link to={item.href} key={item.id} className="text-[12px] xl:text-base text-[rgba(54,51,82,1)] font-medium font-montserrat leading-[100%]"><li>{item.title}</li></Link>
                        ))}
                    </ul>
                </div>
                <div className="flex gap-5 border py-4 pl-6 pr-4 border-gray rounded-[50px]">
                    <Button className="text-[rgba(54,51,82,1)] font-montserrat text-[12px] xl:text-base font-medium leading-[100%] px-2 py-2">Register</Button>
                    <Button className="rounded-[20px] text-red bg-[rgba(254,242,243,1)] px-6 py-2  font-montserrat text-[12px] xl:text-base font-medium leading-[100%]">Login</Button>
                </div>
            </div>
            <Button onClick={handleMenu} className="flex lg:hidden cursor-pointer" ><CiMenuBurger /></Button>
            <ul className={twMerge(show ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-4 invisible", "w-[95%] py-2 flex flex-col gap-3 rounded-2xl bg-white items-center justify-center shadow-[0_10px_30px_rgba(238,238,238,0.502)]  absolute left-1/2 -translate-x-1/2 top-18 transition-all duration-300 ease-out")}>
                {LINKS.map((item) => (
                    <Link to={item.href} key={item.id} className="text-[12px] font-medium font-montserrat leading-[100%]"><li>{item.title}</li></Link>
                ))}
            </ul>
        </div>
    )
}
export default Header;
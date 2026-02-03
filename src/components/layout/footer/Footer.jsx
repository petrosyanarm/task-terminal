import FooterLogo from "@/assets/images/footer_logo.svg?react";
import FooterBoxes from "@/components/layout/footer/FooterBoxes";
import FooterCap from "@/assets/images/footer_c.svg?react";
function Footer() {
    return (
        <div className="bg-[rgba(57,57,61,1)] w-full">
            <div className="max-w-360 w-full mx-auto">
                <div className="px-4 sm:px-8 lg:px-25 py-8 sm:py-12 lg:py-15 flex flex-col gap-10">
                    <div className="max-w-full lg:max-w-[47%]">
                        <span className="font-montserrat text-[20px] lg:text-[24px] font-semibold leading-8 text-[rgba(254,254,255,1)]">Top 10 Trending Locations and Sales History - Last 30 Days</span>
                    </div>
                    <FooterBoxes />
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 pt-8 sm:pt-12 lg:pt-15 justify-between items-start sm:items-center">
                        <FooterLogo/>
                        <div className="flex gap-2">
                            <FooterCap/>
                            <span className="font-normal font-montserrat text-[14px] text-[rgba(254,254,255,1)] leading-[100%]">2023 Broker Terminal, Inc.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer
import Header from "@/components/layout/Header"
import Insights from "@/components/market/Insights"
import Prices from "@/components/market/Prices"
import Charts from "@/components/market/Charts"
import Footer from "@/components/layout/footer/Footer"

function DefaulLayout() {
    return (
        <div className="h-screen">
            <div className="bg-white">
                <div className="w-full max-w-360 mx-auto">
                    <Header />
                    <Insights />
                    <Prices />
                    <Charts />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DefaulLayout
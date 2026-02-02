import Header from "@/components/layout/Header"
import Insights from "@/components/market/Insights"
import Prices from "@/components/market/Prices"
import Charts from "@/components/market/Charts"
import Footer from "@/components/layout/footer/Footer"

function DefaulLayout(){
    return(
        <div className="bg-white">
            <div className="w-full max-w-360 mx-auto h-screen">
                <Header/>
                <Insights/>
                <Prices/>
                <Charts/>
                <Footer/>
            </div>
        </div>
    )
}

export default DefaulLayout
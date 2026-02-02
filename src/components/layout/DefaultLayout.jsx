import Header from "@/components/layout/Header"
import Footer from "@/components/layout/footer/Footer"
import { Outlet } from "react-router-dom"

function DefaulLayout() {
    return (
        <div className="h-screen">
            <div className="bg-white">
                <div className="w-full max-w-360 mx-auto">
                    <Header />
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DefaulLayout
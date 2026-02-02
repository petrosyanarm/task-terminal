import Charts from "@/components/market/Charts";
import Insights from "@/components/market/Insights";
import Prices from "@/components/market/Prices";

function HomePage () {
    return (
        <div>
            <Insights />
            <Prices />
            <Charts />
        </div>
    );
};

export default HomePage;
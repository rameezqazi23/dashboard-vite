import AnalyticsComponent from "./AnalyticsComponent";
import ListComponent from "./ListComponent";
import SalesItemCard from "./SalesItemCard";

const RightColumn = () => {
    return (

        <div className="w-full p-2">
            <SalesItemCard />
            <AnalyticsComponent />
            <ListComponent />
        </div>


    )
}

export default RightColumn

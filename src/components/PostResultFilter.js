import FilterContext from "./context/FilterContext";
import { useContext } from "react";

RangeFilter = () => 
{
    const context = useContext(FilterContext);
    return( context.test.filter({
        if (genderFilter && person.gender !== genderFilter) {
          return false
        })

);}

// const rebels = pilots.filter(pilot => pilot.faction === "Rebels");

export default RangeFilter;
import React, { useContext, useState } from "react";
import FilterContext from "../context/FilterContext";
import Button from "./SubmitButton";
import { useNavigate } from "react-router-dom";

function Dropbox() {
  const context = useContext(FilterContext);
  // const addresses = context.results;
  const navigate = useNavigate();

  const [selectedTown, setSelectedTown] = useState(Town[1]);
  const [selectedFlatType, setSelectedFlatType] = useState(FlatType[1]);
  const [selectedStoryRange, setSelectedStoryRange] = useState(StoryRange[1]);
  const [selectedFlatModel, setSelectedFlatModel] = useState(FlatModel[1]);

  /*
  //add variable for selected filter
  let selectedTown = "",
    selectedFlatType = "",
    selectedStoryRange = "",
    selectedFlatModel = "";
    */

  const handleFilters = () => {
    const newFilter = {
      // month: ctx.name,
      town: selectedTown,
      flat_type: selectedFlatType,
      storey_range: selectedStoryRange,
      // floor_area_sqm:ctx.name,
      flat_model: selectedFlatModel,
      // remaining_lease: ctx.name,
      // resale_price:ctx.name,
    };

    const filterHistory = [...context.filters, newFilter];
    context.setFilters(filterHistory);
    console.log(filterHistory);

    navigate(`/result`);
  };
  return (
    <>
      <select
        value={selectedTown}
        onChange={(e) => {
          setSelectedTown(e.target.value);
        }}
      >
        {Town.map((a) => {
          return (
            <option key={a} value={a}>
              {a}
            </option>
          );
        })}
      </select>

      <select
        value={selectedFlatType}
        onChange={(e) => {
          setSelectedFlatType(e.target.value);
        }}
      >
        {FlatType.map((a) => {
          return (
            <option key={a} value={a}>
              {a}
            </option>
          );
        })}
      </select>

      <br></br>

      <select
        value={selectedStoryRange}
        onChange={(e) => {
          setSelectedStoryRange(e.target.value);
        }}
      >
        {StoryRange.map((a) => {
          return (
            <option key={a} value={a}>
              {a}
            </option>
          );
        })}
      </select>
      <select
        value={selectedFlatModel}
        onChange={(e) => {
          setSelectedFlatModel(e.target.value);
        }}
      >
        {FlatModel.map((a) => {
          return (
            <option key={a} value={a}>
              {a}
            </option>
          );
        })}
      </select>

      <br></br>
      <select>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
      </select>
      <select>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
      </select>
      <br></br>
      <select>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
      </select>
      <select>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
      </select>
      <br></br>
      <Button label="Submit" onClick={handleFilters} />
    </>
  );
}
export default Dropbox;

const Town = [
  "All",
  "ANG MO KIO",
  "BEDOK",
  "BISHAN",
  "BUKIT BATOK",
  "BUKIT MERAH",
  "BUKIT PANJANG",
  "BUKIT TIMAH",
  "CENTRAL AREA",
  "CHOA CHU KANG",
  "CLEMENTI",
  "GEYLANG",
  "HOUGANG",
  "JURONG EAST",
  "JURONG WEST",
  "KALLANG/WHAMPOA",
  "MARINE PARADE",
  "PASIR RIS",
  "PUNGGOL",
  "QUEENSTOWN",
  "SEMBAWANG",
  "SENGKANG",
  "SERANGOON",
  "TAMPINES",
  "TOA PAYOH",
  "WOODLANDS",
  "YISHUN",
];

const FlatType = [
  "All",
  "2 ROOM",
  "3 ROOM",
  "4 ROOM",
  "5 ROOM",
  "EXECUTIVE",
  "1 ROOM",
  "MULTI-GENERATION",
];

// const list = ["AMK", "CCK", "BG", "BW"];

// function dropbox() {
//   return (
//     <input list="Town" name="browser" id="browser">
//     <datalist id="country">
//       <option value="AMK"/>
//       <option value="CCK"/>
//       <option value="BG"/>
//     </datalist>
//     </input>
//   );
// }
// export default dropbox;

// "month": "2017-12",  <= range
// "town": "SEMBAWANG", <= list selection
// "flat_type": "4 ROOM", <= list selection
// "storey_range": "07 TO 09", <= list selection
// "floor_area_sqm": "85", <= range
// "flat_model": "Model A", <= list selection
// "remaining_lease": "85 years 08 months", list selection
// "resale_price": "355000" <= range

// 11.18

// // These countries need to be displayed as a dropdown in the input field
// const countries = ["Canada", "Russia", "Germany", "Italy"];

// // This is that input field
// const countryInput = document.getElementById('countryInput');

// // This is the datalist
// const datalist = document.getElementById('countriesDataList');

// function populateList(arr) {
//   arr.forEach(country => {
//     var option = document.createElement("option");
//     option.innerHTML = country;
//     datalist.appendChild(option);
//   });
// }

// populateList(countries);
// <input type="text" list="countriesDataList" id="countryInput" />

// <datalist id="countriesDataList"></datalist>

const StoryRange = [
  "All",
  "10 TO 12",
  "01 TO 03",
  "04 TO 06",
  "07 TO 09",
  "13 TO 15",
  "19 TO 21",
  "22 TO 24",
  "16 TO 18",
  "34 TO 36",
  "28 TO 30",
  "37 TO 39",
  "49 TO 51",
  "25 TO 27",
  "40 TO 42",
  "31 TO 33",
  "46 TO 48",
  "43 TO 45",
];

const FlatModel = [
  "All",
  "Improved",
  "New Generation",
  "DBSS",
  "Standard",
  "Apartment",
  "Simplified",
  "Model A",
  "Premium Apartment",
  "Adjoined flat",
  "Model A-Maisonette",
  "Maisonette",
  "Type S1",
  "Type S2",
  "Model A2",
  "Terrace",
  "Improved-Maisonette",
  "Premium Maisonette",
  "Multi Generation",
  "Premium Apartment Loft",
  "2-room",
  "3Gen",
];

import React, { useContext, useState } from "react";
import FilterContext from "../context/FilterContext";
import Button from "./SubmitButton";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import MinMax from "./MinMaxCounter";
function Dropbox() {
  const context = useContext(FilterContext);
  // const addresses = context.results;
  const navigate = useNavigate();

  const [selectedTown, setSelectedTown] = useState(Town[1]);
  const [selectedFlatType, setSelectedFlatType] = useState(FlatType[1]);
  const [selectedStoryRange, setSelectedStoryRange] = useState(StoryRange[1]);
  const [selectedFlatModel, setSelectedFlatModel] = useState(FlatModel[1]);
  const [selectedDateRange, setselectedDateRange] = useState([null, null]);
  const [startDate, endDate] = selectedDateRange;
  const [selectedLeaseDate, setselectedLeaseDate] = useState([null, null]);
  const [leaseStartDate, leaseEndDate] = selectedLeaseDate;
  const [selectedSQMRange, setSelectedSQMRange] = useState([0,300]);
  const [selectedResaleP, setSelectedResaleP] = useState([0,2000000]);

  /*
  //add variable for selected filter
  let selectedTown = "",
    selectedFlatType = "",
    selectedStoryRange = "",
    selectedFlatModel = "";
    */

  const handleFilters = () => {
    const newFilter = {
      month: selectedDateRange,
      town: selectedTown,
      flat_type: selectedFlatType,
      storey_range: selectedStoryRange,
      floor_area_sqm:selectedSQMRange,
      flat_model: selectedFlatModel,
      lease_commence_date: selectedLeaseDate,
      resale_price:selectedResaleP,
    };

    const filterHistory = [...context.filters, newFilter];
    context.setFilters(filterHistory);
    console.log(filterHistory);
    context.setIsFiltered(true);
    context.setSelected(context.filters.length);
    navigate(`/result`);

  };
  return (
    <>
      <DatePicker
  dateFormat="MMM YY"
  showMonthYearPicker
  selectsRange={true}
  startDate={startDate}
  endDate={endDate}
  onChange={(update) => {
    setselectedDateRange(update);
  }}
  isClearable={true}
  placeholderText='Select Resale Date Range'
/>
<DatePicker
  dateFormat="YYYY"
  showYearPicker
  selectsRange={true}
  startDate={leaseStartDate}
  endDate={leaseEndDate}
  onChange={(update) => {
    setselectedLeaseDate(update);
  }}
  isClearable={true}
  placeholderText='Select Lease Start Date'
/>
<br></br>
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
      <label>Floor Area SQM</label>
      <br></br>
      <MinMax prop={selectedSQMRange}/>
        <RangeSlider
        min={0}
        max= {300}
        defaultValue={[0,300]}
        value={selectedSQMRange} 
        onInput={setSelectedSQMRange}
        />
      <br></br>
      <br></br>
      <label>Resale Price</label>
      <br></br>
      <MinMax prop={selectedResaleP}/>
        <RangeSlider
        min={0}
        max= {2000000}
        defaultValue={[0,2000000]}
        value={selectedResaleP} 
        onInput={setSelectedResaleP}
        step ={10000}
        />
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

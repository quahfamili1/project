const list = ["AMK", "CCK", "BG", "BW"];

function dropbox() {
  return (
    <input list="Town" name="browser" id="browser">
    <datalist id="country">
      <option value="AMK"/>
      <option value="CCK"/>
      <option value="BG"/>
    </datalist>
    </input>
  );
}
export default dropbox;


// "month": "2017-12",  <= range
// "town": "SEMBAWANG", <= list selection
// "flat_type": "4 ROOM", <= list selection
// "storey_range": "07 TO 09", <= list selection
// "floor_area_sqm": "85", <= range
// "flat_model": "Model A", <= list selection
// "remaining_lease": "85 years 08 months", list selection
// "resale_price": "355000" <= range



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


// ANG MO KIO
// BEDOK
// BISHAN
// BUKIT BATOK
// BUKIT MERAH
// BUKIT PANJANG
// BUKIT TIMAH
// CENTRAL AREA
// CHOA CHU KANG
// CLEMENTI
// GEYLANG
// HOUGANG
// JURONG EAST
// JURONG WEST
// KALLANG/WHAMPOA
// MARINE PARADE
// PASIR RIS
// PUNGGOL
// QUEENSTOWN
// SEMBAWANG
// SENGKANG
// SERANGOON
// TAMPINES
// TOA PAYOH
// WOODLANDS
// YISHUN

// 2 ROOM
// 3 ROOM
// 4 ROOM
// 5 ROOM
// EXECUTIVE
// 1 ROOM
// MULTI-GENERATION
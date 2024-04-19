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

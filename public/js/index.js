const { INSERT } = require("sequelize/types/query-types");

var saveBtn = document.querySelector('.saveBtn');
/* <button class="saveBtn">Save</button> */

saveBtn.addEventListener('click', function(){
    saveCity(result);
    saveEvent(result);
  })

  const saveCity = (result) => {
// is this how i can check if there is a row for the searched city 
const checkForCity = db.query(`SELECT id FROM city WHERE name = '${result.cityName}'`);
if(checkForCity = null) {
// how do I get the city name and user_id when clicking on a save button
db.query(`INSERT INTO city (name, image, user_id)
VALUES(${result.CityName}, ${result.images[0].url}, ${LoggedIn.id}`)
} else {
    return
}
  };

// how to get the city_id
const saveEvent = (result) => {
    db.query(`INSERT INTO event (event_name, URL, image, starting_date, price_range, genre, location, city_id)
    VALUES(${result.name}, ${result.url}, ${result.images[0],url}, ${result.dates.start.localDate}, '${result.priceRanges[0].min}-${result.priceRanges[0].max}', ${result.classification[0].genre.name}, `)
};
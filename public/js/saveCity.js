

var saveBtn = document.querySelector('.saveBtn');
/* <button class="saveBtn">Save</button> */




saveBtn.addEventListener('click', function(event){
    saveCity(event);
    console.log('click');
    // saveEvent(event);
  })

  const saveCity = async (event) => {
    const dataForCity = event.target.dataset;
    console.log(dataForCity);
    const response = await fetch('/api/city', {
      method:"post",
      body:JSON.stringify({
        cityName:event.target.dataset.city, 
        image:event.target.dataset.image,
        
      }),
      headers: { 'Content-Type': 'application/json' },
    })
    console.log(response);
  };

// how to get the city_id
// const saveEvent = (event) => {
//     db.query(`INSERT INTO event (event_name, URL, image, starting_date, price_range, genre, location, city_id)
//     VALUES(${result.name}, ${result.url}, ${result.images[0],url}, ${result.dates.start.localDate}, '${result.priceRanges[0].min}-${result.priceRanges[0].max}', ${result.classification[0].genre.name}, `)
// };
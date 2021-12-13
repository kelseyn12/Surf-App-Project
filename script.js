
//define variables:

const URL = 'https://api.openweathermap.org/data/2.5/onecall?lat=46.92557&lon=-91.82174&appid=88723180e3c19e3235dfaf41df75b619&units=imperial&q='

const $button = $('#button');

// $('#button').on('click', function(evt){
//     console.log('hello');
// })

$button.on('click', handleGetData);

//when the button is clicked, get this data

function handleGetData(evt) {
    evt.preventDefault();

//do not refresh page

$.ajax(URL).then(function(currentData) {
 render(currentData);
    
    

    //take the ajax URL and then get data from that function.
    //render data

}, function(error){
    console.log('something went wrong')
    console.log(error);
})   
}



function render(currentData) {
    $('main').html(`
    <h2>Current</h2>
        <h3>Temp: ${Math.floor(currentData.current.temp)}&deg;F</h3>
        <h3>Wind Direction: ${Math.floor(currentData.current.wind_deg)}&deg;</h3>
        <h3>Speed: ${Math.floor(currentData.current.wind_speed)} mph</h3>
    `);




if (currentData.current.wind_deg >= 0 && currentData.current.wind_deg <= 25
    && currentData.current.wind_speed >= 28) {
    alert ("There is surf today! It's glassy out there! Have fun!")

    } else if (currentData.current.wind_deg >= 26 && currentData.current.wind_deg <= 45
        && currentData.current.wind_speed >= 28) {
        alert ("There is surf today, but it's choppy! Be careful! Have fun!")

    } else {
        alert ("There's no surf today. Check back tomorrow!")
}};
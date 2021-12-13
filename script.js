
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

$.ajax(URL).then(function(data) {
    render(data);

    //take the ajax URL and then get data from that function.
    //render data

}, function(error){
    console.log('something went wrong')
    console.log(error);
})   
}










function render(data) {
    $('main').html(`
        <h3>Temp: ${Math.floor(data.current.temp)}&deg;F</h3>
        <h3>Wind Direction: ${Math.floor(data.current.wind_deg)}&deg;</h3>
        <h3>Speed: ${Math.floor(data.current.wind_speed)} mph</h3>
    `);
}




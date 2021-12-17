
//define variables:

$(function(){
const URL = 'https://api.openweathermap.org/data/2.5/onecall?lat=46.92557&lon=-91.82174&appid=88723180e3c19e3235dfaf41df75b619&units=imperial&q='

const $button = $('#button');

// $('#button').on('click', function(evt){
//     console.log('hello');
// })

$button.on('click', handleGetData);
$('p').fadeIn(2000);

//when the button is clicked, get this data

function handleGetData(evt) {
    evt.preventDefault();

    //do not refresh page

    $.ajax(URL).then(function (currentData) {
        render(currentData);



        //take the ajax URL and then get data from that function.
        //render data

    }, function (error) {
        console.log('something went wrong')
        console.log(error);
    })
}



function render(currentData) {
    $('p').html(`
    <h3>Currently at Stoney Point:</h3><br>
        <h4>Temp: ${Math.floor(currentData.current.temp)}&deg;F</h4>
        <h4>Wind Direction: ${Math.floor(currentData.current.wind_deg)}&deg;</h4>
        <h4>Speed: ${Math.floor(currentData.current.wind_speed)} mph</h4>
    `
    )

    if (currentData.current.wind_deg >= 0 && currentData.current.wind_deg <= 25
        && currentData.current.wind_speed >= 28) {
        $('#head').html(`<h1>Surf Status: Surf!<br> It's glassy! Have fun!</h1>`);

    } else if (currentData.current.wind_deg >= 26 && currentData.current.wind_deg <= 45
        && currentData.current.wind_speed >= 28) {
        $('#head').html(`<h1>Surf Status: Surf!<br> Choppy. Be careful! Have fun!</h1>`);

    } else {
        $('#head').html(`<h1>Surf Status: None.<br> Check back later!</h1>`);
    }
};


//make everything in 'p' and 'main' fade in


$("#button").click(function () {
    $(this).fadeOut(1500, function () {
        $(this).delay(6000).fadeIn(5000)
    })
});

$('p').hide()
$('#button').click(function () {
    $('p').fadeIn(2000, function () {
        $('p').fadeOut(9000)
    })
});

$('#head').hide()
$('#button').click(function () {
    $('#head').fadeIn(2000, function () {
        $('#head').fadeOut(9000)
    })
});

$('#button').click(function () {
    $('.content').fadeOut(800, function () {
        $('.content').delay(6000).fadeIn(9000)
    })
});
});
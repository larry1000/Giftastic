// VARIABLES
var animals = ['dog', 'cat', 'hamster','bird'];












// FUNCTIONS

function createButtons(arr){
    for (var i =0; i < animals.length; i++){
        var btn = $("<button>");
        btn.attr("data-type",animals[i])
        btn.addClass("animal_btn")
        btn.text(animals[i])


        $('#buttons').append(btn)

    }
}







// LOGIC
createButtons(animals);

$(document).on("click",".animal_btn", function(){
    var currentValue = $(this).attr("data-type")
    console.log("animals:", currentValue)

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + currentValue + "&api_key=UQlPjKWMpY28Mwx5YF0xLwri4Q8CaZPI"
$.ajax({
    url:queryURL,
    method:"GET"
}).then(function(results){
    var response = results.data;

    for (var i = 0; i < response.length; i++) {
        var gifDiv = $("<div class='item'>");

        var animalImage = $("<img>");
        animalImage.attr("src", response[i].images.fixed_height.url);
        animalImage.attr("alt", "animal image");

        gifDiv.prepend(animalImage);
        $("#images").prepend(gifDiv);
    }

    
    console.log("RESULTS: ******************", results.data)
})
})

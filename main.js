//FUNKTION SOM DÖLJER ALLA SECTIONS GENOM ATT LÄGGA TILL "HIDDEN" TILL ALLA SEKTIONER
function hideAllSections() {
    let link = document.querySelectorAll("section")
    for (let i = 0; i < link.length; i++) {
        link[i].classList.add("hidden")
        // console.log(link[i]);
    }
}
    
    

let btn = document.querySelectorAll(".btn-wrapper button")//TAR KNAPPARNA HOME, SEARCH OCH INFO
let currentClass;
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function(){ // GER KNAPPARNA EN EVENT LISTENER
        currentClass = "." + btn[i].innerHTML.toLowerCase()//HÄMTAR INNERTEXT OCH OMVANDLAR DET TILL LOWER CASE SAMT SPARAR DET I "CURRENTCLASS" VARIABELN
    
        hideAllSections() // KALLAR PÅ FUNKTIONEN SOM LÄGGER TILL HIDDEN PÅ ALLA SEKTIONS
        document.querySelector(currentClass).classList.remove("hidden")//TAR BORT HIDDEN FRÅN JUST DEN SEKTION MAN VÄLJER GENOM ATT KLICKA PÅ KNAPPEN
    })
}
 
async function randomBeer() {
    const request = await fetch (`https://api.punkapi.com/v2/beers/random`)
    const response = await request.json()
    return response
}

async function print(){
    let randomBeerFetch = await randomBeer()
    // console.log(randomBeerFetch[0])
    if (randomBeerFetch[0].image_url != null) {
        document.querySelector(".beer-card-img").src = randomBeerFetch[0].image_url
        document.querySelector(".info-beer-card-img").src = randomBeerFetch[0].image_url
        document.querySelector(".info-beer-card-img").style = "max-height: 400px"
    }
    if(randomBeerFetch[0].image_url === null){
        console.log("we got a null!");

        //Landing page beer card
        document.querySelector(".beer-card-img").src = "images/baby-yoda.jpeg"
        document.querySelector(".beer-card-img").style = "max-width: 300px"
        //Info page beer card
        document.querySelector(".info-beer-card-img").src = "images/baby-yoda.jpeg"
        document.querySelector(".info-beer-card-img").style = "max-height: 400px"
        document.querySelector(".info-beer-card-img").style = "max-width: 300px"
    }
        
    document.querySelector(".home-beer-card-name p").innerHTML = randomBeerFetch[0].name

    var a = document.getElementsByClassName("info-beer-information")[0]
    a.innerHTML = "<ul>"
    //all information om ölen som visas under INFO page
    a.innerHTML += "<li>" + "<strong> Name: </strong>" + randomBeerFetch[0].name + "</li>"
    a.innerHTML += "<li>" + "<strong> Alcohol by volume: </strong>" + randomBeerFetch[0].abv + "</li>"
    a.innerHTML += "<li>" + "<strong> Description: </strong>" + randomBeerFetch[0].description + "</li>"
    a.innerHTML += "<li>" + "<strong> Volume: </strong>" + randomBeerFetch[0].volume.value + " " + randomBeerFetch[0].volume.unit + "</li>"
    a.innerHTML += "<li>" + "<strong> Food pairing : </strong>" + randomBeerFetch[0].food_pairing + "</li>"
    a.innerHTML += "<li>" + "<strong> Brewer tips : </strong>" + randomBeerFetch[0].brewers_tips + "</li>"
    a.innerHTML += "<li>" + "" + "</li>"
    a.innerHTML += "<li>" + "<strong> Ingredients: </strong>" + randomBeerFetch[0].ingredients + "</li>"

    
}
print()


document.querySelector(".home-random-beer-button").addEventListener("click", print)
document.querySelector(".see-more").addEventListener("click", seeMore)

function seeMore(){

    hideAllSections()
    document.querySelector(".info").classList.remove("hidden")
}

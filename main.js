//FUNKTION SOM DÖLJER ALLA SECTIONS GENOM ATT LÄGGA TILL "HIDDEN" TILL ALLA SEKTIONER
function hideAllSections() {
    let link = document.querySelectorAll("section")
    for (let i = 0; i < link.length; i++) {
        link[i].classList.add("hidden")
        // console.log(link[i]);
    }
}


// console.log(response)


let btn = document.querySelectorAll(".header-btn p")//TAR KNAPPARNA HOME, SEARCH 
let currentClass;
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () { // GER KNAPPARNA EN EVENT LISTENER
        currentClass = "." + btn[i].innerHTML.toLowerCase()//HÄMTAR INNERTEXT OCH OMVANDLAR DET TILL LOWER CASE SAMT SPARAR DET I "CURRENTCLASS" VARIABELN

        hideAllSections() // KALLAR PÅ FUNKTIONEN SOM LÄGGER TILL HIDDEN PÅ ALLA SEKTIONS
        document.querySelector(currentClass).classList.remove("hidden")//TAR BORT HIDDEN FRÅN JUST DEN SEKTION MAN VÄLJER GENOM ATT KLICKA PÅ KNAPPEN
    })
}
//--------------------------------------------------------------------

//EVENT LISTENER TILL GO BACK KNAPPEN
let btnGoBack = document.querySelector(".img-go-back")//TAR BILDEN GO BACK

btnGoBack.addEventListener("click", function () { // GER BILDEN EN EVENT LISTENER
     
        hideAllSections() // KALLAR PÅ FUNKTIONEN SOM LÄGGER TILL HIDDEN PÅ ALLA SEKTIONS
        document.querySelector(".home").classList.remove("hidden")//TAR BORT HIDDEN FRÅN JUST DEN SEKTION MAN VÄLJER GENOM ATT KLICKA PÅ KNAPPEN
    })

//EVENT LISTENER TILL LOGOTYPEN

let logo = document.querySelector(".logo")//TAR BILDEN GO BACK

logo.addEventListener("click", function () { // GER BILDEN EN EVENT LISTENER
     
        hideAllSections() // KALLAR PÅ FUNKTIONEN SOM LÄGGER TILL HIDDEN PÅ ALLA SEKTIONS
        document.querySelector(".home").classList.remove("hidden")//TAR BORT HIDDEN FRÅN JUST DEN SEKTION MAN VÄLJER GENOM ATT KLICKA PÅ KNAPPEN
    })



//--------------------------------------------------------------------


let dataRandomBeer = []
// console.log(dataRandomBeer.name)

async function randomBeer() {
    dataRandomBeer = []
    const request = await fetch(`https://api.punkapi.com/v2/beers/random`)
    const response = await request.json()
    dataRandomBeer.push(
        {"name" : response[0].name},
        {"abv" : response[0].abv},
        {"description" : response[0].description},
        {"volume_value" : response[0].volume.value},
        {"food_pairing" : response[0].food_pairing},
        {"brewers_tips" : response[0].brewers_tips},
        {"ingredients" : response[0].ingredients}
        )
    if (response[0].image_url != null) {
        dataRandomBeer.push({"picture" : response[0].image_url} ) 
    }
    if (response[0].image_url === null){
        dataRandomBeer.push({"picture" : "images/baby-yoda.jpeg"} )
    }
        
    return response
}
//randomBeer()



function fillTheInfo(source) {
    if (source[0].image_url != null) {
        document.querySelector(".beer-card-img").classList.remove("babyYoda")
        document.querySelector(".beer-card-img").src = source[0].image_url
        document.querySelector(".info-beer-card-img").src = source[0].image_url
        document.querySelector(".info-beer-card-img").style = "max-height: 400px"
    }
    if (source[0].image_url === null) {
        // console.log("we got a null!");

        //Landing page beer card
        
        // document.querySelector(".info-no-picture").classList.remove("hidden")
        document.querySelector(".beer-card-img").src = "images/baby-yoda.jpeg"
        // document.querySelector(".beer-card-img").style = "max-width: 300px"
        document.querySelector(".beer-card-img").classList.add("babyYoda")
        //Info page beer card
        
        document.querySelector(".info-beer-card-img").src = "images/baby-yoda.jpeg"
        document.querySelector(".info-beer-card-img").style = "max-height: 400px; max-width: 300px"
    }

    var a = document.getElementsByClassName("info-beer-information")[0]
    a.innerHTML = "<ul>"
    //all information om ölen som visas under INFO page
    a.innerHTML += "<li>" + "<strong> Name: </strong>" + source[0].name + "</li>"
    a.innerHTML += "<li>" + "<strong> Alcohol by volume: </strong>" + source[0].abv + "</li>"
    a.innerHTML += "<li>" + "<strong> Description: </strong>" + source[0].description + "</li>"
    a.innerHTML += "<li>" + "<strong> Volume: </strong>" + source[0].volume.value + " " + source[0].volume.unit + "</li>"
    a.innerHTML += "<li>" + "<strong> Food pairing : </strong>" + source[0].food_pairing + "</li>"
    a.innerHTML += "<li>" + "<strong> Brewer tips : </strong>" + source[0].brewers_tips + "</li>"
    a.innerHTML += "<li>" + "" + "</li>"
    // a.innerHTML += "<li>" + "<strong> Ingredients: </strong>" + source[0].ingredients + "</li>"
    
    
}

async function printRandomBeer(){
    let testRandomBeerPrint = await randomBeer()
    fillTheInfo(testRandomBeerPrint)
    
    document.querySelector(".home-beer-card-name p").innerHTML = testRandomBeerPrint[0].name
    return testRandomBeerPrint
}
printRandomBeer()

document.querySelector(".home-random-beer-button").addEventListener("click", printRandomBeer)


async function print(desiredFetch) {
    let randomBeerFetch = await desiredFetch

    // fillTheInfo(randomBeerFetch)

    if (randomBeerFetch[0].image_url != null) {
        
        // document.querySelector(".info-no-picture").classList.add("hidden")
        document.querySelector(".info-beer-card-img").src = randomBeerFetch[0].image_url
        document.querySelector(".info-beer-card-img").style = "max-height: 400px"
    }
    if (randomBeerFetch[0].image_url === null) {
        console.log("we got a null!");

        //Landing page beer card
        
        // document.querySelector(".info-no-picture").classList.remove("hidden")
        document.querySelector(".info-beer-card-img").src = "images/baby-yoda.jpeg"
        document.querySelector(".info-beer-card-img").style = "max-height: 400px; max-width: 300px"
    }

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
    // a.innerHTML += "<li>" + "<strong> Ingredients: </strong>" + randomBeerFetch[0].ingredients + "</li>"

    let theHops = ""
    let theMalt = ""
    let coma = ", "
    for (let i = 0; i < randomBeerFetch[0].ingredients.hops.length; i++) {
        theHops += randomBeerFetch[0].ingredients.hops[i].name + coma
        // console.log(theHops)
    }
    for (let i = 0; i < randomBeerFetch[0].ingredients.malt.length; i++) {
        theMalt += randomBeerFetch[0].ingredients.malt[i].name + coma
        // console.log(theMalt)
    }
    a.innerHTML += "<li>" + "<strong> Ingredients: <br> </strong>" + "<u><i>Hops</i></u>: " + theHops.slice(0, -2) + '.' + "<br>" + "<u><i>Malt</i></u>: " + theMalt.slice(0, -2) + '.' + "</li>"
    a.innerHTML += "<li>" + "<strong> Yeast : </strong>" + randomBeerFetch[0].ingredients.yeast + "</li>"

}
//print(randomBeer());


function seeMore() {
    let theHops = ""
    let theMalt = ""
    let coma = ", "

    hideAllSections()
    document.querySelector(".info-beer-card-img").src = dataRandomBeer[7].picture
    var a = document.getElementsByClassName("info-beer-information")[0]
    a.innerHTML = "<ul>"
    //all information om ölen som visas under INFO page
    a.innerHTML += "<li>" + "<strong> Name: </strong>" + dataRandomBeer[0].name + "</li>"
    a.innerHTML += "<li>" + "<strong> Alcohol by volume: </strong>" + dataRandomBeer[1].abv + "</li>"
    a.innerHTML += "<li>" + "<strong> Description: </strong>" + dataRandomBeer[2].description + "</li>"
    a.innerHTML += "<li>" + "<strong> Volume: </strong>" + dataRandomBeer[3].volume_value + " liters" + "</li>"
    a.innerHTML += "<li>" + "<strong> Food pairing : </strong>" + dataRandomBeer[4].food_pairing + "</li>"
    a.innerHTML += "<li>" + "<strong> Brewer tips : </strong>" + dataRandomBeer[5].brewers_tips + "</li>"
    
    for (let i = 0; i < dataRandomBeer[6].ingredients.hops.length; i++) {
        theHops += dataRandomBeer[6].ingredients.hops[i].name + coma
        // console.log(theHops)
    }
    for (let i = 0; i < dataRandomBeer[6].ingredients.malt.length; i++) {
        theMalt += dataRandomBeer[6].ingredients.malt[i].name + coma
        // console.log(theMalt)
    }
    a.innerHTML += "<li>" + "<strong> Ingredients: <br> </strong>" + "<u><i>Hops</i></u>: " + theHops.slice(0, -2) + '.' + "<br>" + "<u><i>Malt</i></u>: " + theMalt.slice(0, -2) + '.' + "</li>"
    a.innerHTML += "<li>" + "<strong> Yeast : </strong>" + dataRandomBeer[6].ingredients.yeast + "</li>"
    

    // console.log(dataRandomBeer)
   
    //skriva ut de sparade informationen om random beer card på info page
    document.querySelector(".info").classList.remove("hidden")
}
document.querySelector(".see-more").addEventListener("click", seeMore)







/* ----------------------------------------------- SEARCH PAGE ----------------------------------------- */


//global variables
let pageCounter = 1;
let searchButton = document.querySelector(".fa-search");
let searchInput = document.querySelector(".regular-search");
let list;


let normalFetch = async function(userInput) {
    let root = "https://api.punkapi.com/v2/beers?beer_name=" + userInput;
    let request = await fetch(root)
    let result = await request.json();

    return result;
}


let fetchBySearch = async function (userInput, advancedSr, page) {
    if(advancedSr == undefined) {
        advancedSr = "";
    }
    // pageCounter = 1
    let root = "https://api.punkapi.com/v2/beers?beer_name=" + userInput + "&" + advancedSr + "per_page=10"  + "&page=" + pageCounter;
    
    let request = await fetch(root)
    let result = await request.json();
    // console.log(request);
    //Här lägger vi en event listener som rensar söklistan
    const clearButton = document.getElementById("clear-button");
    clearButton.addEventListener("click", function() {
        pageCounter = 1
        document.querySelector(".current-page").innerHTML = pageCounter
        console.log(pageCounter)
        
        console.log("clear button event listener");
        

        let filterInputValues = document.querySelectorAll(".filter-wrapper input");
        filterApplied = false;
        document.querySelector(".form-2-container").classList.add("hidden")
        //Här ska man finslippa--------------------------------------------------------------
        for(let i = 0; i < list.length; i++) {
               list[i].remove();
                }

        for(let i = 0; i < filterInputValues.length; i++) {
            filterInputValues[i].value = null;
        }
        hideList();
        searchInput.value = ""
        
    
    })


    return result;

}

let fetchByFilter = async function(userInput, advancedSr) {
    if(advancedSr == undefined) {
        advancedSr = "";
    }
    if(userInput == undefined) {
        advancedSr = "";
    }
    let root = "https://api.punkapi.com/v2/beers?" + userInput + "&" + advancedSr + "per_page=10" + "&page=" + pageCounter;
    // pageCounter = 1
    document.querySelector(".current-page").innerHTML = pageCounter
    let request = await fetch(root)
    console.log(pageCounter)
    let result = await request.json();

    
    return result;
}


let pageLimit = false;
let pageResultLength = 0
const pageContainer = document.querySelector(".form-2-container")

let createList = async function (userInput, advancedSr) {

    // pageCounter = 1

    let fetchResult;
    
    if(userInput == 0 && filterApplied == true) {
        //  console.log("works")
        
        document.querySelector(".current-page").innerHTML = pageCounter
        console.log(pageCounter)

        fetchResult = await fetchByFilter(userInput, advancedSr);
        pageResultLength = fetchResult.length
        console.log(fetchResult.length)
        if(fetchResult.length == 0) {
            pageLimit = true;
        }
        else{
            pageLimit = false;
        }
    
    }
    else {
        // pageCounter = 1
        fetchResult = await fetchBySearch(userInput, advancedSr);
        pageResultLength = fetchResult.length
        console.log("works")
        // document.querySelector(".current-page").innerHTML = pageCounter
        
        if(fetchResult.length == 0) {
            pageLimit = true;
        }
        else{
            pageLimit = false;
        }
    }

    

    let searchMain = document.querySelector(".form-1-container");
    let ul = document.createElement("ul");
    searchMain.appendChild(ul);
    ul.classList.add("ul-form");
    


    if(userInput.length > 2) {
        // console.log("true");

        //EN EVENT LISTENER SOM RENSAR LISTAN NÄR MAN CLICKAR PÅ SKÄRMEN
        // document.body.addEventListener('click', function(){
        //     console.log("click!!!")
        //     //tar bort alla elements
        //     for(let i = 0; i < list.length; i++) {
        //         list[i].remove();
        //     }
        //     //tar bort page counter
        //     document.querySelector(".form-2-container").classList.add("hidden")
        // }, true)
            
        


        pageContainer.classList.remove("hidden")
        for (let i = 0; i < fetchResult.length; i++) {
            let li = document.createElement("li");
            ul.appendChild(li)

            list = document.querySelectorAll(".ul-form li");
            list[i].classList.add("li-form");
    
            list[i].innerHTML = fetchResult[i].name;
            
        }

        //---------------------------------------------------här
        
    }

    if(filterApplied == true) {
        console.log("also true")
        pageContainer.classList.remove("hidden")
        for (let i = 0; i < fetchResult.length; i++) {
            let li = document.createElement("li");
            ul.appendChild(li)

            list = document.querySelectorAll(".ul-form li");
            list[i].classList.add("li-form");
    
            list[i].innerHTML = fetchResult[i].name;
            
        }
    }

    if (searchInput.value.length == 0 && filterApplied == false) {
        document.querySelector(".form-2-container").classList.add("hidden")
    }

      
    //makes the list clickable
    if(searchInput.value.length > 2 || filterApplied == true) {
        for (let i = 0; i < list.length; i++) {
            list[i].addEventListener("click", function () {
                print(normalFetch(list[i].innerHTML));
                seeMore();
            })
        }
    }

    

  
    
    
}



let hideList = function() {
    if(searchInput.value.length == 0) {
        
        for(let i = 0; i < list.length; i++) {
            list[i].remove();
        }
    }
    //  else{
    //      for(let i = 0; i < list.length; i++) {
    //          list[i].style.display = "";
    //      }
    //  }
}

searchInput.addEventListener("keyup", function () {

    createList(searchInput.value, oneFunction());
    hideList();

 
 
})
      
        
/* --------------------------------- advanced search ---------------------------- */



let filterButton = document.querySelector(".filter-button");
let clicked = false;

 filterButton.addEventListener("click", function() {
    console.log("click advanced")
    const filters = document.querySelectorAll(".filter-wrapper div");
    const applyButton = document.getElementById("apply-button");
    const clearButton = document.getElementById("clear-button");

    // clearButton.addEventListener('click', function(){
    //         console.log("click!!!")
    //         // pageCounter = 1
    //         //tar bort alla elements
    //         for(let i = 0; i < list.length; i++) {
    //             list[i].remove();
    //         }
    //         //tar bort page counter
    //         document.querySelector(".form-2-container").classList.add("hidden")
    //     }, true)


    if(clicked == false) {
    
        applyButton.classList.remove("inactive");
        clearButton.classList.remove("inactive");
        for(let i = 0; i < filters.length; i++) {
            filters[i].classList.remove("inactive");
           clicked = true;
        }
    }
    else {
    
        applyButton.classList.add("inactive");
        clearButton.classList.add("inactive");
        for(let i = 0; i < filters.length; i++) {
            filters[i].classList.add("inactive");
           clicked = false;
        }
    }

    applyButton.addEventListener("click", function() {
        console.log("apply button event listener");
        pageCounter = 1
        console.log(pageCounter)
        oneFunction();
        createList(searchInput.value, oneFunction());
    })

    // clearButton.addEventListener("click", function() {
    //     // pageCounter = 1
    //     console.log("clear button event listener");

    //     let filterInputValues = document.querySelectorAll(".filter-wrapper input");
    //     filterApplied = false;
    //     document.querySelector(".form-2-container").classList.add("hidden")
    //     //Här ska man finslippa--------------------------------------------------------------
    //     for(let i = 0; i < list.length; i++) {
    //            list[i].remove();
    //             }

    //     for(let i = 0; i < filterInputValues.length; i++) {
    //         filterInputValues[i].value = null;
    //     }

    //     hideList();
    
    // })
   
})




  
//VARIABLER AVANCERAD SÖKNING-------------------    

let hopsInput = ""
let maltInput = ""
let brewedBtInput = ""
let brewedAtInput = ""
let AbvGtInput = ""
let AbvLtInput = ""

let urlToFetch = ""

let filterApplied = false;

function oneFunction(){

    if (document.getElementById('hops').value === "") {
        hopsInput = ""
    }else{
        filterApplied = true;
        hopsInput = "hops=" + document.getElementById('hops').value.toLowerCase().replace(/\s/, '_') + "&"
    }

    
    if (document.getElementById('malt').value === "") {
        maltInput = ""
    }else{
        filterApplied = true;
        maltInput = "malt=" + document.getElementById('malt').value.toLowerCase().replace(/\s/, '_') + "&"
    }
    
    if (document.getElementById('bbt').value === "") {
        brewedBtInput = ""
    }else{
        filterApplied = true;
        //brewedBtInput = "brewed_before=" + document.getElementById('bbt').value + "&"
        brewedBtInput = "brewed_before=" + (document.getElementById('bbt').value).slice(5,8) + (document.getElementById('bbt').value).slice(0,4) + "&"
    }
        
    if (document.getElementById('bat').value === "") {
        brewedAtInput = ""
    }else{
        filterApplied = true;
        //let validateBrewedAfter = document.getElementById('bat').value
        
        //console.log(validateBrewedAfter.slice(5,8) + "" + validateBrewedAfter.slice(0,4))
        //console.log("probando" + (document.getElementById('bat').value).slice(5,8) + (document.getElementById('bat').value).slice(0,4) )
        
        brewedAtInput = "brewed_after=" + (document.getElementById('bat').value).slice(5,8) + (document.getElementById('bat').value).slice(0,4) + "&"
        console.log(brewedAtInput)
    }
    
    if (document.getElementById('abvGt').value === "") {
        AbvGtInput = ""
    }else{
        filterApplied = true;
        AbvGtInput = "abv_gt=" + document.getElementById('abvGt').value + "&"
    }
    
    if (document.getElementById('abvLt').value === "") {
        AbvLtInput = ""
    }else{
        filterApplied = true;
        AbvLtInput = "abv_lt=" + document.getElementById('abvLt').value + "&"
    }

    urlToFetch = hopsInput + maltInput + brewedBtInput + brewedAtInput + AbvGtInput + AbvLtInput
    // console.log(urlToFetch)
    return urlToFetch
        
 
}

async function advancedSearch(hops, malt, brewedBeforeThan, brewedAfterThan, abvGreater, abvLesser, page){
    const request = await fetch (`https://api.punkapi.com/v2/beers?${hops}${malt}${brewedBeforeThan}${brewedAfterThan}${abvGreater}${abvLesser}+"&page="${page}`)
    console.log(request)
    const answer = await request.json()
    console.log(answer)
}

// https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6

//-------------------------------------------PREVIOUS OCH NEXT BUTTONS--------------------------------------





    const nextButton = document.getElementById("next");

    nextButton.addEventListener("click", function() {
        if(pageLimit == false && pageResultLength == 10) { 
            console.log(pageResultLength)
            pageCounter++
            createList(searchInput.value, oneFunction(), pageCounter)
            document.querySelector(".current-page").innerHTML = pageCounter;
            for(let i = 0; i < list.length; i++) {
                list[i].remove();
            }
        }

        if (pageResultLength != 10) {
            pageCounter = pageCounter
        }

        else {
            for(let i = 0; i < list.length; i++) {
                list[i].remove();
            }
        }
       
    })
   

    const previousButton = document.getElementById("previous");

    previousButton.addEventListener("click", function() {
        
        if(pageCounter != 1) {
            for(let i = 0; i < list.length; i++) {
                list[i].remove();
            }
            hideList()
            pageCounter--
            createList(searchInput.value, oneFunction(), pageCounter);
            document.querySelector(".current-page").innerHTML = pageCounter
        }
      
    })
  



 
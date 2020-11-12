let allBeerData = []

async function getAllData() {
    let request = await fetch('https://api.punkapi.com/v2/beers?page=2&per_page=80')
    let answer = await request.json()

    // console.log(answer[0].ingredients.malt)
    for (let i = 0; i < answer.length; i++) {
        answer[i].ingredients.malt
        console.log(answer[i].ingredients.malt)
    }

}
// getAllData()

   
//Search by malt
async function fetchByMalt(malt){
    const request = await fetch (`https://api.punkapi.com/v2/beers?malt=${malt}`)
    const answer = await request.json()
    // console.log(answer)
    return answer
}

let chosenMalt = "amber"
fetchByMalt(chosenMalt)

//-----------------------------------------

//1. Search by hops
async function fetchByHops(hops){
    const request = await fetch (`https://api.punkapi.com/v2/beers?hops=${hops}`)
    const answer = await request.json()
    console.log(answer)
    return answer
}

let chosenHops = "Saaz"
fetchByHops(chosenHops)

//-----------------------------------------

//2. Search by ABV GREATER than xxxx
async function fetchByAbvGreaterThan(abvG){
    const request = await fetch (`https://api.punkapi.com/v2/beers?abv_gt=${abvG}`)
    const answer = await request.json()
    console.log(answer)
    return answer
}

let chosenAbvGreaterThan = "5"
fetchByAbvGreaterThan(chosenAbvGreaterThan)

//-----------------------------------------

//3. Search by ABV LESS than xxxx
async function fetchByAbvLessThan(abvL){
    const request = await fetch (`https://api.punkapi.com/v2/beers?abv_lt=${abvL}`)
    const answer = await request.json()
    console.log(answer)
    return answer
}

let chosenAbvLessThan = "5"
fetchByAbvLessThan(chosenAbvLessThan)





































// Acidulated Malt
// Amber
// Brown 
// Black Malt
// Carafa Special Malt Type 1 
// Carafa Special Malt Type 2
// Carafa Special Malt Type 3
// CaraAroma
// Caramunich
// Cascara
// Chocolate
// Crystal 150 
// Caramalt
// Dark Crystal
// Dark Crystal 350-400
// Dextrin malt
// Extra Pale 
// Extra Pale - Spring Blend
// Flaked Oats
// Ginger Root
// Honey
// Lactose
// Maris Otter
// Maris Otter Extra Pale
// Munich 
// Organic Lager
// Organic Caramalt
// Organic Munich
// Organic Chocolate
// Pilsner
// Roasted Barley
// Roasted Malt
// Rye
// Smoked Warminster
// Special W
// Torrified Wheat
// Weyermann Beech Smoked
// Wheat
// Wheat Malt
// White Cane Sugar


   



//Name, Hops, Malt, Brewed before/after, Abv
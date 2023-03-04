// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    document.getElementById("missionTarget").innerHTML = 
   // Here is the HTML formatting for our mission target div.
   `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${imageUrl}">`
   
}
//https://handlers.education.launchcode.org/static/planets.json

function validateInput(testInput) {

   if(testInput ===""){ return "Empty" }
   if(testInput === null) {return "Empty"}
   if(testInput === undefined) {return "Empty"}
   if(testInput.trim() === ""){return "Empty"}
   if(isNaN(testInput)=== true){return "Not a Number"}
   if(isNaN(testInput)=== false){return "Is a Number"}
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`
   document.getElementById("copilotStatus").innerHTML = `copilot ${copilot} is ready for launch`
   document.getElementById("cargoStatus").innerHTML ="Cargo mass low enough for launch"   
   document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch"

   //checking fuel level high enough
   if(fuelLevel < 10000){
    document.getElementById("faultyItems").style.visibility= "visible"
    document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch"
    document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
    document.getElementById("launchStatus").style.color= "red"
    }
    
    //cargolevel low enough
    if(cargoLevel > 10000){
     document.getElementById("faultyItems").style.visibility= "visible"
     document.getElementById("cargoStatus").innerHTML ="Cargo mass too heavy for launch"   
     document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"   
     document.getElementById("launchStatus").style.color= "red"   
    }

    //both conditions are met
    if(fuelLevel >= 10000 && cargoLevel <= 10000){
    document.getElementById("launchStatus").innerHTML= "Shuttle is Ready for Launch"
    document.getElementById("launchStatus").style.color= "green"
    document.getElementById("faultyItems").style.visibility= "visible"
    
    };



}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    //create a variable to return a random planet sel//
    let planetIndex= Math.floor(Math.random()*planets.length);

    return planets[planetIndex]; // returns whatever is randomly sel//

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

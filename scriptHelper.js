// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {

   if(testInput ===""){ return "Empty" }
   if(testInput === null) {return "Empty"}
   if(testInput === undefined) {return "Empty"}
   if(testInput.trim() === ""){return "Empty"}
   if(isNaN(testInput)=== true){return "Not a Number"}
   if(isNaN(testInput)=== false){return "Is a Number"}
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   document.getElementById("pilotStatus").value = `Pilot ${pilot} is ready for launch`
   document.getElementById("copilotStatus").value = `copilot ${copilot} is ready for launch`
   
   if(fuelLevel < 10000){
    document.getElementById("faultyItems").style.visibility= "visible"
    document.getElementById("fuelStatus").value = "Fuel level too low for launch"
    document.getElementById("launchStatus").value = "Shuttle not ready for launch"
    document.getElementById("launchStatus").style.color= "red"
    }

    if(cargoLevel > 10000){
     document.getElementById("faultyItems").style.visibility= "visible"
     document.getElementById("cargoStatus").value ="Cargo mass too heavy for launch"   
     document.getElementById("launchStatus").value = "Shuttle not ready for launch"   
     document.getElementById("launchStatus").style.color= "red"   
    }

    else {
    document.getElementById("launchStatus").value= "Shuttle is Ready for Launch"
    document.getElementById("launchStatus").style.color= "green"
    
    }




}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

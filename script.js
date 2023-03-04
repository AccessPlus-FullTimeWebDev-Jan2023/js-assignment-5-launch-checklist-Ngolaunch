// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper");

//const { myFetch, pickPlanet } = require("./scriptHelper");



window.addEventListener("load", function() {

    let launchform = document.getElementById("launchForm")

    launchform.addEventListener("submit", function(event){
        event.preventDefault();

        
    let doc = document.getElementById("faultyItems")
    let pilot = document.querySelector("input[name=pilotName]").value 
    let copilot = document.querySelector("input[name=copilotName]").value 
    let fuelLv = parseInt(document.querySelector("input[name=fuelLevel]").value) 
    let cargo = parseInt(document.querySelector("input[name=cargoMass]").value)

        formSubmission(document,doc,pilot,copilot,fuelLv,cargo);
    })
    

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse= myFetch();

   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let selPlanet = pickPlanet(listedPlanets);
    addDestinationInfo(document, selPlanet.name , selPlanet.diameter, selPlanet.star, selPlanet.distance, selPlanet.moons, selPlanet.image);
    
})
   
});
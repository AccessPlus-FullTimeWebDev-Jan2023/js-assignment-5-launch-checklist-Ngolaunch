// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper");

// const { myFetch } = require("./scriptHelper");



window.addEventListener("load", function() {

    let launchform = document.getElementById("launchForm");
    document.getElementById("faultyItems").style.visibility = 'hidden';

    launchform.addEventListener("submit", function(event){
        event.preventDefault();

        
    let doc = document.getElementById("faultyItems")
    let pilot = document.querySelector("input[name=pilotName]").value 
    let copilot = document.querySelector("input[name=copilotName]").value 
    let fuelLv = document.querySelector("input[name=fuelLevel]").value 
    let cargo = document.querySelector("input[name=cargoMass]").value

    // check if inputs are empty
    if (validateInput(cargo) === "Empty") {
        alert("All fields are required!");
        return;
    }
    if (validateInput(pilot) === "Empty") {
        alert("All fields are required!");
        return;
    }
    if (validateInput(copilot) === "Empty") {
        alert("All fields are required!");
        return;
    }
    if (validateInput(fuelLv) === "Empty") {
        alert("All fields are required!");
        return;
    }


    // check if inputs are valid
    if (validateInput(cargo) === "Not a Number") {
        alert("Make sure to enter valid information for each field!");
        return;
    }
    if (validateInput(pilot) === "Is a Number") {
        alert("Make sure to enter valid information for each field!");
        return;
    }
    if (validateInput(copilot) === "Is a Number") {
        alert("Make sure to enter valid information for each field!");
        return;
    }
    if (validateInput(fuelLv) === "Not a Number") {
        alert("Make sure to enter valid information for each field!");
        return;
    }
    
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
const submitButton = document.getElementById('submit');

const storyP = document.getElementById('story');

const nounInput = document.getElementById('noun');

const noun2Input = document.getElementById('noun2');

const verbInput = document.getElementById('verb');

const verb2Input = document.getElementById('verb2');

const adjectiveInput = document.getElementById('adjective');

const adjective2Input = document.getElementById('adjective2');

const adjective3Input = document.getElementById('adjective3');

const placeInput = document.getElementById('place');

const place2Input = document.getElementById('place2');

const place3Input = document.getElementById('place3');

const place4Input = document.getElementById('place4');

const errorInput = document.getElementById('error-input')


	const noun = nounInput.value;
    const noun2 = noun2Input.value;
    const verb = verbInput.value;
    const verb2 = verb2Input.value;
    const adjective = adjectiveInput.value;
    const adjective2 = adjective2Input.value;
    const adjective3 = adjective3Input.value;
    const place = placeInput.value;
    const place2 = place2Input.value;
    const place3 = place3Input.value;
    const place4 = place4Input.value;




submitButton.onclick = function() {

    if (!nounInput.value) {
            errorInput.textContent = "Please don't leave me empty.";
    }
    
    else if (!noun2Input.value) {
    errorInput.textContent = "Please don't leave me empty.";
    }
    
    else if (!verbInput.value) {
		errorInput.textContent = "Please don't leave me empty.";
    }
    
      else if (!verb2Input.value) {
		errorInput.textContent = "Please don't leave me empty.";
    }
    
    else if (!adjectiveInput.value) {
		errorInput.textContent = "Please don't leave me empty.";
    }
    
    else if (!adjective2Input.value) {
    errorInput.textContent = "Please don't leave me empty.";
    }
    
    else if (!adjective3Input.value) {
    errorInput.textContent = "Please don't leave me empty.";
    }
    
    else if (!placeInput.value) {
        errorInput.textContent = "Please don't leave me empty.";
    }
    
    else if (!place2Input.value) {
        errorInput.textContent = "Please don't leave me empty.";
    }
    
    else if (!place3Input.value) {
        errorInput.textContent = "Please don't leave me empty.";
    }
    
    else if (!place4Input.value) {
        errorInput.textContent = "Please don't leave me empty.";
    }
      
    else{
        
    const story = "Once upon a time, there was a " + nounInput.value + " named " + noun2Input.value + " that was known to " + verbInput.value + " 24/7. He was born in a " + place3Input.value + " where he was " + adjectiveInput.value + " indeed, and lived most of his days in this place called " + placeInput.value + " which was located in the land of " + place2Input.value + 
          
          ". One " + adjective2Input.value + " evening " + noun2Input.value + " being known as the " + adjectiveInput.value + " " + nounInput.value + " which he clearly was, " + verb2Input.value + " so " + adjective3Input.value + " that he entered into " + place4Input.value + ". He spent a couple of years there working his way to buy a ticket home. He later went back to the old " + place3Input.value + " where not a single soul believed what happened to " + noun2Input.value + ". " 

            storyP.textContent = story; 
    }
};
    


//2 or less - IF
//2 or more - ELSE IF
// if (!nounInput.value){ } else if (!verbInput.value){ } else{}

const submitButton = document.getElementById('submit');
const storyP = document.getElementById('story');

const nounInput = document.getElementById('noun');
//const nounError = document.getElementbyId('noun-error');

const verbInput = document.getElementById('verb');
//const verbError = document.getElementById('verb-error');

const adjectiveInput = document.getElementById('adjective');
//const adjectiveError = document.getElementById('adjcetive-error');

const placeInput = document.getElementById('place');
//const placeInput = document.getElementById('place-error');

const errorInput = document.getElementById('error-input')

	const noun = nounInput.value;
    const verb = verbInput.value;
    const adjective = adjectiveInput.value;
    const place = placeInput.value;

submitButton.onclick = function() {

if (!nounInput.value) {
            errorInput.textContent = "Please don't leave me empty.";

 }
    else if (!verbInput.value) {
		errorInput.textContent = "Please don't leave me empty.";
    }
    
    else if (!adjectiveInput.value) {
		errorInput.textContent = "Please don't leave me empty.";
    }
    
    else if (!placeInput.value) {
    errorInput.textContent = "Please don't leave me empty.";
    }
    
    else{
        	const story = "Once there was a " + nounInput.value + " named Jay, that was known to " + verbInput.value +"." + " He/she was " + adjectiveInput.value + " indeed, and lived at the one and only " + placeInput.value + "."
	storyP.textContent = story;
        

    }


};
    


//2 or less - IF
//2 or more - ELSE IF
// if (!nounInput.value){ } else if (!verbInput.value){ } else{}

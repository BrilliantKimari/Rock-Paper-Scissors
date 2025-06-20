const nameInput = document.getElementById("name-input");
//  console.log(nameInput);


nameInput.addEventListener(
    "input", nameInputHasChanged
);

function nameInputHasChanged(){
    let nameValue= nameInput.value;
    // console.log(nameInput);
    let toSubmit= document.querySelector("#submit-button");

    if (nameValue.length >=4){
        toSubmit.innerHTML = `<button>Submit</button>`;
        return;
    }
    toSubmit.innerHTML = ""


}
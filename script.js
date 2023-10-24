let textField =  document.getElementById("text").value;
let timeOut = parseInt(document.getElementById("delay").value);
let timeButton = document.getElementById("btn");
let displayOutput = document.getElementById("output");


const displayMessage = async (textField,timeOut)=>{
	try {
		setTimeOut(()=>{
			displayOutput.innerText = textField;
		},timeOut)
	} catch (error) {
		
	}
}
timeButton.addEventListener("click", displayMessage())
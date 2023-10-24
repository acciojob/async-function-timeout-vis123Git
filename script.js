
document.getElementById("btn").addEventListener("click", displayDelayedMessage);

async function displayDelayedMessage() {
    const text = document.getElementById("text").value;
    const delay = parseInt(document.getElementById("delay").value) * 1000; 
    document.getElementById("output").textContent = "Waiting...";
    await new Promise(resolve => setTimeout(resolve, delay));
    document.getElementById("output").textContent = text;
}

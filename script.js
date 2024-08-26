async function displayDelayedMessage() {
    const text = document.getElementById("text").value;
    const delay = parseInt(document.getElementById("delay").value);
    
    try {
        if (text.trim() !== "" && !isNaN(delay)) {
            await new Promise((resolve) => setTimeout(resolve, delay));
            document.getElementById("output").textContent = text;
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
}
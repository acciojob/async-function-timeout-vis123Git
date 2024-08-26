

async function displayDelayedMessage(e) {
	e.preventDefault()
    const text = document.getElementById("text").value;
    const delay = parseInt(document.getElementById("delay").value) * 1000;

    try {
        if (text.trim() !== "") {
            await new Promise((resolve) => setTimeout(resolve, delay));
            document.getElementById("output").textContent = text;
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

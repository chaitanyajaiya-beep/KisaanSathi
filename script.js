function analyzeReport() {
    document.getElementById("reportResult").innerHTML =
        "🌱 Soil: Loamy <br> 🌾 Crop: Wheat <br> 💊 Fertilizer: Urea";
}

function suggestCrop() {
    let soil = document.getElementById("soil").value;
    let season = document.getElementById("season").value;

    let crop = "";

    if (soil === "Clay" && season === "Kharif") {
        crop = "Rice 🌾";
    } 
    else if (soil === "Sandy") {
        crop = "Groundnut 🌱";
    } 
    else {
        crop = "Wheat 🌾";
    }

    let profit = Math.floor(Math.random() * 50000 + 20000);

    document.getElementById("result").innerHTML =
        `🌿 Best Crop: <b>${crop}</b><br>💰 Expected Profit: ₹${profit}`;
}
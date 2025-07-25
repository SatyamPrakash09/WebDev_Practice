document.getElementById("submit").addEventListener("click", function(event) {
    var name = document.getElementById("name").value;
    var city = document.getElementById("city").value;
    var pincode = document.getElementById("pincode").value;

    if(!name || !city || !pincode) {
        alert("Please fill in all fields.");
        return;
    }
    else if(isNaN(pincode) || pincode.length !== 6) {
        alert("Please enter a valid 6-digit pincode.");
        return;
    } else {
        alert("Form submitted successfully!");
        console.log("Name: " + name);
        console.log("City: " + city);
        console.log("Pincode: " + pincode);
    }
});
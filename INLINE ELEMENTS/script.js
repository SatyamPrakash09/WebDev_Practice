function submit(){
    var name = document.getElementById("name").value;
    var city = document.getElementById("city").value;
    var pincode = document.getElementById("pincode").value;

    if(!name || !city || !pincode) {
        alert("Please fill in all fields.");
        return;
    }
    else if(isNaN(pincode) || pincode.length !== 6) {
        alert("Form submitted successfully!");
        console.log("Name: " + name);
        console.log("City: " + city);
        console.log("Pincode: " + pincode);
    }
}
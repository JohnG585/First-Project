document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var thanks = "Thank you, "+name+"! You should hear from us soon!";
    document.getElementById("signed").innerHTML = thanks;

});

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var msg = document.getElementsByClassName("errmsg");
    // if (username == null || password == null) {
    //     msg.innerHTML = 'enter all the fields';
    // }

    if ((username == "jeevankv18@gmail.com" && password == "jeevan") || (username == "1js18is039" && password == "jeevan")) {
        alert("Login successful");
    } else {
        alert("Login failed");
        alert("please enter the correct username and password")
    }
}
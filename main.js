
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.getElementById("user_div").style.display= "block"
      document.getElementById("login_div").style.display= "none"
      
      var user = firebase.auth().currentUser;
      

        if (user != null) {

            var email_id = user.email;      
            var email_verified = user.emailVerified;
            document.getElementById("user_para").innerHTML = "Welcome: " + email_id
                                                     + "<br/>Verified: " + email_verified 
        }

    } else {
      document.getElementById("user_div").style.display = "none"
      document.getElementById("login_div").style.display = "block"
    }
  });

function login(){

    var email = document.getElementById("email_field").value
    var password = document.getElementById("password_field").value


    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert("Error" + errorMessage)
      });
}

function logout(){
  
}

function send_verification(){
  var user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function() {
    // Email sent.
    window.alert("Verify")
  }).catch(function(error) {
    // An error happened.
    window.alert("error")
  });
}
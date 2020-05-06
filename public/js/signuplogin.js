const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});


$(document).ready(function() {

    $("#otpG").hide()

    $("#submitButton").css('opacity', 0.5);
    $("#cfpassword").on("keyup", function() {

        var pwd = $("#password").val()
        var cfpwd = $("#cfpassword").val()
        console.log(cfpwd)
        console.log(pwd)
        if (cfpwd == pwd) {
            console.log("hello")

            $("#submitButton").removeAttr("disabled").css('opacity', 1);
        } else {
            $("#submitButton").attr("disabled", true).css('opacity', 0.5);
        }
    })

    $("#submitButton").click(function() {
        $("signupHide").hide()
        $("#otpG").show()

    })




});
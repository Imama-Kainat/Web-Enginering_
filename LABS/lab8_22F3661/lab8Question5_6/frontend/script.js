$(document).ready(function () {

    // 🟢 Check if Email Exists
    $("#email").on("blur", function () {
        let email = $(this).val();
        if (email !== "") {
            $.get("http://localhost:3000/api/check-email", { email: email }, function (response) {
                if (response.exists) {
                    $("#emailCheck").text("❌ Email already registered!").css("color", "red");
                } else {
                    $("#emailCheck").text("✅ Email available!").css("color", "green");
                }
            });
        }
    });

    // 🟢 Register Student
    $("#registerForm").submit(function (event) {
        event.preventDefault();
        let userData = {
            name: $("#name").val(),
            email: $("#email").val(),
            password: $("#password").val()
        };

        $.post("http://localhost:3000/api/register", JSON.stringify(userData), function (response) {
            $("#message").text(response.message).css("color", "green");
            $("#registerForm")[0].reset();
        }).fail(function () {
            $("#message").text("❌ Error registering").css("color", "red");
        });
    });

    // 🟢 Login User
    $("#loginForm").submit(function (event) {
        event.preventDefault();
        let loginData = {
            email: $("#loginEmail").val(),
            password: $("#loginPassword").val()
        };

        $.post("http://localhost:3000/api/login", JSON.stringify(loginData), function (response) {
            alert(response.message);
            window.location.href = "dashboard.html";
        }).fail(function () {
            $("#message").text("❌ Invalid credentials").css("color", "red");
        });
    });

});


$("#credentialBtn").on("click", e =>{
    let credentails = {
        firstname: $("#firstName").val(),
        lastname: $("#lastName").val(),
        phone: $("#phoneNumber").val(),
        address: $("#streetAddress").val(),
        credit: 10000,
        userPassword: $("#password").val(),
        email: $("#email").val(),
        userid: "444",
    };
    localStorage.setItem("user",JSON.stringify(credentails));
    let localFirstName = JSON.parse(localStorage.getItem("user"));
    console.log("local storage working: " + localFirstName.firstname);
    console.log("creds "+ JSON.stringify(credentails));
    $.ajax("/api/customer", {
        type: "POST",
        data: credentails
    }).then(e => {
        console.log("credentials entered! " + credentails);
    });
});
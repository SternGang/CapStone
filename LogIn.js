let logInButton = document.getElementById("LogInButton");

function checklog(){
    let username = document.getElementById("UserName").value;
    let PassWord = document.getElementById("PassWord").value;

    console.log(username);
    console.log(PassWord);

    window.location.assign("MainPage.html");
}

logInButton.addEventListener("click",checklog);
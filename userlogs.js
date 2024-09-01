const name = document.querySelector('.text');
name.innerHTML = 'no user';


const user1 = {
    username: "Joe",
    Email: "asantealaina550@gmail.com",
    Phone: "0534488118",
    Address: "AS476737877",
    Location :"Chicago",
    Password: "Chicago",
    ReferralCode: "Joseph",
    Date: "8/29/2024 1:03:54 PM"
}





const logbtn = document.querySelector('.log');
const logdis = document.querySelector('.logdis');
const logch = document.querySelector('.logch');
const userinp = document.querySelector('#username');
const passinp = document.querySelector('#pass');


logbtn.addEventListener("click", 
function() {

    if (userinp.value == user1.username && passinp.value == user1.Password) {
        name.innerHTML = user1.username;
        logch.innerHTML = "Log Out";
        logdis.style.marginLeft = "-20000px";
        
    }
    else {
        logdis.style.marginLeft = "-20000px";
    
    }
        
}
);



logch.addEventListener("click", 
function() {

    logdis.style.marginLeft = "10px";
    }

);




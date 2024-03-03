let user = document.querySelector(".side-bar");
let user1 = document.querySelector(".toggle-button")
let ishow = true;

function toggle() {
    if (ishow) {
        user.style.display = "none";
        user1.style.display = "block";
        ishow = false;
    }
    else {
        user.style.display = "block";
        user1.style.display = "none";
        ishow = true;
    }

}

// let user3 = document.querySelector(".user-input")
// let isshow2 = true;

// function drop () {
//     if (ishow) {
//         user3.style.display = "none";
//         ishow = false;
//     }
//     else {
//         user3.style.display = "block";
//         ishow = true;
//     }
// }
// like and comment
let wrapper = document.querySelectorAll(".reactions > div")

wrapper.forEach(ele => {
    ele.addEventListener("click",(eo) => {
        ele.querySelector("i").classList.add("fa-solid")
        ele.querySelector("span").innerHTML = +ele.querySelector("span").innerHTML + 1
        if(ele.querySelector("i").classList.contains("my-heart")){
            ele.classList.add("c-red")
        } else{
            ele.classList.add("c-green")
        }
    })
});

// general info disabled email

let change = document.querySelector(".general-info div .change")
let email = document.querySelector(".general-info .email")

change.addEventListener("click",(eo) => {
    email.removeAttribute("disabled")
})
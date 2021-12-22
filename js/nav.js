function active() {
    console.log("inside")
    let loca = location.href
    let list = document.getElementsByClassName("nav_link")
    let len = list.length
    for (let i = 0; i < len; i++) {
        if(list[i].href == loca) {
            list[i].classList.add("a_active")
        }
    }
}

window.onload = active




window.onload = function () {

    let tittleArr = document.getElementsByClassName("title")
    console.log(tittleArr);

    for (let i = 0; i < tittleArr.length; i++) {
        const element = tittleArr[i];
        element.addEventListener("click", myFunction);
        
    }


    function myFunction() {
    console.log(this.nextElementSibling);
    console.log(this.nextElementSibling.style.display);
    this.nextElementSibling.classList.add("active");
    if (this.nextElementSibling.classList.contains("active")) {
        console.log("This element has the class active");
    } else {
        this.nextElementSibling.classList.add("active");
    }
 }
}
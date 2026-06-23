const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach((element) => {

        const top = element.getBoundingClientRect().top;
        const height = window.innerHeight - 150;

        if(top < height){
            element.classList.add("active");
        }

    });

});
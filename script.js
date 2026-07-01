const pages = document.querySelectorAll(".page");

const nextButtons = document.querySelectorAll(".next-btn");
const prevButtons = document.querySelectorAll(".prev-btn");

let currentPage = 0;

// Show current page
function showPage(index){

    pages.forEach(page => page.classList.remove("active"));

    pages[index].classList.add("active");

}

// Next Button
nextButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        if(currentPage < pages.length - 1){

            currentPage++;

            showPage(currentPage);

        }

    });

});

// Previous Button
prevButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        if(currentPage > 0){

            currentPage--;

            showPage(currentPage);

        }

    });

});

// Swipe Support (Mobile)

let startX = 0;
let endX = 0;

document.addEventListener("touchstart",(e)=>{

    startX = e.changedTouches[0].screenX;

});

document.addEventListener("touchend",(e)=>{

    endX = e.changedTouches[0].screenX;

    handleSwipe();

});

function handleSwipe(){

    // Swipe Left (Next)
    if(startX - endX > 80){

        if(currentPage < pages.length - 1){

            currentPage++;

            showPage(currentPage);

        }

    }

    // Swipe Right (Previous)
    if(endX - startX > 80){

        if(currentPage > 0){

            currentPage--;

            showPage(currentPage);

        }

    }

}

// Keyboard Support

document.addEventListener("keydown",(e)=>{

    if(e.key === "ArrowRight"){

        if(currentPage < pages.length - 1){

            currentPage++;

            showPage(currentPage);

        }

    }

    if(e.key === "ArrowLeft"){

        if(currentPage > 0){

            currentPage--;

            showPage(currentPage);

        }

    }

});

// Initialize
showPage(currentPage);
const music = document.getElementById("bgMusic");

document.body.addEventListener("click", () => {
    music.play();
}, { once: true });
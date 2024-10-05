//variables
const gridBases = document.querySelectorAll(".grid-base");
const solutions = document.querySelectorAll(".solutions");

const cellsBlue = document.querySelectorAll(".table-blue td");
const cellsEmpty = document.querySelectorAll(".table-info-exercise td");

const sliders = document.querySelectorAll(".slider");

const mediaQuery768 = window.matchMedia('(max-width: 768)');

//creating grid-base
const gridBaseElements = document.querySelectorAll(".grid-base");

gridBaseElements.forEach(gridBase => {
    if (mediaQuery768.matches) {
        for(let i = 0; i < 400; i++) {
            const div = document.createElement("div");
            gridBase.appendChild(div);
        }
    }
    else {
        for(let i = 0; i < 900; i++) {
            const div = document.createElement("div");
            gridBase.appendChild(div);
        }
    }
});


//clicking grid-base and seeing solutions
gridBases.forEach((grid, index) => {
    grid.addEventListener("click", function() {
        console.log("clicked!!!!");

        const sol = solutions[index];

        if(sol.style.visibility == "hidden" || sol.style.visibility == "") {
            sol.style.visibility = "visible";
        }
        else {
            sol.style.visibility = "hidden";
        }
    });
});

//showing solution of tables
cellsEmpty.forEach(cell => {

    cell.addEventListener("click", function() {
        //find the .hidden-content of the cell
        const hiddenContent = cell.querySelector(".cell-content");
        // console.log(hiddenContent);
        // console.log(hiddenContent.textContent);

        //if the content is visible make it hidden
        if (hiddenContent.style.visibility == 'visible') {
            hiddenContent.style.visibility = 'hidden';
        }
        else {
            hiddenContent.style.visibility = 'visible';
        }
    });
});

cellsBlue.forEach(cell => {
    cell.addEventListener("click", function() {
        const hiddenContent = cell.querySelector(".cell-content");

        if (hiddenContent.style.visibility == 'visible') {
            hiddenContent.style.visibility = 'hidden';
        }
        else {
            hiddenContent.style.visibility = 'visible';
        }
    });
});

//showing slides
let currentSlide = 0;
const slides = document.querySelectorAll('.slider');

function showSlide(index) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block';
    saveSlide(index);
}

//saving slides
function saveSlide(index) {
    localStorage.setItem('currentSlide', index);
}

//loading Current Slide
function loadSlide() {
    const savedSlide = localStorage.getItem('currentSlide');
    if (savedSlide !== null) {
        currentSlide = parseInt(savedSlide);
    } 
    else {
        currentSlide = 0;
    }
}

//clicking left arrow button
document.querySelectorAll('.left-arrow').forEach(arrow => {
    arrow.addEventListener("click", function () {
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        showSlide(currentSlide); 
    });
});

//clicking right arrow button
document.querySelectorAll('.right-arrow').forEach(arrow => {
    arrow.addEventListener("click", function () {
        currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1; 
        showSlide(currentSlide);
    });
});

window.onload = function() {
    loadSlide();
    showSlide(currentSlide);
}

// adding dynamically vectoral unit header
function addSvgToSlides(slides, svgUrl) {
    slides.forEach((slide, index) => {
        if (index !== 0) { // İlk slaytı atla
            const img = document.createElement('img');
            img.src = svgUrl; // SVG dosyasının yolu
            img.alt = "Slider Background";
            img.classList.add('slider-unit-header'); // img'ye class ekle
            slide.appendChild(img); // img'yi slide'a ekle
        }
    });
}

addSvgToSlides(sliders, 'slider_bg.svg'); // Dosya yolunu kontrol et



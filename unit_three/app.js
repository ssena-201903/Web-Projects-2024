//variables
const startPageNumber = 130;
const finishPageNumber = 205;
const pagesAll = document.querySelectorAll(".page"); 

const cellsBlue = document.querySelectorAll(".table-blue td");
const cellsEmpty = document.querySelectorAll(".table-empty td");
const cellsExercise = document.querySelectorAll(".table-ending-questions");

const gridBases = document.querySelectorAll(".grid-base");
const solutions = document.querySelectorAll(".solutions");


//creating page number dynmically
pagesAll.forEach((page, index) => {
    if(index => (startPageNumber - 1) && index <= (finishPageNumber - 1)) {
        const pageNumber = document.createElement("div");
        pageNumber.classList.add("page-number");
        pageNumber.textContent = `${startPageNumber + index} |` ;
        page.appendChild(pageNumber);
    }
});

//clicking table-blue cells
cellsBlue.forEach(cell => {

    cell.addEventListener("click", function() {
        //find the .hidden-content of the cell
        const hiddenContent = cell.querySelector(".cell-content");
        console.log(hiddenContent.textContent);

        //if the content is visible make it hidden
        if(hiddenContent.style.visibility == 'visible'){
            hiddenContent.style.visibility = 'hidden';
        }
        else {
            hiddenContent.style.visibility = 'visible';
        }
    });
});

//clicking table-ending-questions cells 
cellsExercise.forEach(cell => {

    cell.addEventListener("click", function() {
        const hiddenContentPurples = cell.querySelectorAll(".cell-content");

        hiddenContentPurples.forEach(hiddenContentPurple => {
            if(hiddenContentPurple.style.visibility == "hidden" || hiddenContentPurple.style.visibility == "") {
                hiddenContentPurple.style.visibility = "visible";
            }
            else {
                hiddenContentPurple.style.visibility = "hidden";
            }
        });


    });
});


//clicking grid-base  and seeing solutions 
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

//clicking table-empty cells


cellsEmpty.forEach(cell => {

    cell.addEventListener("click", function() {
        //find the .hidden-content of the cell
        const hiddenContent = cell.querySelector(".cell-content");
        console.log(hiddenContent);
        console.log(hiddenContent.textContent);

        //if the content is visible make it hidden
        if(hiddenContent.style.visibility == 'visible'){
            hiddenContent.style.visibility = 'hidden';
        }
        else {
            hiddenContent.style.visibility = 'visible';
        }
    });
});


//creating grid-base
const gridBaseElements = document.querySelectorAll(".grid-base");

gridBaseElements.forEach(gridBase => {
    for(let i = 0; i < 900; i++) {
        const div = document.createElement("div");
        gridBase.appendChild(div);
    }
});

window.onload = function() {
    loadPage();
}

//getting pages from local storage
function loadPage() {
    const savedPage = localStorage.getItem('currentPage');
    const pages = document.querySelectorAll(".page");

    if (savedPage && pages[savedPage]) {
        pages[savedPage].scrollIntoView({behavior: 'smooth'});
    }
}

//saving pages to local storage
function savePage(pageNumber) {
    localStorage.setItem('currentPage', pageNumber);
}

document.addEventListener("scroll", function () {
    const pages = document.querySelectorAll(".page");
    pages.forEach((page, index) => {
        const rect = page.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
            savePage(index);
        }
    });
});


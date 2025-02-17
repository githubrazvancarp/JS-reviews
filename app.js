const reviews = [
{
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "./images/Avatar.2.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, dolorem soluta impedit voluptas et vero.",    
},
{
    id: 2,
    name: "anna johnson",
    job: "web developer",
    img: "./images/Avatar.1.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, dolorem soluta impedit voluptas et vero.",    
},
{
    id: 3,
    name: "peter jones johnson",
    job: "intern",
    img: "./images/Avatar.2.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, dolorem soluta impedit voluptas et vero.",    
},
{
    id: 4,
    name: "bill anderson",
    job: "boss",
    img: "./images/Avatar.3.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, dolorem soluta impedit voluptas et vero.",    
},
];

// select items
const img = document.getElementById("person-img");                               
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
    showPerson();
});

// show person based on item

function showPerson(){
    const item = reviews[currentItem]
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person

nextBtn.addEventListener('click', function () {
    currentItem++;
    showPerson(currentItem);
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

// show prev person

prevBtn.addEventListener('click', function () {
    currentItem--;
    showPerson(currentItem);
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

// show random person

randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * reviews.length)
    console.log showPerson(): void
    showPerson();
});
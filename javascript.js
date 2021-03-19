const button = document.querySelectorAll('button');
const answer = document.querySelectorAll('.answer');

// Show Answer 

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
        const added = answer[i].classList.toggle('answer');
        if (added) {
            answer[i].style.display = "none";
        } else {
            answer[i].style.display = "block";
        }
});
}

// Change bookmark 

const bookmark = document.querySelectorAll(".question-card__bookmark");

for (let i = 0; i < bookmark.length; i++) {
    bookmark[i].addEventListener("click", () => { 
    if (bookmark[i].classList.contains("far")) {
        bookmark[i].classList.remove("far", "fa-bookmark");
        bookmark[i].classList.add("fas", "fa-bookmark");
    } else {
        bookmark[i].classList.remove("fas", "fa-bookmark");
        bookmark[i].classList.add("far", "fa-bookmark");
    }
    })
}

// Create Screen 

const data = []
const submit = document.querySelector('input');
const form = document.querySelector('form');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputQuestion = form['question'];
    const inputAnswer = form['answer'];
    const inputTags = form['tags'];
    const currywurst = {
        question: inputQuestion.value, 
        answer: inputAnswer.value,
        tags: inputTags.value,
    }
    data.push(currywurst);
    console.log(data);
    form.reset();
});

function myFunction () {
    let element = document.querySelector("body");
    element.classList.toggle("dark-mode"); 
} 
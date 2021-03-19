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


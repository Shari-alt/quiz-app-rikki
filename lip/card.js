export function createCard(card) {
    const cardSection = document.createElement("article");
    cardSection.classList.add("question-card");

    const bookmark = document.createElement("i");
    bookmark.classList.add("far",
    "fa-bookmark",
    "question-card__bookmark",
    "question-card__bookmark--toggled");
    bookmark.textContent = card.isBookmarked.checked;
    cardSection.append(bookmark);

    bookmark.addEventListener("click", () => {
        if (bookmark.classList.contains("far")) {
            bookmark.classList.remove("far", "fa-bookmark");
            bookmark.classList.add("fas", "fa-bookmark");
        } else {
            bookmark.classList.remove("fas", "fa-bookmark");
            bookmark.classList.add("far", "fa-bookmark");
        }
    })
   
    const h3Title = document.createElement("h3");
    h3Title.classList.add("question-card__title");
    h3Title.textContent ="Question";
    cardSection.append(h3Title);

    // const box=document.createElement("div");
    // box.classList.add("box-main");
    // cardSection.append(box); 

    const question=document.createElement("p");
    question.classList.add("question-card__question");
    question.textContent = card.question;
    cardSection.append(question);

    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("question-card__show-answer");
    cardSection.append(buttonDiv);

    const button = document.createElement("button");
    button.textContent = "Show Answer";
    buttonDiv.append(button);

    const answer= document.createElement("p");
    button.addEventListener('click', () => {
        if (button.innerHTML==="Show Answer") {
        button.innerHTML="Hide Answer";
        answer.textContent = card.answer;
        cardSection.append(answer);
        } else {
        button.innerHTML="Show Answer";
        answer.remove();
        }
        });
    

    // const tags = document.createElement("section");
    // tags.classList.add("question-card__tags");
    // tags.textContent = card.tag;
    // cardSection.append(tags);

    // const tagsItem = document.createElement("span");
    // tagsItem.classList.add("question-card__tags-item");
    // tags.append(tagsItem);

    return cardSection;
}

        {/* <article class="question-card">
          
          <i class="far fa-bookmark question-card__bookmark question-card__bookmark--toggled"
          ></i>
        <div class="question-card__title">
          <h3>Question:</h3>
        </div>
        <div class="box-main">
          <p class="question-card__question">What is love?</p>
        </div>
        <div class="question-card__show-answer">
          <button>SHOW ANSWER</button> 
          <p class="answer"> This shall be the answer!</p>
        </div>
        <div class="question-card__tags">
          <span class="question-card__tags-item">#Baby</span>
          <span class="question-card__tags-item">#don't</span>
          <span class="question-card__tags-item">#hurt</span>
          <span class="question-card__tags-item">#me</span>
        </div>
      </article>
         */}
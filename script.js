


const inputTex = document.getElementById("inputTex");
const sowDataHere = document.querySelector(".emojiData");

inputTex.addEventListener("keyup", function () {
    const searchText = inputTex.value.trim().toLowerCase();
  
    const filteredEmojis = emojiList.filter(index => {
         return searchText===`${index.aliases}` || searchText===`${index.description}` || searchText===`${index.emoji}` ;
    });
 
    displayEmojis(filteredEmojis); 
   
});

function displayAllEmojis() {
    displayEmojis(emojiList);
}
window.addEventListener("DOMContentLoaded", function () {
    displayAllEmojis(); // Display all emojis initially
});
function displayEmojis(emojis) {
    sowDataHere.textContent = ""; // Clear previous data
    emojis.forEach(emoji => {
        const ulTag = document.createElement("ul");
        const liTag1 = document.createElement("li");
        const liTag2 = document.createElement("li");
        const liTag3 = document.createElement("li");
        const brTag = document.createElement("hr");
        liTag1.textContent = `${emoji.emoji}`;
        liTag2.textContent = `${emoji.aliases}`;
        liTag3.textContent = `${emoji.description}`;
        ulTag.appendChild(liTag1);
        ulTag.appendChild(liTag2);
        ulTag.appendChild(liTag3);
        sowDataHere.appendChild(ulTag);
        sowDataHere.appendChild(brTag);
    });
   
}
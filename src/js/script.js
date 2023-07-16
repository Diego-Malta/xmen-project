const characters = document.querySelectorAll(".character");

characters.forEach(character => {
    character.addEventListener("mouseenter", () => {

        if (window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: "smooth"});
        }

        removeCharacterSelection();

        character.classList.add("selected");

        switchSelectedCharacterPicture(character);

        switchSelectedCharacterName(character);

        switchSelectedCharacterDescription(character);

    });

});

function switchSelectedCharacterDescription(character) {
    const characterDescription = document.querySelector(".character-description");
    characterDescription.innerText = character.getAttribute("data-description");
}

function switchSelectedCharacterName(character) {
    const characterName = document.querySelector(".character-name");
    characterName.innerText = character.getAttribute("data-name");
}

function switchSelectedCharacterPicture(character) {
    const bigCharacterPicture = document.querySelector(".character-big");
    const idCharacter = character.attributes.id.value;
    bigCharacterPicture.src = `./src/images/card-${idCharacter}.png`;
}

function removeCharacterSelection() {
    const selectedCharacter = document.querySelector(".selected");
    selectedCharacter.classList.remove("selected");
}

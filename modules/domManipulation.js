// domManipulation.js
export function displaySkills(skills) {
    const skillUl = document.getElementById("skillUl");

    if (!skillUl) {
        console.error("Elementet med id 'skillUl' finns inte.");
        return;
    }

    skills.forEach(skill => {
        const skillLi = document.createElement("li");

        // Skapa h3 för namnet på färdigheten
        const skillName = document.createElement("h3");
        skillName.textContent = skill.name;
        skillLi.appendChild(skillName);

        // Skapa p för nivå
        const skillLevel = document.createElement("p");
        skillLevel.textContent = `Nivå: ${skill.level}`;
        skillLi.appendChild(skillLevel);

        // Skapa p för kategorier
        const skillCategories = document.createElement("p");
        skillCategories.textContent = `Kategorier: ${skill.categories.join(", ")}`;
        skillLi.appendChild(skillCategories);

        // Skapa p för beskrivning
        const skillDescription = document.createElement("p");
        skillDescription.textContent = `Beskrivning: ${skill.description}`;
        skillLi.appendChild(skillDescription);

        // Skapa p för erfarenhet
        const skillExperience = document.createElement("p");
        skillExperience.textContent = `Erfarenhet: ${skill.yearsOFExperience}`;
        skillLi.appendChild(skillExperience);

        // Lägg till listitemen i skillUl
        skillUl.appendChild(skillLi);
    });
}

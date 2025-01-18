import { fetchSkills } from '/modules/fetchData.js';
import { displaySkills } from '/modules/domManipulation.js';

document.addEventListener("DOMContentLoaded", () => {
    fetchSkills("/jsons/skills.json")
        .then(skills => {
            if (skills) {
                displaySkills(skills);
            }
        });
});

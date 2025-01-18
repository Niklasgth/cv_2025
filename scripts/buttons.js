document.addEventListener("DOMContentLoaded", function() {
    // Funktioner för att navigera till olika sidor
    function navigateToSkillsBtn() {
        window.location.href = "/htmls/skills.html";
    }

    function navigateToIndexBtn() {
        window.location.href = "/htmls/index.html";
    }

    // Kolla om knapparna finns på sidan innan du sätter onClick
    const skillsBtn = document.getElementById("skills-btn");
    const indexBtn = document.getElementById("index-btn");

    if (skillsBtn) {
        skillsBtn.onclick = navigateToSkillsBtn;
    }

    if (indexBtn) {
        indexBtn.onclick = navigateToIndexBtn;
    }
});

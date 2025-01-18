
fetch("https://api.github.com/users/Niklasgth/repos")
    .then (response => response.json())
    .then (data => {
        const hexGrid =document.getElementById("hexGrid");

data.forEach(repo => {
    const hex =document.createElement("div");
    hex.classList.add("hex");

    const link = document.createElement("a");
    link.href =repo.html_url;
    link.target = "_blank";

     // Trunkera repo-namnet om det är för långt
     let repoName = repo.name;
     if (repoName.length > 10) {
         repoName = repoName.substring(0, 10) + "...";
     }

     link.innerText = repoName;
     
    hex.appendChild(link);
    hexGrid.appendChild(hex);
    
});

    })

        

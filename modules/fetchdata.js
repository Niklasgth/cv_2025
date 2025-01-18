export function fetchSkills(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Något gick fel med att hämta JSON-filen: ${response.statusText}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error("Något gick fel med att hämta färdigheter:", error);
        });
}

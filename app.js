document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchButton");
    const results = document.getElementById("result");
    const input = document.getElementById("SearchBar");

    searchButton.addEventListener("click", function () {
    const value = input.value.trim()
    // Open an AJAX request using the fetch API
    fetch(`http://localhost/info2180-lab4/superheroes.php?search=${encodeURIComponent(value)}`)
    .then(response => response.text())
    .then(data => results.innerHTML = data)
    .catch(error => {
        console.error('Error fetching superheroes:', error);
        alert('An error occurred while fetching superhero data.');
    });
    });
})

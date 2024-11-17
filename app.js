document.addEventListener("DOMContentLoaded",function(){
    button = document.getElementById("searchButton").addEventListener("click", function(){
         // Open an AJAX request using the fetch API
        fetch('http://localhost/info2180-lab4/superheroes.php')
        .then(response=> {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data=> alert(data))
        .catch(error=> {
            console.error('Error fetching superheroes:', error);
            alert('An error occurred while fetching superhero data.');
        });
    });
})
        
       
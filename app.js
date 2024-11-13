document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search_button').addEventListener('click', function() {

        console.log("Search button pressed");
        fetch("superheroes.php")
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
            })
            .catch(error => {
                console.log("Error:", error);
            });

        

    });


});
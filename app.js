document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search_button').addEventListener('click', function() {

        console.log("Search button pressed");

        const text_val = document.getElementById('search_field').value.trim(); 
        
        //Reminder: remember to sanitize input
        

        if(text_val == ""){
            console.log("empty text: ",text_val); 
            fetch("superheroes.php")
            .then(response => {
                return response.text();
            })
            .then(data => {
                // alert(data);
                const resultDiv = document.getElementById('result');
                resultDiv.innerHTML = data;
            })
            .catch(error => {
                console.log("Error:", error);
            });
        }else{
            console.log("not empty: ",text_val);
            url = "superheroes.php?query="+text_val;
            console.log("url: ",url);
            fetch(url)
            .then(response => {
                return response.text();
            })
            .then(data => {
                // alert(data);
                const resultDiv = document.getElementById('result');
                resultDiv.innerHTML = data;
            })
            .catch(error => {
                console.log("Error:", error);
            });
        }

        

        

    });


});
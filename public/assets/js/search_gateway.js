window.onload = () => {
    document.getElementById('search').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            let value = document.getElementById("search").value
            alert("TODO - add uv " + value)
        }
    });    
}


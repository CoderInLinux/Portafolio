document.addEventListener('copy', function(event){
    event.preventDefault();
    event.clipboardData.setData("text/plain", "No te robes mis ideas broder :)");
    alert("No te robes mis ideas broder :)");
}, false);

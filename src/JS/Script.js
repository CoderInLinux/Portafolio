document.addEventListener('copy', function(event){
    event.clipboardData.setData("text/plain", "No te robes mis ideas broder :)");
    event.preventDefault();
}, false);

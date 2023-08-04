function showMenu(){
    var menuComponent = document.getElementById('menu');
    if(menuComponent.className == "topnav"){
        menuComponent.className += " responsive"; // Menu mobile dc hiện
    }
    else{
        menuComponent.className = "topnav"; // Tắt menu mobile
    }
}
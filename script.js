var starttest = 1;
var x = 1;

function checkacceptsupport() {
    if (navigator.geolocation) {
      document.getElementById("locationid").innerHTML = "Geolocation is supported by this browser.";
    } else {
        document.getElementById("locationid").innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  function getlocation(){
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  function showPosition(position){
    var locationresult = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
    document.getElementById("locationid").innerHTML = locationresult;
}
function start(){
    clearInterval(refreshIntervalId);

}
//if(starttest == 1 ){
    //setInterval(() => {
        //getlocation();
    //}, 100);
//}
var refreshIntervalId = setInterval(getlocation(), 1000);

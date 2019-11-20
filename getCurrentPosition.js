funtion getCurrentPositionEvent(){
  navigator.geolocation.getCurrentPosition(function (position) {
		console.log(position.coords.latitude);
	});	
}
EventUtil.addEvent(window,"load",getCurrentPositionEvent);

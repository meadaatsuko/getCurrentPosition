function getCurrentPositionEvent(argument) {
	// body...
	var posInfo = document.querySelector("p#position-info");
	function successPosition(Position) {
		// body...
		var positionInfo = "";
		positionInfo = "纬度: " + Position.coords.latitude + ", 经度: " + Position.coords.longitude +  ".";
		posInfo.innerHTML = positionInfo;
	}
	function errorPosition(error) {
		// body...
		posInfo.innerHTML = error.message;
	}
	navigator.geolocation.watchPosition(successPosition,errorPosition);
}
EventUtil.addEvent(window,"load",getCurrentPositionEvent);

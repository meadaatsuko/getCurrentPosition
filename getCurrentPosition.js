function getCurrentPositionEvent(argument) {
	// body...
	function successPosition(Position) {
		// body...
		var positionInfo = "";
		positionInfo = "纬度: " + Position.coords.latitude + ", 经度: " + Position.coords.longitude + ", 海拔： " + Position.coords.altitude + ".";
		console.log(positionInfo);
	}
	function errorPosition(error) {
		// body...
		console.log(error);
	}
	navigator.geolocation.getCurrentPosition(successPosition,errorPosition);
}
EventUtil.addEvent(window,"load",getCurrentPositionEvent);

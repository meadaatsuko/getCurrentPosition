function getCurrentPositionEvent(argument) {
	// body...
	function successPosition(Position) {
		// body...
		console.log(Position.coords.latitude);
	}
	function errorPosition(error) {
		// body...
		console.log(error);
	}
	navigator.geolocation.getCurrentPosition(successPosition,errorPosition);
}
EventUtil.addEvent(window,"load",getCurrentPositionEvent);

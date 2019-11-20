function getCurrentPositionEvent(argument) {
	// body...
	function successPosition(Position) {
		// body...
		console.log(Position.coords.latitude);
	}
	navigator.geolocation.getCurrentPosition(successPosition);
}
EventUtil.addEvent(window,"load",getCurrentPositionEvent);

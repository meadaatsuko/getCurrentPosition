function getCurrentPositionEvent(argument) {
	// body...
	var getCurrentPosition = navigator.geolocation.getCurrentPosition;
	function successPosition(Position) {
		// body...
		console.log(Position.coords.latitude);
	}
	getCurrentPosition(successPosition);
}
EventUtil.addEvent(window,"load",getCurrentPositionEvent);

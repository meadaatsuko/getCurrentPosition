var EventUtil = {
	addEvent : function (element,type,method) {
		// body...
		if (element.addEventListener) {
			element.addEventListener(type,method,false);
		}else{
			element["on" + type] = method;
		}
	},
	removeEvent : function (element,type,method) {
		// body...
		if (element.removeEventListener) {
			element.removeEventListener(type,method,false);
		}else{
			element["on" + type] = null;
		}
	}
}
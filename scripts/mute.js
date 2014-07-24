function checkMute(){
	var sound = localStorage.getItem('sound');
	if(sound == "true"){ // check if mute button in main menu is pressed 
		var a = document.getElementsByTagName('audio');
			for(var i=0; i<a.length; i++){ // check for every audio tag and mute it
				a[i].muted=true;
			}
	}
}
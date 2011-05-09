var creditsBox : GUIStyle;

function OnGUI () {
	// Make a background box
	GUI.Box (Rect (0,0,Screen.width,Screen.width), "Emma Anderson\nJordan Byron\nDennis Honeyman\nKai Ito\nVictoria Krauchunas", creditsBox);	

	// Make the menu button.
	if (GUI.Button (Rect ((Screen.width/2)-50,(Screen.height/2)+250,100,30), "<- Menu")) {
		Application.LoadLevel (0);
	}
}

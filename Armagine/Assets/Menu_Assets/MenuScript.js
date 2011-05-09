var boxStyle : GUIStyle;
var buttonSkin : GUISkin;

function OnGUI () {
	GUI.skin = buttonSkin;

	// Make a background box
	GUI.Box (Rect (0,0,Screen.width,Screen.height), "Armagine", boxStyle);

	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.Button (Rect ((Screen.width/2)-150,(Screen.height/2)-100,300,50), "New Game")) {
		Application.LoadLevel (3);
	}

	// Make the second button.
	if (GUI.Button (Rect ((Screen.width/2)-150,(Screen.height/2)-0,300,50), "Help")) {
		Application.LoadLevel (1);
	}
	
	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.Button (Rect ((Screen.width/2)-150,(Screen.height/2)+100,300,50), "Credits")) {
		Application.LoadLevel (2);
	}

}

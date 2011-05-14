var helpBox : GUIStyle;

function OnGUI () {
	// Make a background box
	GUI.Box (Rect (0,0,Screen.width,Screen.height), "", helpBox);	

	// Make the menu button.
	if (GUI.Button (Rect ((Screen.width/2)-300,(Screen.height/2)+210,100,30), "<- Menu")) {
		Application.LoadLevel (0);
	}
}

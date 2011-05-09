var helpBox : GUIStyle;

function OnGUI () {
	// Make a background box
	GUI.Box (Rect ((Screen.width/2)-350,(Screen.height/2)-350,700,700), "Let me give you a hand...", helpBox);	

	// Make the menu button.
	if (GUI.Button (Rect ((Screen.width/2)-300,(Screen.height/2)+210,100,30), "<- Menu")) {
		Application.LoadLevel (0);
	}
}

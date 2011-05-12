function OnTriggerEnter (col : Collider) {
	var player : FPSWalker = col.GetComponent(FPSWalker);
	if(player)
	{
		Application.LoadLevel(2);
	}
}

function Reset () {
	if (collider == null)	
		gameObject.AddComponent(BoxCollider);
	collider.isTrigger = true;
}
var player;
var grabbedObject;
var speed = 20;//Speed of the arm when launched, horizontally
var pitchSpeed = 5;//The vertical speed when launched, so the arm doesn't fly exactly straight
var reelForce = 30;//Force applied to the arm when it's reeled in
var grabDistance = 3;
var dist = 3;//Variable for how close the arm must be to you, when reeling in, for it to be picked up

function Start()
{
	player = GameObject.FindWithTag("Player");
}

function Update()
{
	//var instantiatedProjectile : Rigidbody = Instantiate(arm, transform.position, transform.rotation );
	//instantiatedProjectile.velocity = transform.TransformDirection( Vector3( 0, 0, speed ) );
	
	if( Input.GetMouseButtonDown( 0 ) && Launch.launched)//Left-mouse button is clicked and arm was launched
	{
		if(!Launch.grabbed)
		{
			//Grab something
			var grabbableObjects = GameObject.FindGameObjectsWithTag("Grabbable");
			for (var i = 0; i < grabbableObjects.length; i++) {
				if (Vector3.Distance(grabbableObjects[i].transform.position, transform.position) <= grabDistance) {
					Launch.grabbed = true;
					grabbedObject = grabbableObjects[i];
					transform.position = grabbedObject.transform.position;
					grabbedObject.AddComponent(HingeJoint);
					grabbedObject.hingeJoint.connectedBody = gameObject.rigidbody;

					break;
				}
			}
		}
		else
		{
			//Stop grabbing something
			Launch.grabbed = false;
			Destroy(grabbedObject.hingeJoint);
			grabbedObject = null;
		}
	}
	else if( Input.GetMouseButton( 1 ) && Launch.launched)//Right-mouse button is held down and the arm was launched
	{
		var xDif = player.transform.position.x - transform.position.x;
		var yDif = player.transform.position.y - transform.position.y;
		var zDif = player.transform.position.z - transform.position.z;
		this.rigidbody.velocity = Vector3.Normalize( Vector3(xDif, yDif, zDif) )*reelForce;
		
		//Reel it in
		if(Vector3.Distance(transform.position, player.transform.position) <= dist)
		{
			//Do things with whatever is grabbed and stop grabbing
			if (grabbedObject != null)
			{
				if (grabbedObject.name == "key")
					FPSWalker.hasKey = true;
			}
			Destroy(gameObject);
			gameObject.rigidbody.useGravity = false;
			Launch.grabbed = false;
			Launch.launched = false;
		}
	}
	else if(!Input.GetMouseButtonDown(1))
	{
		gameObject.rigidbody.useGravity = true;
	}
	if( Input.GetMouseButtonDown( 2 ) && Launch.launched)//Middle-mouse button is clicked and arm is launched
	{
		//Stop grabbing
		if (grabbedObject != null)
			Destroy(grabbedObject.hingeJoint);
		grabbedObject = null;
		Destroy(gameObject);
		Launch.grabbed = false;
		Launch.launched = false;
	}
}
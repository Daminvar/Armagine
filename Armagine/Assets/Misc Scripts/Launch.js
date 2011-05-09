var baseArm:Rigidbody;
var speed = 20;//Speed of the arm when launched, horizontally
var pitchSpeed = 5;//The vertical speed when launched, so the arm doesn't fly exactly straight
var reelForce = 10;//Force applied to the arm when it's reeled in
var dist = 3;//Variable for how close the arm must be to you, when reeling in, for it to be picked up
static var launched = false;//Is it launched?
static var grabbed = false;//Is it grabbing something?

function Update()
{
	//var instantiatedProjectile : Rigidbody = Instantiate(arm, transform.position, transform.rotation );
	//instantiatedProjectile.velocity = transform.TransformDirection( Vector3( 0, 0, speed ) );
	
	if( Input.GetMouseButton( 0 ) && !launched)//Left-mouse button is being held down and arm isn't launched - project the path
	{
		//Create path
	}
	else if( Input.GetMouseButtonUp( 0 ) && !launched)//Left-mouse button is released and arm wasn't launched
	{
		//Launch the arm
		var arm = Instantiate(baseArm, transform.position, transform.rotation );
		
		arm.velocity = transform.TransformDirection( Vector3( 0, pitchSpeed, speed ) );
		launched = true;
	}
}
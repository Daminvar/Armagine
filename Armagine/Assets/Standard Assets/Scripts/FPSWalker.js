var speed = 6.0;
var jumpSpeed = 8.0;
var gravity = 20.0;
var doorDistance = 3;

static var hasKey = false;

private var moveDirection = Vector3.zero;
private var grounded : boolean = false;

function FixedUpdate() {
	if (grounded) {
		// We are grounded, so recalculate movedirection directly from axes
		moveDirection = new Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
		moveDirection = transform.TransformDirection(moveDirection);
		moveDirection *= speed;
		
		if (Input.GetButton ("Jump")) {
			moveDirection.y = jumpSpeed;
		}
	}

	// Apply gravity
	moveDirection.y -= gravity * Time.deltaTime;
	
	// Move the controller
	var controller : CharacterController = GetComponent(CharacterController);
	var flags = controller.Move(moveDirection * Time.deltaTime);
	grounded = (flags & CollisionFlags.CollidedBelow) != 0;
	
	if (hasKey)
	{
		var door = GameObject.FindWithTag("Door");
		if (Vector3.Distance(transform.position, door.transform.position) < doorDistance)
		{
			hasKey = false;
			door.hingeJoint.limits.min = -90;
		}
	}
}

@script RequireComponent(CharacterController)
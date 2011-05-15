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
	
	if (transform.position.y < -3) {
		Application.LoadLevel(Application.loadedLevel);
	}

	// Apply gravity
	moveDirection.y -= gravity * Time.deltaTime;
	
	// Move the controller
	var controller : CharacterController = GetComponent(CharacterController);
	var flags = controller.Move(moveDirection * Time.deltaTime);
	grounded = (flags & CollisionFlags.CollidedBelow) != 0;
	
	if (hasKey)
	{
		hasKey = false;
		var door = GameObject.FindWithTag("Door");
		door.hingeJoint.limits.min = -90;
		
	}
}

function OnControllerColliderHit(hit:ControllerColliderHit) {
	var body : Rigidbody = hit.collider.attachedRigidbody;
    // no rigidbody
    if (body == null || body.isKinematic || body.gameObject.name == "arm")
        return;
        
    // We dont want to push objects below us
    if (hit.moveDirection.y < -0.3) 
        return;
    
    // Calculate push direction from move direction, 
    // we only push objects to the sides never up and down
    var pushDir : Vector3 = Vector3 (hit.moveDirection.x, 0, hit.moveDirection.z);

    // If you know how fast your character is trying to move,
    // then you can also multiply the push velocity by that.
    
    // Apply the push
    body.velocity = pushDir * 3;
}

@script RequireComponent(CharacterController)
var rotation = 0;

function Update () {
	rotation += 1;
	transform.eulerAngles = Vector3(0, rotation, 0);
}
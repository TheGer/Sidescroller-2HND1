#pragma strict
//declaring an integer variable
var cameraspeed:int;

function Start () {

}

function Update () {
	//this line is used to move the camera forward at a speed of 10
	transform.Translate(Vector3.right * cameraspeed * Time.deltaTime);
}
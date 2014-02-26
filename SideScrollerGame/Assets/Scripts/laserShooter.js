#pragma strict
//reference to laser
var laserToShoot:Rigidbody;



function Start () {

}

function Update () {

	if (Input.GetMouseButtonDown(0))
	{
		Instantiate(laserToShoot,transform.position,Quaternion.identity);
	}


}
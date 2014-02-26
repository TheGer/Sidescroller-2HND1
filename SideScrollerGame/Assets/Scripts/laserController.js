#pragma strict
//a number which sets the speed of the laser
var speedOfLaser:int;


function Start () {

}

function Update () {
	//by default the laser will not move
	transform.Translate(Vector3.right * speedOfLaser * Time.deltaTime);
}

function OnBecameInvisible ()
{
	Destroy(this.gameObject);

}
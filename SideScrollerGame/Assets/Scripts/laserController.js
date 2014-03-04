#pragma strict
//a number which sets the speed of the laser
var speedOfLaser:int;


function Start () {

}

function Update () {
	//by default the laser will not move
	transform.Translate(Vector3.right * speedOfLaser * Time.deltaTime);
}

//what happens when the laser hits anything
function OnTriggerEnter(objectHit:Collider)
{
	//if the object I hit is a ufo, destroy the laser, destroy the object
	//and increase the score in rocketshipController
	if (objectHit.gameObject.tag == "enemy")
	{
		//increase the score
		rocketshipController.score++;
		//destroy the UFO
		Destroy(objectHit.gameObject);
		//destroy the laser
		Destroy(this.gameObject);
			
	}	
}


function OnBecameInvisible ()
{
	Destroy(this.gameObject);

}
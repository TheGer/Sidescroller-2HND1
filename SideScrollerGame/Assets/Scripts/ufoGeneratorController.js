#pragma strict
//This script will generate ufos in a random position
//between x=8 to 10 AND y=-4 to 4 every second

//placeholder for the UFO
var ufo:Rigidbody;

function createUFO()
{
	var xposition:int;
	var yposition:int;
	
	//random x position
	xposition = Random.Range(8,11);
	
	//random y position
	yposition = Random.Range(-4,5);
	
	//make it relative to the position of the current gameobject
	xposition = transform.position.x + xposition;
	
	Instantiate(ufo,Vector3(xposition,yposition,0),Quaternion.identity);
}


function Start () {
	//wait for half a second, then repeat every second
	InvokeRepeating("createUFO",0.5,1.0);
}

function Update () {

}
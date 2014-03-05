#pragma strict
var topMargin:int;
var bottomMargin:int;

var moveUp:boolean;
var moveDown:boolean;

var enemylaser:Rigidbody;

function shootLaser()
{
	//shoot the laser
	Instantiate(enemylaser,transform.position,transform.rotation);

}



function Start () {
	//ufos will shoot half a second after they spawn and every second after
	InvokeRepeating("shootLaser",0.5,1.0);
	topMargin = 4;
	bottomMargin = -4;
	
	//the ufos start by moving UP
	moveUp = true;
	moveDown = false;

}

function Update () {
	
	if (moveUp == true)
	{
		//move the ufo UP
		transform.Translate(Vector3.up * 5 * Time.deltaTime);
		if (transform.position.y >= topMargin)
		{
			moveUp = false;
			moveDown = true;
		}
		
	}
	
	if (moveDown == true)
	{
		transform.Translate(Vector3.down * 5 * Time.deltaTime);
		if (transform.position.y <= bottomMargin)
		{
			moveUp = true;
			moveDown = false;
		}
	}

}
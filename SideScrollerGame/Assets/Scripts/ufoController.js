#pragma strict
var topMargin:int;
var bottomMargin:int;

var moveUp:boolean;
var moveDown:boolean;


function Start () {
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
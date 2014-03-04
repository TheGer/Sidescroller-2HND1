#pragma strict
//to set color of fonts etc...
var style:GUISkin;

//create variables for score and lives
static var score:int;
static var lives:int;


function OnGUI()
{
	//a reference to the font style sheet
	GUI.skin = style;
	//label used to show score
	GUI.Label(Rect(10,5,100,50),"Score: "+score);
	//label used to show lives
	GUI.Label(Rect(110,5,100,50),"Lives: "+lives);
}

function OnTriggerEnter(other:Collider)
{
	//space ship got hit by a UFO
	if(other.gameObject.tag=="enemy")
	{
		//decrease lives by 1
		lives--;
		
		//destroy the ufo
		Destroy(other.gameObject);
		
		//all lives used up, player dies.
		if (lives <= 0)
		{
			//destroy the rocketship
			Destroy(this.gameObject);
		}
		
	
	}
}

function Start () {
	lives = 10;
}

function Update () {
	//translate the position of the mouse to the position
	//of the rocket ship
	transform.position.y = 
	Camera.main.ScreenToWorldPoint(Input.mousePosition).y;
	
	

}
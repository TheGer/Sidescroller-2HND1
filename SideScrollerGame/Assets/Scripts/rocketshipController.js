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



function Start () {

}

function Update () {
	//translate the position of the mouse to the position
	//of the rocket ship
	transform.position.y = 
	Camera.main.ScreenToWorldPoint(Input.mousePosition).y;
	
	

}
#pragma strict

function OnBecameInvisible()
{
 //as soon as the background becomes invisible, place it on the other side of the 
 //screen.
 transform.position.x = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,0,0)).x;
}


function Start () {

}

function Update () {

}
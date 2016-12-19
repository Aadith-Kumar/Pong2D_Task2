#pragma strict

var ballSpeed : float = 100;

function Start () {
	yield WaitForSeconds (2);
	GoBall ();

}

function Update () {

	var xVel : float = GetComponent.<Rigidbody2D>().velocity.x;
	if(xVel < 18   && xVel > -18 && xVel != 0){
		if ( xVel > 0) GetComponent.<Rigidbody2D>().velocity.x = 20;
		else GetComponent.<Rigidbody2D>().velocity.x = -20;

	}
}

function OnCollisionEnter2D( colInfo : Collision2D){
	//Debug.Log(" ball hit sensefd" );

	if ( colInfo.collider.tag == "Player" ){
		GetComponent.<AudioSource>().Play();
		GetComponent.<AudioSource>().pitch = Random.Range(0.8f,1.2f);
		GetComponent.<Rigidbody2D>().velocity.y  = GetComponent.<Rigidbody2D>().velocity.y /2 + colInfo.collider.GetComponent.<Rigidbody2D>().velocity.y/3;

		//Debug.Log(" ball hit " );
	}



}

function ResetBall(){
    GetComponent.<Rigidbody2D>().velocity.y = 0;
    GetComponent.<Rigidbody2D>().velocity.x = 0;

    transform.position.x = 0;
    transform.position.y = 0;

    yield WaitForSeconds (1);
    GoBall();
}


function GoBall (){

var randomNumber = Random.Range(0,2);
	if (randomNumber <= 0.5){
		//Debug.Log("Shoot Left");
		GetComponent.<Rigidbody2D>().AddForce ( new Vector2 (ballSpeed,10));

	}
	else{
		//Debug.Log("Shoot right");
		GetComponent.<Rigidbody2D>().AddForce ( new Vector2 (-ballSpeed,-10));
	}
}
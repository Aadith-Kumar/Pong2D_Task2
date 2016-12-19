#pragma strict

function OnTriggerEnter2D (hitInfo : Collider2D) {
	if( hitInfo.name == "Ball"){
		var wallName = transform.name;
		Manager.Score(wallName);
		GetComponent.<AudioSource>().Play();
		hitInfo.gameObject.SendMessage("ResetBall");
	}


}

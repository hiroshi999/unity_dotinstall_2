#pragma strict

var ball : Transform;
var n : int = 0;

function Update () {
	// スペース入力を受け付ける
	if (Input.GetButtonUp("Jump")) {
		Instantiate(ball, transform.position, transform.rotation);
		n++;
	}

	if (n > 5) {
		Application.LoadLevel("GameOver");
	}
}
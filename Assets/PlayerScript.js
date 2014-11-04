#pragma strict

//var x : int = 10;

function Start () {
	//Debug.Log("Hello World => " + x);
	Debug.Log("Script Start!!");
}

function Update () {

	// 位置情報の変更
	//transform.position.z += 0.1;
	//transform.position += Vector3(0,0,0.1);
	//transform.Translate(0,0,0.1);

	// スペース入力を受け付ける
	if (Input.GetButtonUp("Jump")) {
		Debug.Log("jumped");
	}

	// 左右キーで移動
	var x : float = Input.GetAxis("Horizontal");
	transform.Translate(x * 0.2,0,0);
}

function OnCollisionEnter (obj : Collision) {
	if (obj.gameObject.name == 'RightWall') {
		Debug.Log("Hit R!!");
	}
}
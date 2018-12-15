
// 把数值限制在 low 和 high 之间。
function minmax(value, low, high) {
	return Math.max(low, Math.min(high, value));
}



// 程序会不停呼叫 tick() 方法
// 通过 Tracker.keypoints 获得最新的关节位置
function tick() {
	if (!Tracker.keypoints)
		return;

	var pos, 	// 用于暂时记录关节位置
	 v, 		// 用于暂时计算数值
		note,   // 需要播放的音符
		vol;    // 音量

	// 右手，控制音符
	pos = Tracker.keypoints[10].position;		// 获得右手手腕的关节位置
  console.log(pos); 

	// v = pos.x / 300;							// 用 300 像素为范围，转成 0..1
	// v = minmax(v, 0, 1);
	// v = 1 - v;									// 左右反转
	// v = v * (notes.length-1);                   // 把 0..1 转成 0..6
	// v = Math.floor(v);							// 转成整数
	// note = notes[v];                            // 通过数组获得音符

	//
	if (note != lastNote)
	{
		// console.log(note + " : " + 1);
		playNote(note, 1);
	}

}

init();
Tracker.init();

/*
	骨架参考
	keypoints:
		0: part: "nose"position: {x: 426.7225681992828, y: 256.86738602237995}score: 0.9971339702606201
		1: {score: 0.9989068508148193, part: "leftEye", position: {…}}
		2: {score: 0.9753614664077759, part: "rightEye", position: {…}}
		3: {score: 0.7871300578117371, part: "leftEar", position: {…}}
		4: {score: 0.8322078585624695, part: "rightEar", position: {…}}
		5: {score: 0.6282164454460144, part: "leftShoulder", position: {…}}
		6: {score: 0.6300492286682129, part: "rightShoulder", position: {…}}
		7: {score: 0.00581593532115221, part: "leftElbow", position: {…}}
		8: {score: 0.0025956574827432632, part: "rightElbow", position: {…}}
*		9: {score: 0.0024121105670928955, part: "leftWrist", position: {…}}
*		10: {score: 0.00001784728010534309, part: "rightWrist", position: {…}}
		11: {score: 0.0033176958095282316, part: "leftHip", position: {…}}
		12: {score: 0.001991894794628024, part: "rightHip", position: {…}}
		13: {score: 0.0015825496520847082, part: "leftKnee", position: {…}}
		14: {score: 0.0015691817970946431, part: "rightKnee", position: {…}}
		15: {score: 0.0010207036975771189, part: "leftAnkle", position: {…}}
		16: {score: 0.00017944669525604695, part: "rightAnkle", position: {…}}
*/

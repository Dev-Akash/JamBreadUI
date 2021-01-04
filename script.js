let status = false;
let front = document.getElementById("frontdrop");
let menuButton = document.getElementById("menu_btn");

function open_dash(){
	if (!status) {
		front.style.marginTop = "60px";
		front.style.marginLeft = "250px";
		let width = front.clientWidth;
		let height = front.clientHeight;
		front.style.height = height- 60+"px";
		front.style.width = width - 250+"px";
		front.style.borderRadius = "15px 0px 0px 0px";
		menuButton.style.backgroundImage = "url('Images/arrow_back-white-18dp.svg')";
		status = true;
	}
	else{
		front.style.marginTop = "0px";
		front.style.marginLeft = "0px";
		let width = front.clientWidth;
		let height = front.clientHeight;
		front.style.height = height+ 60+"px";
		front.style.width = width + 250+"px";
		front.style.borderRadius = "0px 0px 0px 0px";
		menuButton.style.backgroundImage = "url('Images/menu-black-18dp.svg')";
		status = false;
	}
}

let playButton = document.getElementById("play_btn");
let isplaying = false;

function play(){
	if (!isplaying) {
		playButton.style.backgroundImage = "url('Images/pause-white-18dp.svg')";
		isplaying = true;
	}
	else{
		playButton.style.backgroundImage = "url('Images/play_arrow-white-18dp.svg')";
		isplaying = false;
	}
}

function load_list(){
	console.log("func. started")
	for (var i =14; i >= 0; i--) {
		if (i<10) {
			var audio = new File([""],"songs/00"+i+".mp3");
		}
		else{
			var audio = new File([""],"songs/0"+i+".mp3");
		}
		var songText = document.createTextNode(audio.name);
		var node = document.createElement("LI");
		node.appendChild(songText);
		document.getElementById("songs_list").appendChild(node);
	}
}
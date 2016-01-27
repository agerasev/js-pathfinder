var App = {
	canvas: null,
	width: 800,
	height: 800,
};

var Map = {
	width: 16,
	height: 16,
	cells: [],
};

var Cell = {
	type: 0,
	path: Path.create(),
};

function pageToWorld(v) {
	return Vec2.create(v.x - 0.5*App.width, 0.5*App.height - v.y);
}

function worldToPage(v) {
	return Vec2.create(v.x + 0.5*App.width, 0.5*App.height - v.y);
}

function render(ticks) {
	var ctx = App.canvas.getContext("2d");
	ctx.clearRect(0,0,App.width,App.height);

	window.requestAnimationFrame(render);
}

function ready() {
	console.log("[info] ready");

	App.canvas = document.getElementById("canvas_main");
	App.canvas.width = App.width;
	App.canvas.height = App.height;

	window.requestAnimationFrame(render);
}

$(document).ready(ready);
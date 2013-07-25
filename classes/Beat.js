var Beat = function(bpm, song, offset, string){
	this.bpm = bpm;
	this.song = song;
	this.offset = offset;
	
	this.string = string;
}

Beat.prototype.toBeatTime = function(t) {
  return t * this.bpm / 60.0;
}

Beat.prototype.toBeat = function(t) {
	that = this;
  return 1.0 - Math.abs(Math.sin(this.toBeatTime(t)* 3.14159));
}

Beat.prototype.start = function(){
	this.song.play();
}

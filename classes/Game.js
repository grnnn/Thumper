var Game = function(){  // Game object
	this.camera =  new THREE.PerspectiveCamera(45, 4.0/3.0, 1, 10000);
	this.renderer = new THREE.WebGLRenderer({antialias: true});
	this.scene = new THREE.Scene();
	
	this.speakers = new Speakers(this.scene);
	
	this.score = 0;
	
	this.started = false;
	this.ended = false;
	this.win = false;
}

Game.prototype.init = function(){
	var that = this;
	
	this.levelCount = 0;
	this.Levels = new Array();
	
	
	Level1 = $('#Level1')[0];
	this.Levels.push(new Beat(100, Level1, 1.2, "A Proper Story -- Bastion" ));
	$(Level1).bind("ended", function(){that.reset()});
	
	Level2 = $('#Level2')[0];
	this.Levels.push(new Beat(113, Level2, 0.9, "D.A.N.C.E. -- Justice" ));
	$(Level2).bind("ended", function(){that.reset()});
	
	Level3 = $('#Level3')[0];
	this.Levels.push(new Beat(106, Level3, 0.7, "Default -- Atoms for Peace" ));
	$(Level3).bind("ended", function(){that.reset()});
	
    this.renderer.setSize(800, 600);
    document.body.appendChild(this.renderer.domElement);			
	this.renderer.setClearColor(0xEEEEEE, 1.0);
    this.renderer.clear();
      		
	this.camera.position.y = 0;
	this.camera.position.x = 0;
	this.camera.position.z = 0;
			
	this.renderer.render(this.scene, this.camera);
	
	this.composer = new THREE.EffectComposer(this.renderer);
    this.composer.addPass(new THREE.RenderPass(this.scene, this.camera));
    
      		
    this.spot = new THREE.PointLight(0xffffff, 1, 1000);
    this.spot.position.set( 0, 0, 200 );
	this.scene.add(this.spot);
	
	var ambient_light = new THREE.AmbientLight(0x101010);
  	this.scene.add(ambient_light);
  	
  	
  	this.createText();	
  	
	
	//setup keyboard events
    this.keys = {};
  	$('body').keydown(function(e) {
    if (e.which && that.keys[e.which] !== 'triggered') {
      that.keys[e.which] = true;
    }
  	});
  	$('body').keyup(function(e) {
    if (e.which) {
      that.keys[e.which] = false;
    }
  	});
}

Game.prototype.createText = function(){
	var that = this;
	this.text = document.createElement('div');
	this.text.style.color = "white";
	this.text.style.position = 'absolute';
	this.text.style.font = "50px Arial";
	this.text.style.top = 10 + 'px';
	this.text.style.left = 10 + 'px';
	document.body.appendChild(that.text);
	
	this.text2 = document.createElement('div');
	this.text2.style.color = "white";
	this.text2.style.position = 'absolute';
	this.text2.style.font = "30px Arial";
	this.text2.style.top = 80 + 'px';
	this.text2.style.left = 10 + 'px';
	this.text2.innerHTML = "Score: ";
	document.body.appendChild(that.text2);
	
	this.text3 = document.createElement('div');
	this.text3.style.color = "white";
	this.text3.style.position = 'absolute';
	this.text3.style.font = "30px Arial";
	this.text3.style.top = 80 + 'px';
	this.text3.style.left = 100 + 'px';
	document.body.appendChild(that.text3);
	
	this.text4 = document.createElement('div');
	this.text4.style.color = "white";
	this.text4.style.position = 'absolute';
	this.text4.style.font = "70px Arial";
	this.text4.style.top = 200 + 'px';
	this.text4.style.left = 600 + 'px';
	document.body.appendChild(that.text4);
	
	this.text5 = document.createElement('div');
	this.text5.style.color = "white";
	this.text5.style.position = 'absolute';
	this.text5.style.font = "70px Arial";
	this.text5.style.top = 100 + 'px';
	this.text5.style.left = 300 + 'px';
	document.body.appendChild(that.text5);
}


Game.prototype.inputHandler = function(){
	if(this.keys[32]===true){ //space, the only button
		this.keys[32] = "triggered";
		if(this.started){
			this.scoreAdder();
		}
		if(!this.started && !this.ended) {
			this.Levels[this.levelCount].start();
			this.speakers.start();
			this.started = true;
		}
	}
	
	if(this.keys[39]===true){
		this.keys[39] = "triggered";
		if(this.ended = true){
			this.ended = false;
			if(this.levelCount != this.Levels.length - 1) this.levelCount++;
			else this.fin();
			this.score = 0;
		}
	}
}

Game.prototype.scoreAdder = function(){
	var delta = this.Levels[this.levelCount].song.currentTime + this.Levels[this.levelCount].offset;
	
	var frontTime = delta;
	
	while(true){
		frontTime -= 60/this.Levels[this.levelCount].bpm;
		if(frontTime < 0) break;
		delta -= 60/this.Levels[this.levelCount].bpm;
	} //now delta is as close to 0 as it can be
	
	if(delta < 0.3){ 
		this.score += 200 + 3/delta;
		this.text3.style.color = "blue";
	}
	else{ 
		this.score -= 200 + 3/delta;
		this.text3.style.color = "red";
	}
}

Game.prototype.getCurrentBeat = function(){
	return this.Levels[this.levelCount].song.currentTime + this.Levels[this.levelCount].offset;
}

Game.prototype.reset = function(){
	// do game stuff
	this.started = false;
	this.ended = true;
	this.speakers.reset();
	
}

Game.prototype.updateText = function(){
	if(this.ended)this.text4.innerHTML = "=>";
	else this.text4.innerHTML = "";
	this.text.innerHTML = this.Levels[this.levelCount].string;
	this.text3.innerHTML = this.score;
}

Game.prototype.updateScore = function(){
	this.score -= 2;
	if(this.score < 0) this.score = 0;
	this.score = Math.round(this.score);
}

Game.prototype.render = function(t){
	that = this;
	this.renderer.render(this.scene, this.camera);
	if(this.win){}
	else{
		
		this.inputHandler();
		if(this.started) this.updateScore();
		this.updateText();
		this.camera.lookAt(new THREE.Vector3(0.0, 0.0, 1.0));
		if(this.started) this.speakers.updateShaderVals(t, this.Levels[this.levelCount].toBeat(t));
	}
}

Game.prototype.fin = function(t){
	this.text5.innerHTML = "Fin.";
	this.win = true;
}

var Speakers = function(scene){ 
	this.scene = scene;
	
	this.SpeakerArray = new Array();
	this.PlaneArray = new Array();
	
	var SpeakerVertText = loadFile('shaders/speakers.vert');
	var SpeakerFragText = loadFile('shaders/speakers.frag');

	this.SpeakerMaterial = new THREE.ShaderMaterial({
	    uniforms: { 
	      'uBeat': { type: 'f', value: 0.0 },
	      'uTime': { type: 'f', value: 0.0 },
	      'onVal': { type: 'f', value: 0.0 },
	      'ran1': { type: 'f', value: 0.0 },
      	  'ran2': { type: 'f', value: 0.0 },
       	  'ran3': { type: 'f', value: 0.0 }
    	},
    	vertexShader: SpeakerVertText,
    	fragmentShader: SpeakerFragText
	});
	
	var PlanesVertText = loadFile('shaders/planes.vert');
	var PlanesFragText = loadFile('shaders/planes.frag');
	
	this.PlaneMaterial = new THREE.ShaderMaterial({
	    uniforms: { 
	      'uBeat': { type: 'f', value: 0.0 },
	      'uTime': { type: 'f', value: 0.0 },
	      'onVal': { type: 'f', value: 0.0 },
	      'ran1': { type: 'f', value: 0.0 },
      	  'ran2': { type: 'f', value: 0.0 },
       	  'ran3': { type: 'f', value: 0.0 }
    	},
    	vertexShader: PlanesVertText,
    	fragmentShader: PlanesFragText
	});
	
	this.init();
}

Speakers.prototype.createCube = function(x,y,z){
	this.cube1= new THREE.Mesh(
        		new THREE.CubeGeometry(50, 120, 30),
        		new THREE.MeshLambertMaterial({color: 0x39393A}));
	
	this.cube1.position.x = x;
	this.cube1.position.y = y;
	this.cube1.position.z = z;
	
	this.scene.add(this.cube1);
}

Speakers.prototype.counter = 0;
Speakers.prototype.createCyl = function(x,y,z){
	
	this.SpeakerArray.push(this.SpeakerMaterial.clone());
	
	this.cyl1= new THREE.Mesh(
        		new THREE.CylinderGeometry(20, 15, 10, 50, 50, false),
        		this.SpeakerArray[this.counter]);
	
	this.cyl1.position.x = x;
	this.cyl1.position.y = y;
	this.cyl1.position.z = z;
	this.cyl1.rotation.x -= 3.14159/2;
	
	this.scene.add(this.cyl1);
	
	this.counter++;
}

Speakers.prototype.init = function(){
	
	
	
	this.createCube(80, 0, 350);
	this.createCube(-80, 0, 350);
	
	this.cube3= new THREE.Mesh(
        		new THREE.CubeGeometry(108, 50, 30),
        		new THREE.MeshLambertMaterial({color: 0x39393A}));
	
	this.cube3.position.x = 0;
	this.cube3.position.y = -35;
	this.cube3.position.z = 350;
	
	this.scene.add(this.cube3);
	
	
	// actual speakers
	this.createCyl(80, 30, 335);
	this.createCyl(80, -30, 335);
	this.createCyl(-80, 30, 335);
	this.createCyl(-80, -30, 335);
	this.createCyl(30, -35, 335);
	this.createCyl(-30, -35, 335);
	
	this.PlaneArray.push(this.PlaneMaterial.clone());
	
	this.plane1 = new THREE.Mesh(
        		new THREE.PlaneGeometry(700, 800),
        		this.PlaneArray[0]);
	
	this.plane1.position.x = 0;
	this.plane1.position.y = -60;
	this.plane1.position.z = 0;
	this.plane1.rotation.x -= 3.14159/2;	
	
	this.scene.add(this.plane1);
	
	this.PlaneArray.push(this.PlaneMaterial.clone());
	
	this.plane2 = new THREE.Mesh(
        		new THREE.PlaneGeometry(700, 800),
        		this.PlaneArray[1]);
	
	this.plane2.position.x = 0;
	this.plane2.position.y = 0;
	this.plane2.position.z = 500;
	this.plane2.rotation.x += 3.14159;	
	
	this.scene.add(this.plane2);
	
}


Speakers.prototype.updateShaderVals = function(t, b){
	for( var i = 0; i < this.SpeakerArray.length; i++){
		this.SpeakerArray[i].uniforms['uTime'].value = t;
		this.SpeakerArray[i].uniforms['uBeat'].value = b;
		
		var randomChance = Math.random() * 100;
		if(randomChance > 99){
			this.SpeakerArray[i].uniforms['ran1'].value = Math.random();
			this.SpeakerArray[i].uniforms['ran2'].value = Math.random();
			this.SpeakerArray[i].uniforms['ran3'].value = Math.random();
		}
	}
	for( var i = 0; i < this.PlaneArray.length; i++){
		var randomChance = Math.random() * 100;
		if(randomChance > 99){
			this.PlaneArray[i].uniforms['ran1'].value = Math.random();
			this.PlaneArray[i].uniforms['ran2'].value = Math.random();
			this.PlaneArray[i].uniforms['ran3'].value = Math.random();
		}
	}
}

Speakers.prototype.reset = function(){
	for( var i = 0; i < this.SpeakerArray.length; i++){
		this.SpeakerArray[i].uniforms['onVal'].value = 0.0;
		this.SpeakerArray[i].uniforms['ran1'].value = 0.0;
		this.SpeakerArray[i].uniforms['ran2'].value = 0.0;
		this.SpeakerArray[i].uniforms['ran3'].value = 0.0;
	}
	for( var i = 0; i < this.PlaneArray.length; i++){
		this.PlaneArray[i].uniforms['onVal'].value = 0.0;
		this.PlaneArray[i].uniforms['ran1'].value = 0.0;
		this.PlaneArray[i].uniforms['ran2'].value = 0.0;
		this.PlaneArray[i].uniforms['ran3'].value = 0.0;
	}
}

Speakers.prototype.start = function(){
	for( var i = 0; i < this.SpeakerArray.length; i++){
		this.SpeakerArray[i].uniforms['onVal'].value = 1.0;
		this.SpeakerArray[i].uniforms['ran1'].value = Math.random();
		this.SpeakerArray[i].uniforms['ran2'].value = Math.random();
		this.SpeakerArray[i].uniforms['ran3'].value = Math.random();
	}
	for( var i = 0; i < this.PlaneArray.length; i++){
		this.PlaneArray[i].uniforms['onVal'].value = 1.0;
		this.PlaneArray[i].uniforms['ran1'].value = Math.random();
		this.PlaneArray[i].uniforms['ran2'].value = Math.random();
		this.PlaneArray[i].uniforms['ran3'].value = Math.random();
	}
}

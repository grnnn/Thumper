varying vec3 vNormal;
uniform float uTime;
uniform float uBeat;
uniform float onVal;
uniform float ran1;
uniform float ran2;
uniform float ran3;
varying vec2 vUv;

void main() {
  vec3 light = vec3(0.0, 0.0, 1.0);
  light = normalize(light);
  vec3 nvNormal = normalize(vNormal);
  float prod = max(0.0, dot(nvNormal, light));
  if(onVal == 0.0) gl_FragColor = vec4(0.4*prod, 0.4*prod, 0.4*prod, 1.0);
  
  float CURVE = 20.0 + ran1;
  float SPEED = 6.0 + ran2;
  float DENSITY = 2.0 + ran3;
  
  
  float ang = atan(vUv.y, vUv.x);
  float dist = length(vUv) * CURVE;
  float t = ang * DENSITY + uTime * SPEED;
  if(onVal > 0.0) gl_FragColor = vec4(ran1*abs(sin(t + dist)), ran2, ran3, 1.0);
	
}
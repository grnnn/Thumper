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
  if(onVal == 0.0) gl_FragColor = vec4(0.1*prod, 0.1*prod, 0.1*prod, 1.0);
  if(onVal > 0.0) gl_FragColor = vec4(ran1*prod, ran2*prod, ran3*prod, 1.0);
	
}
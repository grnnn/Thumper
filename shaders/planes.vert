varying vec3 vNormal;
uniform float uTime;
uniform float uBeat;
uniform float onVal;
uniform float ran1;
uniform float ran2;
uniform float ran3;
varying vec2 vUv;

void main() {
  vUv = vec2(uv.x - 0.5, uv.y - 0.5);
  vNormal = normalMatrix * vec3(normal);
  gl_Position = projectionMatrix *
                modelViewMatrix *
                vec4(position, 1.0);
}
uniform float uTime;
uniform float uAmplitude;
uniform float uWaveLength;

void main() {
  vec3 newPosition = position;
  
  float wave = uAmplitude * sin(position.x * uWaveLength + uTime);
  newPosition.z += wave;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
const vertexShaderStars = `

uniform float uSize;


varying vec2 vUv;
void main()
{

    gl_Position =projectionMatrix * viewMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = 0.1 * uSize;
    vUv=uv;
}
`

export default vertexShaderStars;
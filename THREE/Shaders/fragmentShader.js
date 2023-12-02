const fragmentShader = `
varying vec3 vColor;
void main()
{
    float strength3 = distance(gl_PointCoord,vec2(0.5));
    strength3 =1.0 -strength3;
    strength3 =pow(strength3, 10.0);


    vec3 finalColor = mix(vec3(0.0),vColor,strength3);

    gl_FragColor = vec4(finalColor,1.0);
}
`

export default fragmentShader;
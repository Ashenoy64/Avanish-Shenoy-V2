const fragmentShaderStars = `
#define PI 3.1415926535
varying vec2 vUv;


vec2 fade(vec2 t)
{
    return t*t*t*(t*(t*6.0-15.0)+10.0);
}


void main()
{

    float sx =vUv.x;
    float sy =vUv.y;
    float strength;
    float help;

    vec2 helP;
    vec2 v1,v2;

    //pattern 1
    gl_FragColor = vec4(vUv, 1.0, 1.0);

    //pattern 2
    //gl_FragColor =vec4(vUv.x,vUv.y,0.0,1.0);

    //pattern 3
     //gl_FragColor =vec4(vUv,0.5,1.0);

    //pattern4
    //gl_FragColor =vec4(sx,sx,sx,1.0);

    //pattern5
    // gl_FragColor =vec4(sy,sy,sy,1.0);

    //pattern6
    gl_FragColor =vec4(1.0-sy,1.0-sy,1.0-sy,1.0);

    
}
`

export default fragmentShaderStars;
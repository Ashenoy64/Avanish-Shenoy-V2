const vertexShader = `
uniform float uTime;
uniform float uSize;
uniform vec3 uPosition;

attribute float aScale;
attribute vec3 aRandomness;

varying vec3 vColor;
void main()
{

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec3 diffVector = modelPosition.xyz - uPosition;

    float angle = atan(diffVector.x, diffVector.z);
    float distanceFromCenter = length(diffVector.xz);
    float angleOffset = (1.0 / distanceFromCenter) * uTime * 0.2; //0.2

    angle += angleOffset;

    modelPosition.x = cos(angle) * distanceFromCenter + uPosition.x;
    modelPosition.z = sin(angle) * distanceFromCenter + uPosition.z;

    float slantFactor = 0.5; 

    float slantOffset = distanceFromCenter * slantFactor * sin(angle);

    modelPosition.y -= slantOffset;

    modelPosition.xyz += aRandomness;

    vec4 viewPosition = viewMatrix *modelPosition;
    vec4 projectedPosition =projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

    gl_PointSize = uSize * aScale;
    gl_PointSize +=(1.0/ -viewPosition.z);

    vColor = color;

}
`

export default vertexShader;
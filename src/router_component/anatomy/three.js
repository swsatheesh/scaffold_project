const THREE = require("three");
global.THREE = THREE;
if (!window.addEventListener) window.addEventListener = () => {};
require("three/examples/js/renderers/Projector");
require("three/examples/js/loaders/GLTFLoader");
export default THREE;

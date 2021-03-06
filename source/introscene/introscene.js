//Intro scene


function SetUpScene(){

  //Set Scene and camera
  var NEAR = 1e-6, FAR = 1e27;
  window.scene = new THREE.Scene();
  window.camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, FAR );
  window.clock = new THREE.Clock();

  //Set Up Controls for later
  window.controls = new THREE.PointerLockControls(window.camera);

  //Add camera and controls
  window.scene.add(window.controls.getObject());
  window.player = window.controls.getObject();

  SetUpControls();

  //Set up  light
  LoadLights();


  //Start loading in models
  StartModelLoad();
  //Do we need this?

}


function LoadLights(){
  //Give us some basic lighting across the scene

  //Basic Sun
  var sun = new THREE.DirectionalLight(0xFDB813, 0.3 );
  sun.name = "sun";
  sun.position.x = -10;
  sun.position.y = 5;
  sun.castShadow = true;
  window.scene.add(sun);

  //Lamp light
  var lamp = new THREE.PointLight(0xABFFEF, 0.25, -1, 2); //PARAMS | Colour, intensity, direction (- is down), decay
  lamp.name = "SkyLamp";
  lamp.position.y = 450;
  lamp.castShadow = true;
  window.scene.add(lamp);
}

function StartModelLoad(){

  //Call to models.js to load a model from a like
  LoadModels(
    {

    }
  );
}


function FindPosition(x, y, z){
  /**
  *
  * Since 3js is so different from other renderers, this function is designed to help you understand spacial awareness. Just call it and give it an x y z cordinate and it'll place a block at said cordinate
  *
  **/

  //Create Box
  var geometry = new THREE.BoxGeometry( 10, 10, 10);

  //Colour it
  var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

  //Create Mesh and position it
  var cube = new THREE.Mesh( geometry, material );
  cube.position.x = x;
  cube.position.y = y;
  cube.position.z = z;


  window.scene.add(cube);

}

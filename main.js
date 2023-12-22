import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/0.159.0/three.module.js';

let scene, camera, renderer, box, circle, boxCandy;

function init() {
    scene = new THREE.Scene();
    scene.background = null;

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,
    0.1, 1000);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight );
    renderer.setClearColor(0x000000, 0);

    document.body.appendChild(renderer.domElement);

    // Box object
    const geometry = new THREE.BoxGeometry(3.8, 4, 4);
    const texture = new THREE.TextureLoader().load('textures/xmas.gif');
    const material = new THREE.MeshBasicMaterial({map: texture});
    box = new THREE.Mesh(geometry, material);
    box.position.set(0, 2, 0);
    scene.add(box);

    const geometryBoxCandy = new THREE.BoxGeometry(1, 1.5, 1);
    const textureBoxCandy = new THREE.TextureLoader().load('textures/candy.jpg');
    const materialBoxCandy = new THREE.MeshBasicMaterial( { map: textureBoxCandy } ); 
    boxCandy = new THREE.Mesh( geometryBoxCandy, materialBoxCandy );
    boxCandy.position.set(3.2, 2, 5);
    scene.add(boxCandy);

    // Circle object
    const geometryCircle = new THREE.CircleGeometry(1.1, 8);
    const textureCircle = new THREE.TextureLoader().load('textures/santa.jpg');
    const materialCircle = new THREE.MeshBasicMaterial( { map: textureCircle } ); 
    circle = new THREE.Mesh( geometryCircle, materialCircle );
    circle.position.set(-3, 2.5, 5);
    scene.add(circle);

    //Camera position
    camera.position.set(0,0,10);
    //scene.add(new THREE.CameraHelper(camera));
}


function animate() {
  requestAnimationFrame(animate);
  box.rotation.x += 0.005;
  box.rotation.y += 0.005;

  circle.rotation.x += 0.003;
  circle.rotation.y += 0.003;

  boxCandy.rotation.x += 0.005;
  boxCandy.rotation.y += 0.005;

  renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false)

init()
animate();

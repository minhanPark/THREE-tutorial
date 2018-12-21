const Init = () => {
  const WIDTH = window.innerWidth,
    HEIGHT = window.innerHeight;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x81ecec);

  const camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
  scene.add(camera);

  const geo = new THREE.BoxGeometry(10, 10, 10);
  const material = new THREE.MeshLambertMaterial({ color: 0x55efc4 });
  const mesh = new THREE.Mesh(geo, material);
  scene.add(mesh);

  const light = new THREE.PointLight();
  light.position.set(50, 50, 50);
  scene.add(light);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(WIDTH, HEIGHT);
  //renderer.setClearColor(0x81ecec);
  document.body.appendChild(renderer.domElement);

  camera.position.z = 30;
  mesh.rotation.x = (Math.PI * 20) / 180;
  mesh.rotation.y = (Math.PI * 20) / 180;
  
  //if you want to drag mesh(obj), use bottom line code.
  // const obj = [mesh];
  // const dragControls = new THREE.DragControls(obj, camera, renderer.domElement);

  const rotateObj = () => {
    const speed = Math.floor(Math.random() * 3);
    mesh.rotation.y += (Math.PI * speed) / 180;
    renderer.render(scene, camera);
    requestAnimationFrame(rotateObj);
  };
  requestAnimationFrame(rotateObj);
};

window.addEventListener("load", Init);

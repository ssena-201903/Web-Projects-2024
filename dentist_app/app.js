// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const patient_list = document.querySelector(".patient-list");

// get patient list items
document.addEventListener("DOMContentLoaded", function () {
        fetch('patients_gendered.json')
                .then(response => response.json())
                .then(data => {
                        data.forEach(patient => {
                                // create new div for each patient
                                const patien_item = document.createElement('div');
                                patien_item.className = 'patient-item';

                                patien_item.innerHTML = `
                                    <div class="patient-name">
                                        <img src="${patient.photo}" alt="patient_photo">
                                        <p>${patient.name}</p>
                                    </div>
                                    <p>${patient.appointment_time}</p>
                                `;

                                //add patient to the list
                                patient_list.appendChild(patien_item);
                        });
                })
                .catch(error => console.log('error loading the JSON file', error));
}); 

//THREE D OBJECT 
// Three.js ve diğer bileşenleri kullanmak için global olarak tanımlayın
let scene, camera, renderer, controls, loader;

// Fonksiyonları tanımla
function init() {
    // Sahneyi oluştur
    scene = new THREE.Scene();

    // Kamerayı oluştur
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    // Canvas'ı seç
    const canvas = document.querySelector('#toothCanvas');
    
    // WebGL Renderer oluştur
    renderer = new THREE.WebGLRenderer({ canvas: canvas });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    // Orbit Controls oluştur
    controls = new THREE.OrbitControls(camera, renderer.domElement); // Burayı güncelledik

    // Işık ekle
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 1, 1).normalize();
    scene.add(light);

    // GLTF Loader oluştur
    loader = new THREE.GLTFLoader();
    
    // Modeli yükle
    loader.load('teeth.glb', function(gltf) {
        const toothModel = gltf.scene;
        scene.add(toothModel);
        
        // Modelin pozisyon ve ölçek ayarları
        toothModel.position.set(0, 0, 0);
        toothModel.scale.set(1.5, 1.5, 1.5);
        
        // Animasyonu başlat
        animate();
    });

    // Kamerayı ayarla
    camera.position.z = 5;
}

// Animasyon fonksiyonu
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

// Başlatma fonksiyonunu çağır
init();


//highlighting the selected tooth
// const raycaster = new THREE.Raycaster();
// const mouse = new THREE.Vector2();

// function onMouseClick(event) {
//     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//     raycaster.setFromCamera(mouse, camera);

//     const intersects = raycaster.intersectObjects(scene.children, true);

//     if (intersects.length > 0) {
//         // Seçilen dişin rengini değiştir veya işaretle
//         intersects[0].object.material.color.set(0xff0000);
//     }
// }

// window.addEventListener('click', onMouseClick, false);


  
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
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// adding light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 1, 1).normalize();
scene.add(light);

//model loader for GLB
loader.load('human_teeth.glb', function(gltf) {
        const toothModel = gltf.scene;
        scene.add(toothModel);
        
        // Modeli görünür hale getirmek için pozisyon ve ölçek ayarları
        toothModel.position.set(0, 0, 0); // Gerekirse pozisyonu ayarlayın
        toothModel.scale.set(1.5, 1.5, 1.5); // Gerekirse ölçeği ayarlayın
    
        // Mouse kontrolleri
        const controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.update();
    
        // Render fonksiyonu
        const animate = function() {
            requestAnimationFrame(animate);
            controls.update(); // Kontrol güncellemelerini her animasyonda çağır
            renderer.render(scene, camera);
        };
    
        animate();
    });
    

camera.position.z = 5;

  
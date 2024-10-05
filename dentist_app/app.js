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
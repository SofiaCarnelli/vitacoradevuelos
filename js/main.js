document.addEventListener('DOMContentLoaded', function() {
    const moreInfoLink = document.getElementById('more-info-link');
    const modal = document.getElementById('myModal');


    moreInfoLink.addEventListener('click', function(event) {
        event.preventDefault();
        modal.style.display = 'block';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });


    const storedDataDiv = document.getElementById('storedData');
    let storedData = localStorage.getItem('flightData');


    if (storedData) {
        storedData = storedData.split(';');
        storedData.forEach(data => {
            const flightData = data.split(',');
            storedDataDiv.innerHTML += `
                <div class="sticky-note-container">
                    <div class="sticky-note">
                        <h4>Datos del vuelo guardados:</h4>
                        <p><strong>Aerolínea:</strong> ${flightData[0]}</p>
                        <p><strong>Número de Vuelo:</strong> ${flightData[1]}</p>
                        <p><strong>Origen:</strong> ${flightData[2]}</p>
                        <p><strong>Destino:</strong> ${flightData[3]}</p>
                        <p><strong>Fecha de Vuelo:</strong> ${flightData[4]}</p>
                        <p><strong>Hora de Vuelo:</strong> ${flightData[5]}</p>
                    </div>
                </div>
            `;
        });
    }
});



document.getElementById('flightForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const flightData = {
        airline: document.getElementById('airline').value,
        flightNumber: document.getElementById('flightNumber').value,
        origin: document.getElementById('origin').value,
        destination: document.getElementById('destination').value,
        flightDate: document.getElementById('flightDate').value,
        flightTime: document.getElementById('flightTime').value,
    };

    let storedData = localStorage.getItem('flightData');
    let flightDataArray = storedData ? storedData.split(';') : [];

    flightDataArray.push(`${flightData.airline},${flightData.flightNumber},${flightData.origin},${flightData.destination},${flightData.flightDate},${flightData.flightTime}`);
    localStorage.setItem('flightData', flightDataArray.join(';'));
    alert('Datos del vuelo guardados en el almacenamiento local');

    const storedDataDiv = document.getElementById('storedData');
    storedDataDiv.innerHTML = ''; 

    flightDataArray.forEach(data => {
        const flightData = data.split(',');
        storedDataDiv.innerHTML += `
            <div class="sticky-note-container">
                <div class="sticky-note">
                    <h4>Datos del vuelo guardados:</h4>
                    <p><strong>Aerolínea:</strong> ${flightData[0]}</p>
                    <p><strong>Número de Vuelo:</strong> ${flightData[1]}</p>
                    <p><strong>Origen:</strong> ${flightData[2]}</p>
                    <p><strong>Destino:</strong> ${flightData[3]}</p>
                    <p><strong>Fecha de Vuelo:</strong> ${flightData[4]}</p>
                    <p><strong>Hora de Vuelo:</strong> ${flightData[5]}</p>
                </div>
            </div>
        `;
    });

    
    document.getElementById('flightForm').reset();
});




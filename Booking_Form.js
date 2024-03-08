document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach(function(value, key) {
        formObject[key] = value;
    });
    const jsonData = JSON.stringify(formObject);
    saveToJsonFile(jsonData);
    alert('Booking details saved successfully!');
    this.reset();
});

function saveToJsonFile(data) {
    localStorage.setItem('bookingData', data);
}

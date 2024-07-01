function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

function showAddPatientForm() {
    document.getElementById('add-patient-form').style.display = 'block';
}

function showAddAppointmentForm() {
    document.getElementById('add-appointment-form').style.display = 'block';
}

function showAddUserForm() {
    document.getElementById('add-user-form').style.display = 'block';
}

function showAddRoleForm() {
    document.getElementById('add-role-form').style.display = 'block';
}

function addPatient(event) {
    event.preventDefault();
    const patientName = document.getElementById('patient-name').value;
    const patientDetails = document.getElementById('patient-details').value;
    const patientList = document.getElementById('patient-list');
    const newPatient = document.createElement('div');
    newPatient.innerHTML = `<strong>${patientName}</strong><p>${patientDetails}</p><button onclick="generateQRCode('${patientName} - ${patientDetails}')">Generate QR Code</button>`;
    patientList.appendChild(newPatient);
    document.getElementById('add-patient-form').reset();
    document.getElementById('add-patient-form').style.display = 'none';
}

function addAppointment(event) {
    event.preventDefault();
    const appointmentDetails = document.getElementById('appointment-details').value;
    const appointmentList = document.getElementById('appointment-list');
    const newAppointment = document.createElement('div');
    newAppointment.textContent = appointmentDetails;
    appointmentList.appendChild(newAppointment);
    document.getElementById('add-appointment-form').reset();
    document.getElementById('add-appointment-form').style.display = 'none';
}

function addUser(event) {
    event.preventDefault();
    const userName = document.getElementById('user-name').value;
    const userPassword = document.getElementById('user-password').value;
    const userList = document.getElementById('user-list');
    const newUser = document.createElement('div');
    newUser.textContent = `User: ${userName}`;
    userList.appendChild(newUser);
    document.getElementById('add-user-form').reset();
    document.getElementById('add-user-form').style.display = 'none';
}

function addRole(event) {
    event.preventDefault();
    const roleName = document.getElementById('role-name').value;
    const roleList = document.getElementById('role-list');
    const newRole = document.createElement('div');
    newRole.textContent = `Role: ${roleName}`;
    roleList.appendChild(newRole);
    document.getElementById('add-role-form').reset();
    document.getElementById('add-role-form').style.display = 'none';
}

function generateQRCode(text) {
    const qrContainer = document.createElement('div');
    const qrImage = document.createElement('img');
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(text)}&size=150x150`;
    qrContainer.appendChild(qrImage);
    document.body.appendChild(qrContainer);
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

function addPatient() {
    const patientName = prompt("Enter patient name:");
    if (patientName) {
        const patientList = document.getElementById('patient-list');
        const newPatient = document.createElement('div');
        newPatient.textContent = patientName;
        patientList.appendChild(newPatient);
    }
}

function addAppointment() {
    const appointmentDetails = prompt("Enter appointment details:");
    if (appointmentDetails) {
        const appointmentList = document.getElementById('appointment-list');
        const newAppointment = document.createElement('div');
        newAppointment.textContent = appointmentDetails;
        appointmentList.appendChild(newAppointment);
    }
}

function addUser() {
    const userName = prompt("Enter user name:");
    if (userName) {
        const userList = document.getElementById('user-list');
        const newUser = document.createElement('div');
        newUser.textContent = userName;
        userList.appendChild(newUser);
    }
}

function addRole() {
    const roleName = prompt("Enter role name:");
    if (roleName) {
        const roleList = document.getElementById('role-list');
        const newRole = document.createElement('div');
        newRole.textContent = roleName;
        roleList.appendChild(newRole);
    }
}

function generateQRCode(text) {
    const qrContainer = document.createElement('div');
    const qrImage = document.createElement('img');
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(text)}&size=150x150`;
    qrContainer.appendChild(qrImage);
    document.body.appendChild(qrContainer);
}

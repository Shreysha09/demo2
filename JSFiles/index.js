// Employee Widgets Starts--------------------------------------------------------------------------------------------
let btnEmployeeProcess = document.getElementById('btnEmployeeProcess');

let modalEmployeeFirst = document.getElementById('modalEmployeeFirst');
let inpEmpEmail = document.getElementById('inpEmpEmail');
let inpEmpEmailValid = document.getElementById('inpEmpEmailValid');
let btnEmpContinue = document.getElementById('btnEmpContinue');
let btnGoToEmpLogin = document.getElementById('btnGoToEmpLogin');
let closeModalEmpEmail = document.getElementById('closeModalEmpEmail');

let modalEmployeeSignUp = document.getElementById('modalEmployeeSignUp');
let inpEmpSignFirstName = document.getElementById('inpEmpSignFirstName');
let inpEmpSignFirstNameValid = document.getElementById('inpEmpSignFirstNameValid');
let inpEmpSignLastName = document.getElementById('inpEmpSignLastName');
let inpEmpSignLastNameValid = document.getElementById('inpEmpSignLastNameValid');
let inpEmpSignContactNo = document.getElementById('inpEmpSignContactNo');
let inpEmpSignContactNoValid = document.getElementById('inpEmpSignContactNoValid');
let inpEmpSignPassword = document.getElementById('inpEmpSignPassword');
let inpEmpSignPasswordValid = document.getElementById('inpEmpSignPasswordValid');
let inpEmpSignConfPassword = document.getElementById('inpEmpSignConfPassword');
let inpEmpSignConfPasswordValid = document.getElementById('inpEmpSignConfPasswordValid');
let btnEmpSignUp = document.getElementById('btnEmpSignUp');
let closeModalEmpSignUp = document.getElementById('closeModalEmpSignUp');

let modalEmployeeLogin = document.getElementById('modalEmployeeLogin');
let inpEmpLoginEmail = document.getElementById('inpEmpLoginEmail');
let inpEmpLoginEmailValid = document.getElementById('inpEmpLoginEmailValid');
let inpEmpLoginPassword = document.getElementById('inpEmpLoginPassword');
let inpEmpLoginPasswordValid = document.getElementById('inpEmpLoginPasswordValid');
let checkboxEmpRememberMe = document.getElementById('checkboxEmpRememberMe');
let linkEmpForgetPassword = document.getElementById('linkEmpForgetPassword');
let btnEmpLogin = document.getElementById('btnEmpLogin');
let closeModalEmpLoginClose = document.getElementById('closeModalEmpLoginClose');
// Employee Widgets End--------------------------------------------------------------------------------------------

// Doctor Widgets Starts--------------------------------------------------------------------------------------------
let btnDoctorProcess = document.getElementById('btnDoctorProcess');

let modalDoctorFirst = document.getElementById('modalDoctorFirst');
let inpDocEmail = document.getElementById('inpDocEmail');
let inpDocEmailValid = document.getElementById('inpDocEmailValid');
let btnDocContinue = document.getElementById('btnDocContinue');
let btnGoToDocLogin = document.getElementById('btnGoToDocLogin');
let closeModalDocEmail = document.getElementById('closeModalDocEmail');

let modalDoctorSignUp = document.getElementById('modalDoctorSignUp');
let inpDocSignFirstName = document.getElementById('inpDocSignFirstName');
let inpDocSignFirstNameValid = document.getElementById('inpDocSignFirstNameValid');
let inpDocSignLastName = document.getElementById('inpDocSignLastName');
let inpDocSignLastNameValid = document.getElementById('inpDocSignLastNameValid');
let inpDocSignContactNo = document.getElementById('inpDocSignContactNo');
let inpDocSignContactNoValid = document.getElementById('inpDocSignContactNoValid');
let inpDocSignPassword = document.getElementById('inpDocSignPassword');
let inpDocSignPasswordValid = document.getElementById('inpDocSignPasswordValid');
let inpDocSignConfPassword = document.getElementById('inpDocSignConfPassword');
let inpDocSignConfPasswordValid = document.getElementById('inpDocSignConfPasswordValid');
let btnDocSignUp = document.getElementById('btnDocSignUp');
let closeModalDocSignUp = document.getElementById('closeModalDocSignUp');

let modalDoctorLogin = document.getElementById('modalDoctorLogin');
let inpDocLoginEmail = document.getElementById('inpDocLoginEmail');
let inpDocLoginPassword = document.getElementById('inpDocLoginPassword');
let checkboxDocRememberMe = document.getElementById('checkboxDocRememberMe');
let linkDocForgetPassword = document.getElementById('linkDocForgetPassword');
let btnDocLogin = document.getElementById('btnDocLogin');
let closeModalDocLoginClose = document.getElementById('closeModalDocLoginClose');
// Doctor Widgets Starts--------------------------------------------------------------------------------------------

// Variable Declarition
let employeeEmail = "";
let strEmpSignFirstName = "", strEmpSignLastName = "", strEmpSignContactNo = "", strEmpSignPassword = "", strEmpSignConfPassword = "";
let employee_user_id = "";

let doctorEmail = "";
let strDocSignFirstName = "", strDocSignLastName = "", strDocSignContactNo = "", strDocSignPassword = "", strDocSignConfPassword = "";
let doctor_user_id = "";

inpEmpLoginEmailValid.style.display = "none";
inpEmpLoginPasswordValid.style.display = "none";

inpEmpEmailValid.style.display = "none";

inpEmpSignFirstNameValid.style.display = "none";
inpEmpSignLastNameValid.style.display = "none";
inpEmpSignContactNoValid.style.display = "none";
inpEmpSignPasswordValid.style.display = "none";
inpEmpSignConfPasswordValid.style.display = "none";

inpDocEmailValid.style.display = "none";

inpDocSignFirstNameValid.style.display = "none";
inpDocSignLastNameValid.style.display = "none";
inpDocSignContactNoValid.style.display = "none";
inpDocSignPasswordValid.style.display = "none";
inpDocSignConfPasswordValid.style.display = "none";

// URL Parameters
const urlString = window.location.search;
const urlParams = new URLSearchParams(urlString);
const token = urlParams.get('access');
const organization_id = urlParams.get('org');

function reloadPage() {
    location.reload();
}

btnEmployeeProcess.addEventListener('click', () => {
    $("#modalEmployeeFirst").modal({
        backdrop: 'static',
        keyboard: false
    });
});

btnEmpContinue.addEventListener('click', () => {

    let regexEmpEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let strEmpEmail = inpEmpEmail.value.replace(/&/, '%26');

    if (!regexEmpEmail.test(strEmpEmail)) {
        inpEmpEmailValid.style.display = "block";
    } else {
        employeeEmail = strEmpEmail;
        inpEmpEmailValid.style.display = "none";

        let xhr_add = new XMLHttpRequest();

        const formData = new FormData();

        formData.append("email", employeeEmail);
        formData.append("user_type", "NORMAL");
        formData.append("user_role", "Dev::Employee");
        formData.append("token", token);
        formData.append("organization_id", organization_id);

        xhr_add.onload = function () {
            let response = JSON.parse(this.responseText);
            console.log(response);
            if (response.success == true) {
                employee_user_id = response.data.user_id;
                $("#modalEmployeeSignUp").modal({
                    keyboard: false
                });
            } else {
                let xhr_add = new XMLHttpRequest();

                const formData = new FormData();

                formData.append("email", employeeEmail);

                xhr_add.onload = function () {
                    let response = JSON.parse(this.responseText);
                    console.log(response);
                    if (response.success == true) {
                        employee_user_id = response.data.user_id;
                        $("#modalEmployeeSignUp").modal({
                            keyboard: false
                        });
                    } else {
                        alert("Email is already in use. Please Login.")
                    }
                };

                xhr_add.open("POST", verifyEmpDocEmail);
                xhr_add.send(formData);
            }
        };

        xhr_add.open("POST", empDocRegistration);
        xhr_add.send(formData);
    }
});

btnEmpLogin.addEventListener('click', () => {

    let regexEmpLoginEmail = /([0-9a-zA-Z]{1,500})/;
    let strEmpLoginEmail = inpEmpLoginEmail.value.replace(/&/, '%26');

    let regexEmpLoginPassword = /([0-9a-zA-Z]{1,500})/;
    let strEmpLoginPassword = inpEmpLoginPassword.value.replace(/&/, '%26');

    if (!regexEmpLoginEmail.test(strEmpLoginEmail)) {
        inpEmpLoginEmailValid.style.display = "block";
    } else if (!regexEmpLoginPassword.test(strEmpLoginPassword)) {
        inpEmpLoginPasswordValid.style.display = "block";
    } else {
        inpEmpLoginEmailValid.style.display = "none";
        inpEmpLoginPasswordValid.style.display = "none";

        let xhr_add = new XMLHttpRequest();

        const formData = new FormData();

        formData.append("email", strEmpLoginEmail);
        formData.append("password", strEmpLoginPassword);
        formData.append("user_role", "Dev::Employee");

        xhr_add.onload = function () {
            let response = JSON.parse(this.responseText);
            console.log(response);

            if (response.success == true) {
                let user_id = response.data.user_id;
                let user_token = response.registration_token;

                let xhr_get = new XMLHttpRequest();
    
                xhr_get.onload = function () {
                    let response = JSON.parse(this.responseText);
                    let logEmpFirstName = response.data[0].firstname;
                    let logEmpLastName = response.data[0].lastname;
                    let logEmpPhoneNo = response.data[0].phone_no;
                    let logEmpOrgId = response.data[0].organization_id;
                    window.location.href = "../Employee/index.html?email=" + strEmpLoginEmail + "&firstname=" + logEmpFirstName + "&lastname=" + logEmpLastName + "&phone_no=" + logEmpPhoneNo + "&user_id=" + user_id + "&token=" + user_token + "&organization_id=" + logEmpOrgId;
                    console.log(response);
                };
    
                xhr_get.open("GET", empGetData + "?employee_user_id=" + user_id);
                xhr_get.send();
            } else {
                alert("Email Id/Password is Invalid");
            }

        };

        xhr_add.open("POST", empDocLogin);
        xhr_add.send(formData);
    }
});

btnEmpSignUp.addEventListener('click', () => {
    let valid = employeeSignUpValidation();
    if (valid == true) {

        let xhr_add = new XMLHttpRequest();

        const formData = new FormData();

        formData.append("firstname", strEmpSignFirstName);
        formData.append("lastname", strEmpSignLastName);
        formData.append("phone_no", strEmpSignContactNo);
        formData.append("password", strEmpSignPassword);
        formData.append("user_type", "NORMAL");
        formData.append("user_role", "Dev::Employee");
        formData.append("token", token);
        formData.append("organization_id", organization_id);
        formData.append("user_id", employee_user_id);

        xhr_add.onload = function () {
            let response = JSON.parse(this.responseText);
            window.location.href = "../Employee/index.html?email=" + employeeEmail + "&firstname=" + strEmpSignFirstName + "&lastname=" + strEmpSignLastName + "&phone_no=" + strEmpSignContactNo + "&user_id=" + employee_user_id + "&token=" + token + "&organization_id=" + organization_id;
            console.log(response);
        };

        xhr_add.open("POST", updateRegistration);
        xhr_add.send(formData);
    }
});

function employeeSignUpValidation() {

    let valid = true;

    let regexEmpSignFirstName = /([0-9a-zA-Z]{1,500})/;
    strEmpSignFirstName = inpEmpSignFirstName.value.replace(/&/, '%26');

    let regexEmpSignLastName = /([0-9a-zA-Z]{1,500})/;
    strEmpSignLastName = inpEmpSignLastName.value.replace(/&/, '%26');

    let regexEmpSignContactNo = /([0-9a-zA-Z]{10,13})/;
    strEmpSignContactNo = inpEmpSignContactNo.value.replace(/&/, '%26');

    let regexEmpSignPassword = /([0-9a-zA-Z]{1,500})/;
    strEmpSignPassword = inpEmpSignPassword.value.replace(/&/, '%26');

    let regexEmpSignConfPassword = /([0-9a-zA-Z]{1,500})/;
    strEmpSignConfPassword = inpEmpSignConfPassword.value.replace(/&/, '%26');

    if (!regexEmpSignFirstName.test(strEmpSignFirstName)) {
        inpEmpSignFirstNameValid.style.display = "block";
        valid = false;
    } else {
        inpEmpSignFirstNameValid.style.display = "none";
    }

    if (!regexEmpSignLastName.test(strEmpSignLastName)) {
        inpEmpSignLastNameValid.style.display = "block";
        valid = false;
    } else {
        inpEmpSignLastNameValid.style.display = "none";
    }

    if (!regexEmpSignContactNo.test(strEmpSignContactNo)) {
        inpEmpSignContactNoValid.style.display = "block";
        valid = false;
    } else {
        inpEmpSignContactNoValid.style.display = "none";
    }

    if (!regexEmpSignPassword.test(strEmpSignPassword)) {
        inpEmpSignPasswordValid.style.display = "block";
        valid = false;
    } else {
        inpEmpSignPasswordValid.style.display = "none";
    }

    if (strEmpSignPassword != strEmpSignConfPassword) {
        inpEmpSignConfPasswordValid.style.display = "block";
        valid = false;
    } else {
        inpEmpSignConfPasswordValid.style.display = "none";
    }

    return valid;
}

btnGoToEmpLogin.addEventListener('click', () => {
    $("#modalEmployeeLogin").modal({
        keyboard: false
    });
});

// -------------------------------------------------------------------------------------------------

btnDoctorProcess.addEventListener('click', () => {
    $("#modalDoctorFirst").modal({
        backdrop: 'static',
        keyboard: false
    });
});

btnDocContinue.addEventListener('click', () => {

    let regexDocEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let strDocEmail = inpDocEmail.value.replace(/&/, '%26');

    if (!regexDocEmail.test(strDocEmail)) {
        inpDocEmailValid.style.display = "block";
    } else {
        doctorEmail = strDocEmail;
        inpDocEmailValid.style.display = "none";

        let xhr_add = new XMLHttpRequest();

        const formData = new FormData();

        formData.append("email", doctorEmail);
        formData.append("user_type", "NORMAL");
        formData.append("user_role", "Dev::Doctor");
        formData.append("token", token);
        formData.append("organization_id", organization_id);

        xhr_add.onload = function () {
            let response = JSON.parse(this.responseText);
            console.log(response);
            if (response.success == true) {
                doctor_user_id = response.data.user_id;
                $("#modalDoctorSignUp").modal({
                    keyboard: false
                });
            } else {
                let xhr_add = new XMLHttpRequest();

                const formData = new FormData();

                formData.append("email", doctorEmail);

                xhr_add.onload = function () {
                    let response = JSON.parse(this.responseText);
                    console.log(response);
                    if (response.success == true) {
                        doctor_user_id = response.data.user_id;
                        $("#modalDoctorSignUp").modal({
                            keyboard: false
                        });
                    } else {
                        alert("Email is already in use. Please Login.")
                    }
                };

                xhr_add.open("POST", verifyEmpDocEmail);
                xhr_add.send(formData);
            }
        };

        xhr_add.open("POST", empDocRegistration);
        xhr_add.send(formData);
    }
});

btnDocSignUp.addEventListener('click', () => {
    let valid = doctorSignUpValidation();
    if (valid == true) {

        let xhr_add = new XMLHttpRequest();

        const formData = new FormData();

        formData.append("firstname", strDocSignFirstName);
        formData.append("lastname", strDocSignLastName);
        formData.append("phone_no", strDocSignContactNo);
        formData.append("password", strDocSignPassword);
        formData.append("user_type", "NORMAL");
        formData.append("user_role", "Dev::Doctor");
        formData.append("token", token);
        formData.append("organization_id", organization_id);
        formData.append("user_id", doctor_user_id);

        xhr_add.onload = function () {
            let response = JSON.parse(this.responseText);
            console.log("Hi");
            console.log(response);
            window.location.href = "../Doctor/appointment.html?email=" + doctorEmail + "&firstname=" + strDocSignFirstName + "&lastname=" + strDocSignLastName + "&phone_no=" + strDocSignContactNo + "&user_id=" + doctor_user_id + "&token=" + token + "&organization_id=" + organization_id;
        };

        xhr_add.open("POST", updateRegistration);
        xhr_add.send(formData);
    }
});

function doctorSignUpValidation() {

    let valid = true;

    let regexDocSignFirstName = /([0-9a-zA-Z]{1,500})/;
    strDocSignFirstName = inpDocSignFirstName.value.replace(/&/, '%26');

    let regexDocSignLastName = /([0-9a-zA-Z]{1,500})/;
    strDocSignLastName = inpDocSignLastName.value.replace(/&/, '%26');

    let regexDocSignContactNo = /([0-9a-zA-Z]{10,13})/;
    strDocSignContactNo = inpDocSignContactNo.value.replace(/&/, '%26');

    let regexDocSignPassword = /([0-9a-zA-Z]{1,500})/;
    strDocSignPassword = inpDocSignPassword.value.replace(/&/, '%26');

    let regexDocSignConfPassword = /([0-9a-zA-Z]{1,500})/;
    strDocSignConfPassword = inpDocSignConfPassword.value.replace(/&/, '%26');

    if (!regexDocSignFirstName.test(strDocSignFirstName)) {
        inpDocSignFirstNameValid.style.display = "block";
        valid = false;
    } else {
        inpDocSignFirstNameValid.style.display = "none";
    }

    if (!regexDocSignLastName.test(strDocSignLastName)) {
        inpDocSignLastNameValid.style.display = "block";
        valid = false;
    } else {
        inpDocSignLastNameValid.style.display = "none";
    }

    if (!regexDocSignContactNo.test(strDocSignContactNo)) {
        inpDocSignContactNoValid.style.display = "block";
        valid = false;
    } else {
        inpDocSignContactNoValid.style.display = "none";
    }

    if (!regexDocSignPassword.test(strDocSignPassword)) {
        inpDocSignPasswordValid.style.display = "block";
        valid = false;
    } else {
        inpDocSignPasswordValid.style.display = "none";
    }

    if (strDocSignPassword != strDocSignConfPassword) {
        inpDocSignConfPasswordValid.style.display = "block";
        valid = false;
    } else {
        inpDocSignConfPasswordValid.style.display = "none";
    }

    return valid;
}

btnGoToDocLogin.addEventListener('click', () => {
    $("#modalDoctorLogin").modal({
        keyboard: false
    });
});

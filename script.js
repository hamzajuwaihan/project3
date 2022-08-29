
/* start of evaluation page script */
function welcomeMessageUser() {
    document.getElementById("welcomeMessage").innerHTML = `Welcome ${sessionStorage.name}`
}
function showEvalSections() {
    document.getElementById("evalfir").style.display = "flex";
}
function showOne() {
    const p1Text = document.getElementById("p1_text");
    p1Text.style.display = 'block';
}

function showTwo() {
    const p2Text = document.getElementById("p2_text");
    p2Text.style.display = 'block';
}

function showThree() {
    const p3Text = document.getElementById("p3_text");
    p3Text.style.display = 'block';

}
function selectEmployeeToEval() {
    let mySelect = document.getElementById('employeeNameSelect');

    document.getElementById("q-0").textContent = `${event.target.value} personality and charisma is truly magnetic.`;
    document.getElementById("q-1").textContent = `${event.target.value} is a person of charisma and influence.`;
    document.getElementById("q-2").textContent = `${event.target.value} is a very soft spoken person and never lose his temper.`;
    document.getElementById("q-3").textContent = `${event.target.value} dress and personal appearance.`;
    document.getElementById("q-4").textContent = `${event.target.value} is accountable for her tasks.`;
    document.getElementById("q-5").textContent = `${event.target.value} behavior according to the company’s ethical code.`;
    document.getElementById("q-6").textContent = `${event.target.value}  the employee demonstrated the highest level of understanding of
      the most complex design and implementation issues at every stage
      of development.`;
    document.getElementById("q-7").textContent = `${event.target.value} has an exceptional way of finding things and get them
      improved.`;
    document.getElementById("q-8").textContent = `${event.target.value} understands complicated issues, even when outside of
      his direct area of expertise.`;
    storage(mySelect.value);
}
function storage(empName) {
    let emp1Arr = [];
    // Q1 (Personal Critieria);

    let pfe = document.getElementById('p-f-e');
    let pfg = document.getElementById('p-f-g');
    let pfp = document.getElementById('p-f-p');

    pfe.onclick = () => {
        emp1Arr[0] = `Excellent`;
    }
    pfg.onclick = () => {
        emp1Arr[0] = `Good`

    }
    pfp.onclick = () => {
        emp1Arr[0] = `Poor`
    }

    // Q2 (Personal Critieria);
    let pse = document.getElementById('p-s-e');
    let psg = document.getElementById('p-s-g');
    let psp = document.getElementById('p-s-p');


    pse.onclick = () => {
        emp1Arr[1] = `Excellent`

    }
    psg.onclick = () => {
        emp1Arr[1] = `Good`

    }
    psp.onclick = () => {
        emp1Arr[1] = `Poor`

    }

    let pte = document.getElementById('p-t-e');
    let ptg = document.getElementById('p-t-g');
    let ptp = document.getElementById('p-t-p');

    pte.onclick = () => {
        emp1Arr[2] = `Excellent`


    }
    ptg.onclick = () => {
        emp1Arr[2] = `Good`


    }
    ptp.onclick = () => {
        emp1Arr[2] = `Poor`


    }
    // Q1 (Professional Critieria);

    let profe = document.getElementById('pro-f-e');
    let profg = document.getElementById('pro-f-g');
    let profp = document.getElementById('pro-f-p');

    profe.onclick = () => {
        emp1Arr[3] = `Excellent`


    }
    profg.onclick = () => {
        emp1Arr[3] = `Good`

    }
    profp.onclick = () => {
        emp1Arr[3] = `Poor`

    }
    // Q2 (Professional Critieria);

    let prose = document.getElementById('pro-s-e');
    let prosg = document.getElementById('pro-s-g');
    let prosp = document.getElementById('pro-s-p');

    prose.onclick = () => {
        emp1Arr[4] = `Excellent`

    }
    prosg.onclick = () => {
        emp1Arr[4] = `Good`

    }
    prosp.onclick = () => {
        emp1Arr[4] = `Poor`

    }
    // Q3 (Professional Critieria);

    let prote = document.getElementById('pro-t-e');
    let protg = document.getElementById('pro-t-g');
    let protp = document.getElementById('pro-t-p');

    prote.onclick = () => {
        emp1Arr[5] = `Excellent`

    }
    protg.onclick = () => {
        emp1Arr[5] = `Good`

    }
    protp.onclick = () => {
        emp1Arr[5] = `Poor`

    }

    // Q1 (technicalSection Critieria);

    let tfe = document.getElementById('t-f-e');
    let tfg = document.getElementById('t-f-g');
    let tfp = document.getElementById('t-f-p');

    tfe.onclick = () => {
        emp1Arr[6] = `Excellent`

    }
    tfg.onclick = () => {
        emp1Arr[6] = `Good`


    }
    tfp.onclick = () => {
        emp1Arr[6] = `Poor`

    }

    // Q2 (technicalSection Critieria);

    let tse = document.getElementById('t-s-e');
    let tsg = document.getElementById('t-s-g');
    let tsp = document.getElementById('t-s-p');

    tse.onclick = () => {
        emp1Arr[7] = `Excellent`

    }
    tsg.onclick = () => {
        emp1Arr[7] = `Good`

    }
    tsp.onclick = () => {
        emp1Arr[7] = `Poor`

    }

    // Q3 (technicalSection Critieria);

    let tte = document.getElementById('t-t-e');
    let ttg = document.getElementById('t-t-g');
    let ttp = document.getElementById('t-t-p');

    tte.onclick = () => {
        emp1Arr[8] = `Excellent`

        localStorage.setItem(empName, JSON.stringify(emp1Arr));
    }
    ttg.onclick = () => {
        emp1Arr[8] = `Good`

        localStorage.setItem(empName, JSON.stringify(emp1Arr));
    }
    ttp.onclick = () => {
        emp1Arr[8] = `Poor`

        localStorage.setItem(empName, JSON.stringify(emp1Arr));
    }
}
/* end of evaluation page script */


/*start of report page */
function showResult() {

    document.getElementById("reportfir").style.display = "flex";
    document.getElementById("recomendationSystem").style.display = "flex";
}
function changeSelectForReport() {
    let mySelect2 = document.getElementById('employeeNameSelect2')


    document.getElementById("q-0").textContent = `${event.target.value} personality and charisma is truly magnetic.`;
    document.getElementById("q-1").textContent = `${event.target.value} is a person of charisma and influence.`;
    document.getElementById("q-2").textContent = `${event.target.value} is a very soft spoken person and never lose his temper.`;
    document.getElementById("q-3").textContent = `${event.target.value} dress and personal appearance.`;
    document.getElementById("q-4").textContent = `${event.target.value} is accountable for her tasks.`;
    document.getElementById("q-5").textContent = `${event.target.value} behavior according to the company’s ethical code.`;
    document.getElementById("q-6").textContent = `${event.target.value}  the employee demonstrated the highest level of understanding of
        the most complex design and implementation issues at every stage
        of development.`;
    document.getElementById("q-7").textContent = `${event.target.value} has an exceptional way of finding things and get them
        improved.`;
    document.getElementById("q-8").textContent = `${event.target.value} understands complicated issues, even when outside of
        his direct area of expertise.`;
    let myEmp
    myAnswers = JSON.parse(localStorage.getItem(myEmp));

    myEmp = mySelect2.value;
    myAnswers = JSON.parse(localStorage.getItem(myEmp));
    let recommendations = '';

    for (let i = 0; i < 9; i++) {
        document.getElementById(`l${i}`).textContent = myAnswers[i];
        console.log(document.getElementById(`l${i}`).textContent)
        if (document.getElementById(`l${i}`).textContent === 'Excellent') {
            document.getElementById(`l${i}`).classList.add('greentext')
            document.getElementById(`r${i}`).style.borderColor = 'green'
        } else if (document.getElementById(`l${i}`).textContent === 'Good') {
            document.getElementById(`l${i}`).classList.add('yellowtext')
            document.getElementById(`r${i}`).style.borderColor = 'yellow'
        } else {
            document.getElementById(`l${i}`).classList.add('redtext')
            document.getElementById(`r${i}`).style.borderColor = 'red'
        }
    }

    if ((l0.textContent === 'Poor')) {
        re = 1;
        recommendations += `&#x2022;${document.getElementById("q-0").textContent}: more charisma`;
    }
    if ((l1.textContent === 'Poor')) {
        re = 1;
        recommendations += `<br>&#x2022;${document.getElementById("q-1").textContent}: more influence`;
    }
    if ((l2.textContent === 'Poor')) {
        re = 1;
        recommendations += `<br>&#x2022;${document.getElementById("q-2").textContent}: control temper`;
    }
    if ((l3.textContent === 'Poor')) {
        re = 1;
        recommendations += `<br>&#x2022;${document.getElementById("q-3").textContent}: work on appearance`;
    }
    if ((l4.textContent === 'Poor')) {
        re = 1;
        recommendations += `<br>&#x2022;${document.getElementById("q-4").textContent}: must be accountable`;
    }
    if ((l5.textContent === 'Poor')) {
        re = 1;
        recommendations += `<br>&#x2022;${document.getElementById("q-5").textContent}: must respect ethical code`;
    }
    if ((l6.textContent === 'Poor')) {
        re = 1;
        recommendations += `<br>&#x2022;${document.getElementById("q-6").textContent}: more understanding of the most complex design`;
    }
    if ((l7.textContent === 'Poor')) {
        re = 1;
        recommendations += `<br>&#x2022;${document.getElementById("q-7").textContent}: must be creative`;
    }
    if ((l8.textContent === 'Poor')) {
        re = 1;
        recommendations += `<br>&#x2022;${document.getElementById("q-8").textContent}: must think out of the box`;
    }


    if (re === 1) {
        reco.innerHTML = `${recommendations}`

    } else {
        reco.innerHTML = `not need Recommendations!!`
    }

}

let r0 = document.getElementById('r0')
let r1 = document.getElementById('r1')
let r2 = document.getElementById('r2')
let r3 = document.getElementById('r3')
let r4 = document.getElementById('r4')
let r5 = document.getElementById('r5')
let r6 = document.getElementById('r6')
let r7 = document.getElementById('r7')
let r8 = document.getElementById('r8')

let l0 = document.getElementById('l0')
let l1 = document.getElementById('l1')
let l2 = document.getElementById('l2')
let l3 = document.getElementById('l3')
let l4 = document.getElementById('l4')
let l5 = document.getElementById('l5')
let l6 = document.getElementById('l6')
let l7 = document.getElementById('l7')
let l8 = document.getElementById('l8')


let reco = document.getElementById("recommendArea")


let re = 0;

/* end of report */
/* start of register script */
function registerSubmit() {
    // const form = document.getElementById("sign-up");
    const emailField = document.getElementById("email");
    const phoneField = document.getElementById("phone");
    const passField = document.getElementById("pass");
    const nameField = document.getElementById("name");



    if (nameField.value == null) {
        document.getElementById("name-error").textContent =
            "The name is required.";
            console.log('name field is null')
        return false;
    }
    if (emailField.value == null || emailField.value == "") {
        document.getElementById("email-error").textContent =
            "The email field is required.";
            console.log('email is null')
    } else if (
        !emailField.value.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
        
    ) {
        document.getElementById("email-error").textContent =
            "The email must be a valid email address.";
            console.log('name field is not gmail')
        return false;
    } else {
        document.getElementById("email-error").textContent = "";
        
    }
    if (phoneField.value == "" || phoneField.value == null) {
        document.getElementById("tel-error").textContent =
            "The Mobile field is required.";
            console.log('phone field is empty')
        return false;
    } else if (phoneField.value.length < 10) {
        document.getElementById("tel-error").textContent =
            "The mobile must be 10 characters.";
            console.log('phone field is < 10')
        return false;
    } else {
        document.getElementById("tel-error").textContent = "";
    }

    if (passField.value == "" || passField.value == null) {
        document.getElementById("pass-error").textContent =
            "The password field is required.";
            console.log('The password field is required.')
        return false;
    } else if (passField.value.length < 6) {
        document.getElementById("pass-error").textContent =
            "The password must be at least 6 characters.";
            console.log('The password must be at least 6 characters.')
        return false;
    } else if (passField.value.length > 18) {
        document.getElementById("pass-error").textContent =
            "The password may not be greater than 18 characters.";
            console.log('The password may not be greater than 18 characters.')
        return false;
    } else {
        document.getElementById("pass-error").textContent = "";
    }
    console.log('formdata start')
    let formData = JSON.parse(localStorage.getItem("formData")) || [];
    formData.push({
        name: nameField.value,
        email: emailField.value,
        password: passField.value,
        phone: phoneField.value,
    });
    localStorage.setItem("formData", JSON.stringify(formData));
    console.log('formdata end')
 

}
/* end of register page*/

/* start of login page */
function loginfunction() {
    const signInForm = document.getElementById("log-in");
    const loginemailField = document.getElementById("login-email");

    const loginpassField = document.getElementById("login-pass");

    if (loginemailField.value == null || loginemailField.value == "") {
        document.getElementById("email-error").textContent =
            "The email field is required.";
    } else if (
        !loginemailField.value.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
        document.getElementById("email-error").textContent =
            "The email must be a valid email address.";
        return false;
    } else {
        document.getElementById("email-error").textContent = "";
    }

    if (loginpassField.value == "" || loginpassField.value == null) {
        document.getElementById("pass-error").textContent =
            "The password field is required.";
        return false;
    } else if (loginpassField.value.length < 6) {
        document.getElementById("pass-error").textContent =
            "The password must be at least 6 characters.";
        return false;
    } else if (loginpassField.value.length > 18) {
        document.getElementById("pass-error").textContent =
            "The password may not be greater than 18 characters.";
        return false;
    } else {
        document.getElementById("pass-error").textContent = "";
    }
    let found = false;
    let userIndex = null;
    let formData = JSON.parse(localStorage.getItem("formData")) || [];
    formData.forEach((element, arrayIndex) => {
        if (element.email == loginemailField.value) {
            found = true;
            userIndex = arrayIndex;
        }
    });

    if (found && formData[userIndex].password == loginpassField.value) {
        document.getElementById("message").innerHTML =
            "logged in successfuly ";

        sessionStorage.email = formData[userIndex].email;
        sessionStorage.pass = formData[userIndex].password;
        sessionStorage.name = formData[userIndex].name;

        window.open('evaluation.html', '_blank');

       

        return false;
    } else if (found && formData[userIndex].password !== loginpassField.value) {
        document.getElementById("message").innerHTML = "Wrong password";
        return false;
    } else if (!found) {
        document.getElementById("message").innerHTML = "account not found";
        return false;
    } else {
        document.getElementById("message").innerHTML = "";
    }
    window.open('./pages/log in.html', '_blank');
    return false;
    
}


/* end of login page*/
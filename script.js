

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
            document.getElementById(`r${i}`).style.borderColor = 'green'
        } else if (document.getElementById(`l${i}`).textContent === 'Good') {
            document.getElementById(`r${i}`).style.borderColor = 'yellow'
        } else {
            document.getElementById(`r${i}`).style.borderColor = 'red'
        }
    }

    if ((l0.textContent === 'Poor')) {
        re = 1;
        recommendations += '<br>more charisma';
    }
    if ((l1.textContent === 'Poor')) {
        re = 1;
        recommendations += '<br>more influence';
    }
    if ((l2.textContent === 'Poor')) {
        re = 1;
        recommendations += '<br>control temper';
    }
    if ((l3.textContent === 'Poor')) {
        re = 1;
        recommendations += '<br>work on appearance';
    }
    if ((l4.textContent === 'Poor')) {
        re = 1;
        recommendations += '<br>must be accountable';
    }
    if ((l5.textContent === 'Poor')) {
        re = 1;
        recommendations += '<br>must respect ethical code';
    }
    if ((l6.textContent === 'Poor')) {
        re = 1;
        recommendations += '<br>more understanding of the most complex design';
    }
    if ((l7.textContent === 'Poor')) {
        re = 1;
        recommendations += '<br>must be creative';
    }
    if ((l8.textContent === 'Poor')) {
        re = 1;
        recommendations += '<br>must think out of the box';
    }


    if (re === 1) {
        reco.innerHTML = `we advice you with the following based on your evaluation so you keep your company as its best!!${recommendations}`

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

/* end of register page*/

/* start of login page */
const signInForm = document.getElementById("log-in");
const loginemailField = document.getElementById("login-email");

const loginpassField = document.getElementById("login-pass");
signInForm.addEventListener("submit", (e) => {
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
        e.preventDefault();
    } else {
        document.getElementById("email-error").textContent = "";
    }

    if (loginpassField.value == "" || loginpassField.value == null) {
        document.getElementById("pass-error").textContent =
            "The password field is required.";
        e.preventDefault();
    } else if (loginpassField.value.length < 6) {
        document.getElementById("pass-error").textContent =
            "The password must be at least 6 characters.";
        e.preventDefault();
    } else if (loginpassField.value.length > 18) {
        document.getElementById("pass-error").textContent =
            "The password may not be greater than 18 characters.";
        e.preventDefault();
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

        e.preventDefault();
    } else if (found && formData[userIndex].password !== loginpassField.value) {
        document.getElementById("message").innerHTML = "Wrong password";
        e.preventDefault();
    } else if (!found) {
        document.getElementById("message").innerHTML = "account not found";
        e.preventDefault();
    } else {
        document.getElementById("message").innerHTML = "";
    }
    e.preventDefault();
});

/* end of login page*/
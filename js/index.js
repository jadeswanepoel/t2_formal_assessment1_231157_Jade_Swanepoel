

let allStudents = [],



registerAccount = () => {


    let first = document.getElementById("first").value
    let email = document.getElementById("email").value
    let number = +document.getElementById("number").value
    let subject = document.getElementById("subject").value

    if(defaultCheck1 = document.getElementById(defaultCheck1)){
        allStudents.push({
            studentFirst: first,
            studentEmail: email,
            studentSubject:subject,
            studentNumber:number,
        });


        alert("Welcome " + first + " !" + "Thank you for your interest in " + subject + "!" + "We will contact you via the the email provided:" + email + "," + "or alternatively on the phone number: " + number );
    } else {
        alert("Well,well,well... Why don't you sign up for the newsletter... you don't seem to bet that interested " + first + "! If you want to sign up , you better CHECK that newsletter box!");
    }

   
    console.log(allStudents)

    document.getElementById("studentForm").reset();

}
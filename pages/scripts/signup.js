const registerFormCheck = () => {
    console.log('done')
    const fNameCheck = fName();
    const lNameCheck = lName();
    const emailChek = checkEmail();
    const passChek = checkPass();
    if (emailChek && passChek && fNameCheck && lNameCheck) {
        return true;
    }
    return false;
}

const fName = () => {
    
    let fNameLabel = document.getElementById('fNameLabel');
    const fName = document.forms['signupForm']['fName'].value;
    if (fName == '') {
        fNameLabel.innerHTML = '';
        return true
    }
    else if (fName.length > 2 && fName.length < 20) {
        fNameLabel.innerHTML = '';
        return true
    }
    else {
        fNameLabel.innerHTML = 'First name must be between 2-20 letters';
    }

}
const lName = () => {
    
    let lNamesLabel = document.getElementById('lNameLabel');
    const lName = document.forms['signupForm']['lName'].value;
    if (lName == '') {
        lNamesLabel.innerHTML = '';
        return true
    }
    else if (lName.length > 2 && lName.length < 20) {
        lNamesLabel.innerHTML = '';
        return true
    }
    else {
        lNamesLabel.innerHTML = 'Last name must be between 2-20 letters';
    }
}
const checkEmail = () => {
    
    let emailAddLabel = document.getElementById('emailAddLabel');
    const email = document.forms['signupForm']['emailAdd'].value;
    if (email.indexOf('@') > 0 && email.indexOf('.') > email.indexOf('@') + 1 && email.indexOf('.') + 1 < email.length) {
        let provider = email.substring(email.indexOf('@') + 1, email.indexOf('.'));
        if (provider == 'gmail' || provider == 'yahoo') {
            emailAddLabel.innerHTML = '';
            return true
        }
        else {
            emailAddLabel.innerHTML = 'email provider must be gmail or yahoo';
            return false;
        }
    }
    else {
        emailAddLabel.innerHTML = 'Email adress is not valid';
        return false;
    }
}
const checkPass = () => {
    
    let passLabel = document.getElementById('passLabel');
    let conPassLabel = document.getElementById('confirmPassLabel');
    const pass = document.forms['signupForm']['pass'].value;
    const passCon = document.forms['signupForm']['confirmPass'].value;
    let specialSign = false;

    if (pass.length >= 2 && pass.length <= 8) {
        for (let i = 0; i < pass.length; i++) {
            if (pass.charAt(i) >= '!' && pass.charAt(i) <= ')') {
                specialSign = true;
                break
            }
        }
        if (specialSign == true) {
            passLabel.innerHTML = '';
            if (pass == passCon) {
                return true;
            }
            else {
                conPassLabel.innerHTML = "passwords don't match";
                return false;
            }

        }
        else {
            passLabel.innerHTML = 'password must include special sign';
            return false;
        }
    }
    else {
        passLabel.innerHTML = 'password must be between 2-8 letters';
        return false;
    }
}



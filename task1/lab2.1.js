const name = document.getElementById('name')
const group = document.getElementById('group')
const phoneNum = document.getElementById('phoneNum')
const address = document.getElementById('address')
const email = document.getElementById('email')


form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const validateInputs = () => {
    const nameValue = name.value.trim();
    const groupValue = group.value.trim();
    const phoneNumValue = phoneNum.value.trim();
    const addressValue = address.value.trim();
    const emailValue = email.value.trim();

    if (isValidEmail(emailValue)) {
        email.style.border = "2px solid green"
    } else {
        email.style.border = "2px solid red"
        email.value = ""
        email.placeholder = "Incorrect E-mail"
    }

    if (isValidName(nameValue)) {
        name.style.border = "2px solid green"
    } else {
        name.style.border = "2px solid red"
        name.value = ""
        name.placeholder = "Wrong name format"
    }

    if (isValidGroup(groupValue)) {
        group.style.border = "2px solid green"
    } else {
        group.style.border = "2px solid red"
        group.value = ""
        group.placeholder = "Wrong group format"
    }

    if (isValidAddress(addressValue)) {
        address.style.border = "2px solid green"
    } else {
        address.style.border = "2px solid red"
        address.value = ""
        address.placeholder = "Wrong address format"
    }

    if (isValidNum(phoneNumValue)) {
        phoneNum.style.border = "2px solid green"
    } else {
        phoneNum.style.border = "2px solid red"
        phoneNum.value = ""
        phoneNum.placeholder = "Wrong phone-number format"
    }

    if (isValidName(nameValue)
        && isValidGroup(groupValue)
        && isValidEmail(emailValue)
        && isValidNum(phoneNumValue)
        && isValidAddress(addressValue)) {
        const info = document.createElement('div');
        info.className = "info-list";
        info.innerHTML = (`<p>ПІБ:${name.value}</p>` +
            `<p>Група:${group.value}</p>` +
            `<p>Номер телефону:${phoneNum.value}</p>` +
            `<p>Адреса:${address.value}</p>` +
            `<p>E-mail:${email.value}</p>`)
        document.body.append(info);
    }

}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidName = name => {
    const re = /^[А-Я|Ї|І][а-я|ї|і]+\s[А-Я]\.\s[А-Я]\.$/;
    return re.test(String(name));
}

const isValidGroup = group => {
    const re = /^І[А-Я]-\d{2}$/;
    return re.test(String(group));
}

const isValidAddress = address => {
    const re = /^м\.\s[А-Я][а-я|ї|і]+$/;
    return re.test(String(address));
}

const isValidNum = phoneNum => {
    const re = /^0\d{9}$/;
    return re.test(String(phoneNum));
}


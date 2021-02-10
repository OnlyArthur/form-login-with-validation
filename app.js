const sign_in_password = document.querySelector('#password');
const submitButton = document.querySelector('#submit-button');

//Lista de elementos para a validação
const li_lower_upper = document.querySelector('#lower-upper');
const li_numbers = document.querySelector('#numbers');
const li_special_characters = document.querySelector('#special-characters');
const li_digits = document.querySelector('#digits');

sign_in_password.addEventListener('keyup', (event) => {
    const { value } = sign_in_password;

    //Regex
    var regexNumbers = /\d/g;

    const upperRegex = RegExp("[A-Z]");
    const lowerRegex = RegExp("[a-z]");

    var regexSpecialCharacteres = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    // variaveis de validação
    const isNumberValidated = value.match(regexNumbers);
    const isSpecialCharacters = value.match(regexSpecialCharacteres);
    const isPasswordLength =  (value.length >= 8);
    const isLowerUpper = value.match(upperRegex) && value.match(lowerRegex);

    //Validação da quantidade de números
    /*
    Lógica: Basicamente SE o valor que está em li_digits for maior/igual a 8
    será adicionado uma classe com o nome 'active' e a tag <i> será modificada
    de 'fas fa-cicle' para 'fas fa-check'.
    */

    if (isPasswordLength) {
        li_digits.classList.add('active');
        const icon = li_digits.getElementsByTagName('i')[0];
        icon.classList.remove('fa-circle');
        icon.classList.add('fa-check');

    } else {
        li_digits.classList.remove('active');
        const icon = li_digits.getElementsByTagName('i')[0];
        icon.classList.add('fa-circle');
        icon.classList.remove('fa-check');
    }


    //Validação de números na senha
    if (isNumberValidated) {
        li_numbers.classList.add('active');
        const icon = li_numbers.getElementsByTagName('i')[0];
        icon.classList.remove('fa-circle');
        icon.classList.add('fa-check');

    } else {
        li_numbers.classList.remove('active');
        const icon = li_numbers.getElementsByTagName('i')[0];
        icon.classList.add('fa-circle');
        icon.classList.remove('fa-check');
    }

    
    //Validação caracteres especiais
    if (isSpecialCharacters) {
        li_special_characters.classList.add('active');
        const icon = li_special_characters.getElementsByTagName('i')[0];
        icon.classList.remove('fa-circle');
        icon.classList.add('fa-check');

    } else {
        li_special_characters.classList.remove('active');
        const icon = li_special_characters.getElementsByTagName('i')[0];
        icon.classList.add('fa-circle');
        icon.classList.remove('fa-check');
    }

    //Maiusculo e Minusculo
    if (isLowerUpper) {
        li_lower_upper.classList.add('active');
        const icon = li_lower_upper.getElementsByTagName('i')[0];
        icon.classList.remove('fa-circle');
        icon.classList.add('fa-check');

    } else {
        li_lower_upper.classList.remove('active');
        const icon = li_lower_upper.getElementsByTagName('i')[0];
        icon.classList.add('fa-circle');
        icon.classList.remove('fa-check');
    }

    if ( isLowerUpper &&
        isNumberValidated &&
        isSpecialCharacters &&
        isPasswordLength
        ) {
            submitButton.removeAttribute('disabled');
        } else {
            submitButton.setAttribute('disabled', '');
        }

});
const emailField = {
    required: "L'adresse e-mail est requise",
    pattern: {
        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message: "Le format de l'adresse email est incorrect"
    }
}

const mandatoryField = {
    required: "Le champ est requis",
}

const passwordField = {
    required: "Le mot de passe est obligatoire",
    minLength:{
        value: 8,
        message: "Le mot de passe doit faire 8 caractères minimum"
    },
    validate: {
        containsSpecial: v => /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/.test(v) || 'Le mot de passe doit contenir au moins 1 caractère spécial',
        containsUpper: v => /[A-Z]/.test(v) || 'Le mot de passe doit contenir au moins une lettre majuscule',
        containsLower: v => /[a-z]/.test(v) || 'Le mot de passe doit contenir au moins une lettre majuscule',
        containsNumber: v => /[0-9]/.test(v) || 'Le mot de passe doit contenir au moins un chiffre'
    }
}

export{
    emailField,
    mandatoryField,
    passwordField
}


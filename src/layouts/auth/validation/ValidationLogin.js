export const setLoding = () => {
    document.querySelector("#login").setAttribute('disabled', '');
    document.querySelector("#inputEmailAddress").setAttribute('disabled', '');
    document.querySelector("#inputChoosePassword").setAttribute('disabled', '');
    document.querySelector(".spinner-border").classList.remove("d-none")
    document.querySelector(".error").classList.add('d-none')
}
export const setError = () => {
    document.querySelector("#login").removeAttribute('disabled');
    document.querySelector("#inputEmailAddress").removeAttribute('disabled');
    document.querySelector("#inputChoosePassword").removeAttribute('disabled');
    document.querySelector(".spinner-border").classList.add('d-none')
    document.querySelector(".error").classList.remove('d-none')
    setTimeout(() => {
        document.querySelector(".error").classList.add('d-none')
    }, 4000)
}



export const setDisabled = () => {
    document.querySelector("#send").setAttribute("disabled", "");
    document.querySelector("#login").setAttribute("disabled", "");
    document.querySelector("#inputEmailid").setAttribute("disabled", "");
    document.querySelector(".spinner-border").classList.remove("d-none");
};

export const setSuccess = () => {
    document.querySelector(".spinner-border").classList.add("d-none");
    document.querySelector(".success").classList.remove("d-none");
    setTimeout(() => {
        document.querySelector(".success").classList.add("d-none");
    }, 7000);
};

export const setError = () => {
    document.querySelector("#send").removeAttribute("disabled");
    document.querySelector("#login").removeAttribute("disabled");
    document.querySelector("#inputEmailid").removeAttribute("disabled");
    document.querySelector(".spinner-border").classList.add("d-none");
    document.querySelector(".error").classList.remove("d-none");
    setTimeout(() => {
        document.querySelector(".error").classList.add("d-none");
    }, 7000);
}
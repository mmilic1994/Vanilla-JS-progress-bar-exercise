document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('form');
    let progressBar = document.querySelector('.progress');
    let inputFields = document.querySelectorAll('input');
    let textArea = document.querySelector('textarea');
    form.addEventListener("change", () => {
        let progressArray = [];
        for (let i = 0; i < inputFields.length; i++) {
            if (inputFields[i].value !== "") {
                progressArray.push("me");
            }
        }
        if (textArea.value !== "") {
            progressArray.push("me");
        }
        console.log(progressArray.length);
        progressBar.style.width = `${progressArray.length * 20}%`;
    })
})
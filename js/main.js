const form  = document.querySelector("#form");
const result = document.querySelector("#result")
const refresh = document.querySelector("#refresh")
const kvadrat = document.querySelector("#flexRadioDefault1")
const kub = document.querySelector("#flexRadioDefault2")
const x4 = document.querySelector("#flexRadioDefault3")
const x5 = document.querySelector("#flexRadioDefault4")
const x6 = document.querySelector("#flexRadioDefault5")
const x7 = document.querySelector("#flexRadioDefault6")
const x8 = document.querySelector("#flexRadioDefault7")
const x9 = document.querySelector("#flexRadioDefault8")
const x10 = document.querySelector("#flexRadioDefault9")



function addCalculator() {
    form.addEventListener("submit", (evt) => {
        evt.preventDefault()
        const value = evt.target[0].value
        if(kvadrat.checked){
            result.innerHTML = ''
            result.innerHTML += value * value
        }
        if(kub.checked){
            result.innerHTML = ''
            result.innerHTML += value * value *value
        }
        if(x4.checked){
            result.innerHTML = ''
            result.innerHTML += value * value * value * value
        }
        if(x5.checked){
            result.innerHTML = ''
            result.innerHTML += value * value * value * value *value
        }
        if(x6.checked){
            result.innerHTML = ''
            result.innerHTML += value * value * value * value * value * value
        }
        if(x7.checked){
            result.innerHTML = ''
            result.innerHTML += value * value * value * value * value * value * value
        }
        if(x8.checked){
            result.innerHTML = ''
            result.innerHTML += value * value * value * value * value * value * value * value
        }
        if(x9.checked){
            result.innerHTML = ''
            result.innerHTML += value * value * value * value * value * value * value * value * value
        }
        if(x10.checked){
            result.innerHTML = ''
            result.innerHTML += value * value * value * value * value * value * value * value * value * value
        }
        refresh.onclick = () => {
            document.location.reload()
        }
    })
}


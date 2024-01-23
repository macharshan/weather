const searchField = document.querySelector(`#searchField`)

const form = document.querySelector(`#form`)
const p = document.querySelector(`#errorText`)

const cityName = document.querySelector(`#cityName`)
const cityTemp = document.querySelector(`#cityTemperature`)
const windSpeed = document.querySelector(`#windSpeed`)
const humidity = document.querySelector(`#humidity`)

const result = document.querySelector(`#result`)

function weatherDisplay(){
    result.style.width = `fit-content`
    result.style.height = `fit-content`
}


document.querySelector(`#searchButton`)
.addEventListener(`click`, function(e){
    e.preventDefault();
    const searchValue = searchField.value
    if(p == ` `){
        form.removeChild()
    } else if(!searchValue || searchValue === ` `){
        p.textContent =`Enter a City Name`
        console.log(p)

        form.append(p)

    }
    else{
        const apiKey = `813fc5076aa54e6e81f586a3329dad03`

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${apiKey}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            weatherDisplay()
            
            // const addedText = document.querySelector(`#addedText`)
            // form.removeChild(addedText)


            cityName.textContent = `${data.name}`
            cityTemp.innerHTML = `<div>${Math.floor(data.main.temp)}&#8451</div>`
            windSpeed.innerHTML = `Wind<br>${data.wind.speed} km/hr`
            humidity.innerHTML = `humidity<br>${data.main.humidity} %`
            searchField.value = ``
            form.removeChild(p)
        })
        .catch((error) =>{
            console.log(error.message)
        })
    }
})
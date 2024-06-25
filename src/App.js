import { useState } from "react"
import axios from "axios"

function App() {
  var[input, setInput] = useState("")
  var[weather, setWeather] = useState("")
  var[temp, setTemp] = useState("")
  var[desc, setDesc] = useState("")

  function handleChange(event){
    setInput(event.target.value)
  }
  function handleButton(){
    var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=18c60530758db3707293d6287cf6d307`)
    weatherData.then(function(Data){
      setWeather(Data.data.weather[0].main)
      setTemp(Data.data.main.temp)
      setDesc(Data.data.weather[0].description)
    })
  }
  return (
    <div className="bg">
      <div className="container">
        <div>
          <h1>Weather Report</h1>
          <p>I can give you a weather report about your city !</p>
          <input className="input" onChange={handleChange} type="text" placeholder="Enter your City Name"></input>
          <br />
          <button onClick={handleButton} className="button">Get Report</button>
          <p><b>Weather:</b> {weather}</p>
          <p><b>Temperature:</b> {temp}</p>
          <p><b>Description</b> {desc}</p>
        </div>
      </div>
    </div>
  )
}

export default App

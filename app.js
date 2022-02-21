const adviceId = document.querySelector("#adviceId")
const advice = document.querySelector("#advice")
const button = document.querySelector("#shuffleButton")

async function fetchData() {
   let response = await fetch("https://api.adviceslip.com/advice")

   console.log(response.status)
   if (response.status === 200) {
      let data = await response.json()
      adviceId.innerText = `#${data.slip.id}`
      advice.innerText = data.slip.advice
   }
}

button.addEventListener("click", fetchData)

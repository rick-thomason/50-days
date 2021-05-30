const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  // fetch('https://icanhazdadjoke.com', config)
  //   .then((res) => {
  //     return res.json()
  //   })
  //   .then((data) => {
  //     jokeEl.innerHTML = data.joke
  //   })

  const res = await fetch('https://icanhazdadjoke.com', config)
  const data = await res.json()
  jokeEl.innerHTML = data.joke
}

generateJoke()

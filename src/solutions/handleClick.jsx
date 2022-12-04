import { useState } from 'react'

const useHandleJokeData = function () {
  const [joke, setJoke] = useState({})

  const getJoke = () => {
    fetch('https://official-joke-api.appspot.com/jokes/programming/random')
      .then((res) => res.json())
      .then((data) => setJoke(data[0]))
  }

  console.log(joke)
  return { joke, getJoke }
}

export default useHandleJokeData

import { robotImages } from '../assets'
import { useState } from 'react'
import Header from './Header'
const Jokes = () => {
  const [joke, setJoke] = useState({})
  const [updis, setUpdis] = useState('')
  const [pundis, setPundis] = useState('')

  const syn = window.speechSynthesis

  const getJoke = () => {
    fetch('https://official-joke-api.appspot.com/jokes/programming/random')
      .then((res) => res.json())
      .then((data) => setJoke(data[0]))
    const textSpeech = (words) => {
      const wordsSaid = new SpeechSynthesisUtterance(words)
      syn.speak(wordsSaid)
    }
    setUpdis(joke.setup)
    setPundis(joke.punchline)
    console.log(joke)
    const sayIt = (joke) => {
      textSpeech(joke.setup)
      textSpeech(joke.punchline)
    }
    sayIt(joke)
  }

  return (
    <div
      style={{
        maxWidth: '500px',
        // backgroundColor: 'pink',
      }}
      className='imgDiv'
    >
      <img
        src={robotImages.robot}
        alt=''
        style={{
          display: 'block',
          maxWidth: '300px',
          // backgroundColor: 'pink',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        id='imgDiv1'
      />

      <Header />

      <div
        style={{
          width: 'fit-content',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '20px',
        }}
      >
        <button
          onClick={() => {
            if (syn.speaking) syn.cancel()
            getJoke()
          }}
          style={{
            padding: '5px',
            borderRadius: '2px',
            border: 'none',
            background: 'rgb(12, 89, 242)',
            color: 'white',
            fontSize: '18px',
            fontWeight: '700',
          }}
        >
          TELL ME A JOKE
        </button>
      </div>
      <div className='textDiv'>
        <h1
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            // maxWidth: '400px',
            textAlign: 'center',
          }}
          id='textDiv1'
        >
          {updis}
        </h1>
        <h3
          style={{
            marginRight: 'auto',
            marginLeft: 'auto',
            // maxWidth: '400px',
            textAlign: 'center',
          }}
          id='textDiv2'
        >
          {pundis}
        </h3>
      </div>
    </div>
  )
}

export default Jokes

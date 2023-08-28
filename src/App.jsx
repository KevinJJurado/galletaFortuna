import { useState } from 'react'
import './App.css'
import BtnQuote from './components/BtnQuote'
import Quote from './components/Quote'
import phrases from  './utils/phrases.json'
import getRandomElemArray from './utils/getRandomElemArray'

function App() {

  const phraseRandom = getRandomElemArray(phrases)
  const numeberRandom = getRandomElemArray([ 1, 2, 3, 4])
  // console.log(numeberRandom)
  const [quote, setQuote] = useState(phraseRandom)
  
  const [numberBg, setNumberBg] = useState(numeberRandom)
  const bgStyle = {
    backgroundImage: `url(/fondo${numberBg}.jpg)`
  }

  return (
    <>
      <div className='container' style={bgStyle}>
        <h1 className='container__title'>Galleta de la fortuna</h1>
        <Quote phrase={quote}/>
        <BtnQuote 
          setQuote={setQuote}
          phrases={phrases} 
          setNumberBg={setNumberBg}
        />
      </div>
    </>
  )
}

export default App

import React from 'react'
import getRandomElemArray from '../utils/getRandomElemArray'

const BtnQuote = ({ setQuote, phrases, setNumberBg }) => {

  const handrandomPhrase = () => {
    setQuote(getRandomElemArray(phrases))
    setNumberBg(getRandomElemArray([1, 2, 3, 4]))
  }

  return (
    <button className='container__btn' onClick={handrandomPhrase}>Other Phrase</button>
  )
}

export default BtnQuote

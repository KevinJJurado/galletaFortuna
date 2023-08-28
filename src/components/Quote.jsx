import React from 'react'

const Quote = ({phrase}) => {
  return (
    <div className='container__phrase'>
      <img src="iconQuoteOpen.png" alt="" />
      <p>{phrase.phrase}</p>
      <img src="/iconQuote.png" alt="" />
    </div>
    
  )
}

export default Quote

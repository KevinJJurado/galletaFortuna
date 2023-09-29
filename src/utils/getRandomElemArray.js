const getRandomElemArray = (arr) => {
  const newArr = []
  let temp
  const numberRandom = Math.floor(Math.random() * arr.length)
  if (temp !== numberRandom) {
    return arr[numberRandom]
  }
  temp = numberRandom
}

export default getRandomElemArray
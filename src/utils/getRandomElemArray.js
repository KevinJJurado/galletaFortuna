const getRandomElemArray = (arr) => {
  const newArr = []
  let temp
  const numberRandom = Math.floor(Math.random() * arr.length)
  if (temp !== numberRandom) {
    console.log(numberRandom)
    return arr[numberRandom]
    console.log(arr[numberRandom])
  }
  temp = numberRandom
}

export default getRandomElemArray
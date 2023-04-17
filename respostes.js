exports.isHolaBot = (msg) => {
  const missatgeEnMinuscules = msg.content.toLowerCase()
  const regex = /hola/g
  return regex.test(missatgeEnMinuscules)
}

exports.isXD = (msg) => {
  const missatgeEnMinuscules = msg.content.toLowerCase()
  const regex = /xd/g
  return regex.test(missatgeEnMinuscules)
}

exports.isQue = (msg) => {
  const missatgeEnMinuscules = msg.content.toLowerCase()
  return missatgeEnMinuscules === 'q' || missatgeEnMinuscules === 'qué' || missatgeEnMinuscules === 'que' || missatgeEnMinuscules === 'que!' || missatgeEnMinuscules === 'qué!'
}

exports.isRa = (msg) => {
  const missatgeEnMinuscules = msg.content.toLowerCase()
  return missatgeEnMinuscules === 'ra'
}
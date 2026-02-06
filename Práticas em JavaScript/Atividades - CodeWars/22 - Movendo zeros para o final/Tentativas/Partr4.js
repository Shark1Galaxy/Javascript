function moveZeros(arr) {
  return [
    ...(arr.filter(numeroSemZero => numeroSemZero !== 0)),
    ...(arr.filter(numeroComZero => numeroComZero === 0))
  ]
}
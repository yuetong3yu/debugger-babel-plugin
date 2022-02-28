function demo1() {
  for (let i = 0; i < 1000; i++) {
    console.log(i)
  }
  return true
}

function demo2() {
  function inner() {
    console.log('123 123 123')
  }
  inner()
  return true
}

function demoFunc1() {
  for (let i = 0; i < 100; i++) {
    console.log(i)
  }
  return true
}

function demoFunc2() {
  function inner() {
    console.log('inner')
  }
  return true
}

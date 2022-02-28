function demo1() {
  console.time('demo1')
  for (let i = 0; i < 1000; i++) {
    console.log(i)
  }
  console.timeEnd('demo1')
  return true
}

function demo2() {
  console.time('demo2')
  function inner() {
    console.log('123 123 123')
  }
  inner()
  console.timeEnd('demo2')
  return true
}

function theBeatlesPlay (musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    array.push (musicians[i] + " plays " + instruments[i])
  }
  return array
}

function johnLennonFacts (array) {
  var i = 0
  while (i < array.length) {
    array[i] = array[i] + "!!!"
    i = i + 1
  }
  return array
}

function iLoveTheBeatles (num) {
  var array = []
  do {
    array.push ("I love the Beatles!")
    num = num + 1
  } while (num < 15)
  return array
}

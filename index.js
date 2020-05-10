// shout(string)
//     1) receives one argument and returns it in all caps

//   whisper(string)
//     2) receives one argument and returns it in all lowercase

//   logShout(string)
//     3) calls console.log() its one argument in all caps

//   logWhisper(string)
//     4) calls console.log() its one argument in all lowercase

//   sayHiToGrandma(string)
//     5) returns "I can't hear you!" if `string` is lowercase
//     6) returns "YES INDEED!" if `string` is uppercase
//     7) returns "I love you, too." if `string` is "I love you, Grandma."`

function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  var caps = string.toUpperCase();
  console.log(caps);
}

function logWhisper(string) {
  var small = string.toLowerCase();
  console.log(small);
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    console.log('I can't hear you!')
  }else if (string === string.toUpperCase()) {
      var upper = YES INDEED!
      return upper
  }else if (string === 'I love you, Grandma.') {
    var small = 'I love you, too.'
    return sh
  }
}


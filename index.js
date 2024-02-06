function shout(Hello) {
    return Hello.toUpperCase();

  }
  console.log(shout);
  
  function whisper(hello) {
    return hello.toLowerCase();

  }
  console.log(whisper);

  function logShout(string) {
    console.log(string.toUpperCase());
    return string.toUpperCase();

  }
  console.log(logShout);

  function logWhisper(string) {
    console.log(string.toLowerCase());
    return string.toLowerCase();

  }
  console.log(logWhisper);

  function sayHiToHeadphonedRoommate(string) {
    console.log(string);
    console.log(string.toUpperCase());
    console.log(string === string.toUpperCase());
if (string === string.toUpperCase()){
    return "YES INDEED!";
}
if (string === string.toLowerCase()){
    return "I can't hear you!";
}
if(string === "Let's have dinner together!") {
    return "I would love to!";
}

}
console.log(sayHiToHeadphonedRoommate);
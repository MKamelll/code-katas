/*
  this function takes a string that has an 
  embedded song title within the 'WUB' keyword
  and return the actual song title
*/

function songDecoder(song){
  const key = 'WUB';
  let songDecValue = song.toUpperCase().split(key);
  songDecValue = songDecValue.filter((word) => word.length);
  songDecValue = songDecValue.join(' ');
  return songDecValue;
}

// test
const songInput = 'WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB';
console.log(songDecoder(songInput));
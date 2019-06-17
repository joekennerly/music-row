// JumpStop Records works with Funk and Rap artists.
let jumpStop = []
// Chatten Records works with Country and Bluegrass artists.
let chattenRecords = []
// Polar Records works with Pop artists.
let polarRecords = []

// Make object with provided arguments
function createArtist(name, genre, age) {
  return {
    name,
    genre,
    age
  }
}

// Collect each obj into an array
const allArtists = [
  createArtist("Bruce Atikins", "Country", 23),
  createArtist("Jensen Brown", "Pop", 20),
  createArtist("Dre Funkz", "Funk", 25),
  createArtist("Dusta Grimes", "Rap", 21),
  createArtist("Bartholomew Danielson", "Bluegrass", 23),
  createArtist("Avilee Dallas", "Country", 19),
  createArtist("Austin Kinkaid", "Pop", 22),
  createArtist("Loyonce Branis", "Rap", 27)
]

// Loop over array and sort by genre
allArtists.forEach(artist => {
  if (artist.genre === "Funk" || artist.genre === "Rap") {
    jumpStop.push(artist)
  }
  if (artist.genre === "Country" || artist.genre === "Bluegrass") {
    chattenRecords.push(artist)
  }
  if (artist.genre === "Pop") {
    polarRecords.push(artist)
  }
})

console.log('jumpstop', jumpStop);
console.log('chatten', chattenRecords);
console.log('polar', polarRecords);

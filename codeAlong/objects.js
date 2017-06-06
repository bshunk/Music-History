// const song = {
// 	title: "Private Idaho", 
// 	artist: "The B-52s",
// 	plays: 120,
// 	album: "Wild Planet",
// 	bandMembers: [
// 	{name:"Fred", roles: {vocals: "lead", instrument: null} }
// 	// {"Cindy", roles: {vocals: "backup", instrument: null} }
// 	// {"Ricky",
// 	// {"Keith",
// 	// {"Kate"}
// 	],
// 	makeSongString: function() {
// 		return `"${song.title}" is from the album "${song.album}" by ${song.artist}`
// 	}	
// };

const song = {
	title: "Party Up",
	artist: "DMX",
	plays: 2000,
	album: "Run With The Wolf",
	bandMembers: [
	{name:"DMX", roles: {vocals: "lead", instrument: null} }
	// {"Rock",
	// {"XZibit",
	// {"DJ Khaled"}
	],
	makeSongString: function() {
		return `"${song.title}" is from the alumb "${song.album}" by ${song.artist}`
	}
};

console.log("The jam", song.makeSongString());

// const member = song.bandMembers[0];
// const vocalRole = member.roles.vocals;
// if(vocalRole) {
// 	console.log(`$member.name} was the ${vocalRole} singer on this track`);
// } else {
// 	console.log(`${member.name} did not sing on this track`);
// };

const member = song.bandMembers[0];
const vocalRole = member.roles.vocals;
if(vocalRole) {
	console.log(`${member.name} was the ${vocalRole} singer on this track` );
} else {
	console.log(`${member.name} did not sing on this track`);
};


// console.log("Fred's vocals", song.bandMembers[0].roles.vocals);
// song["albumCoverColor"] = "red";
// console.log("the artist", song["artist"]);


console.log("DMX crushed it on the", song.bandMembers[0].roles.vocals);
song["albumCoverColor"] = "red";
console.log("the artist?", song["artist"]);

// const record = "album";
// console.log("album?", song[record]);
// console.log(song.makeSongString());console.log("Fred's vocals", song.bandMembers[0].roles.vocals);
// song["albumCoverColor"] = "red";
// console.log("the artist", song["artist"]);
// const record = "album";

const record = "album";

console.log("the album?", song[record]);

console.log(song.makeSongString());console.log("DMX's vocals", song.bandMembers[0].roles.vocals);

song["alumbCoverColor"] = "red";

console.log("the artist is the legend", song["artist"]);


// console.log("album?", song[record]);
// console.log(song.makeSongString());

console.log("album?", song[record]);
console.log(song.makeSongString());





























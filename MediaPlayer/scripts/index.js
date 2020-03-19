/**
 * @copyright: (C) 2020 Vancouver Film School.  All Rights Reserved.
 * @author:    Your Name {@link mailto:ddXXname@vfs.com}
 * @version:   1.0
 */
'use strict';

import App from './App.js';

let thePlayList = [];

class Track {

    constructor( songTitle, album, mediaUri ) {

        this.songTitle = songTitle;
        this.albumImage = "url/album/image.jpg";
        this.name = "Said the Whale";
        this.album = "Mother";
        this.year = "2013";
        this.duration = "00:00";
        this.media = "../songdata/mother.mp3";
    }
}

let myTrack = new Track("Mother", "Mother", "../songdata/mother.mp3");
let theSecondTrack = new Track("Paralyzer", "???", "../songdata/paralyser.mp3");

let track = {
    songTitle:"Mother",
    albumImage: "url/album/image.jpg",
    name: "Said the Whale",
    album: "Mother",
    year: "2013",
    duration: "00:00",
    media: "../songdata/mother.mp3",
}

const MAX_SONGS = 50;

for (let i = 0; i < MAX_SONGS; i++) {

    thePlayList[i] = { ...track };
}

//for (let j = 0; j < thePlayList.length; j++) {
for ( let j in thePlayList) {
//for (let currentSong of thePlayList) {
    let currentSong = thePlayList[ j ];
    // do some magic with currentSong to play it in HTML5
    playCurrentSong( currentSong );
}

let i = 0;
let done = false;
let playing = false;
while (!done && !playing) {

    if (!playing) {

        let currentSong = thePlayList[i++];
    }
    playing = true;
    playCurrentSong( currentSong );
}


function playCurrentSong( theTrack ) {

    // go get some code from a library to look up the uri and play the mp3
    return currentDuration( theTrack );
}

function currentDuration( theTrack ) {

    let currentDuration = theTrack.duration - theTrack.progress;
    return currentDuration;
}



(function Main() {

    // Wait for the DOM to finish loading (we don't want to reference things that don't exist)
    document.addEventListener('DOMContentLoaded', event => {

        // Find out what we are running on
        const MOBILE = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test( navigator.userAgent );

        // Init the app and run it
        let app = new App( MOBILE );
        app.run()
    })
})()


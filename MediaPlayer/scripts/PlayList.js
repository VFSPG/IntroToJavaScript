/**
 * @copyright: (C) 2020 Scott Henshaw.  All Rights Reserved.
 * @author:    Scott Henshaw {@link mailto:ddXXname@vfs.com}
 * @version:   1.0
 */
'use strict';

import Track from "./Track.js";

export default class PlayList {

    constructor(){
        this.playList = [];  // a list of Track objects
        this.currentSong = new Track();
    }

    first() {
        this.currentSong = this.playList[0];
    }

    populate() {
        // somehow make a list of tracks

        /*
        ???

        this.currentTrack = new Track("Mother", "Mother", "../songdata/mother.mp3");
        let theSecondTrack = new Track("Paralyzer", "???", "../songdata/paralyser.mp3");
        */
    }

    playCurrentSong() {

        // go get some code from a library to look up the uri and play the mp3
        this.currentSong.play();
        return this.currentSong.currentDuration();
    }
}


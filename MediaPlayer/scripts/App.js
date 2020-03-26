/**
 * @copyright: (C) 2020 Vancouver Film School.  All Rights Reserved.
 * @author:    Your Name {@link mailto:ddXXname@vfs.com}
 * @version:   1.0
 */
'use strict';

import PlayList from './PlayList.js';

export default class App {

    constructor(device = 'web') {

        // build a playlist
        this.thePlayList = new PlayList();
        this.thePlayList.populate();
        this.currentTrack = this.thePlayList.first();

        this.currentSongName = "Woo hoo";

        // handle user input
        document.querySelector("#play")
            .addEventListener("click", event => this.updateCurrentTrack("Pyromania", "Play Pressed"));

        document.querySelector("#stop")
            .addEventListener("click",  event => this.handleStop( event ) );
    }

    handleStop( event ) {

        this.updateCurrentTrack("Hello", "Stop pressed");
        // Dont change name of the song & stop playing
    }

    updateCurrentTrack( songName = "", userMsg = "Nothing happened") {

        this.currentSongName = songName;
        document.querySelector("#virtual-console").innerHTML = userMsg
        console.log( userMsg );
        document.querySelector("#track-name").value = this.currentSongName;
    }

    run() {

        this.updateCurrentTrack();
        // just waiting around for something to happen...
    }

}
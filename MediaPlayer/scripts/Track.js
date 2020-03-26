/**
 * @copyright: (C) 2020 Scott Henshaw.  All Rights Reserved.
 * @author:    Scott Henshaw {@link mailto:ddXXname@vfs.com}
 * @version:   1.0
 */
'use strict';

export default class Track {

    constructor( songTitle, album, mediaUri ) {

        this.songTitle = songTitle;
        this.albumImage = "url/album/image.jpg";
        this.name = "Said the Whale";
        this.album = "Mother";
        this.year = "2013";
        this.duration = "00:00";
        this.media = "../songdata/mother.mp3";
    }

    play() {}

    currentDuration() {

        let currentDuration = this.duration - this.progress;
        return currentDuration;
    }
}

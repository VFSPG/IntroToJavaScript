/**
 * @copyright: (C) 2020 Vancouver Film School.  All Rights Reserved.
 * @savannah:    Your Name {@link mailto:dd47savannah@vfs.com}
 * @version:   1.0
 */
'use strict';

import App from './App.js';

const AM = 0;
const PM = 1;
const EVE = 2;
const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let theSchedule = []; // list of courses
let course ={
    timeslot: AM, // AM, PM, EVE
    name: "JavaScript",
    place: "At Home" ,
    instructor: "The best ever" ,
};

function generateEmptySchedule() {

    let aSchedule = []; // list of my courses booyeah
    for (let i in DAYS) {
        aSchedule[DAYS[i] ] = [];
    }

    return aSchedule;
}

let savannahsSchedule = generateEmptySchedule();
    

(function Main(){

    // Wait for the DOM to finish loading (we don't want to reference things that don't exist)
    document.addEventListener('DOMContentLoaded', event => {

        // Init the app and run it
        let app = new App();
        app.run()
    })
})()


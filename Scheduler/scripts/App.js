/**
 * @copyright: (C) 2020 Scott Henshaw.  All Rights Reserved.
 * @author:    Scott Henshaw {@link mailto:shenshaw@vfs.com}
 * @version:   1.0
 */
'use strict';

import Schedule from "./Schedule.js";
import Course from "./Course.js";

// export ... = something that can be imported to another module
// ... default = the default thing to export can be imported without {}
//      ... class = an Object definition (not an instance of an Object), we can make more
export default class App {

	constructor() {

        /*
        <table>
            <tbody>
                <tr><td></td><td>Monday</td><td>Tuesday</td><td>Wednesday</td><td>Thursday</td><td>Friday</td></tr>
                <tr><td>AM</td><td id="monday-am"></td><td></td><td></td><td></td><td></td></tr>
                <tr><td>PM</td><td></td><td></td><td></td><td></td><td></td></tr>
                <tr><td>EVE</td><td></td><td></td><td></td><td></td><td></td></tr>
            </tbody>
        </table>
        */
        let daysOfTheWeek = ['sunday','monday','tuesday','wednesday','thursday','friday'];
        let el = document.querySelector("#schedule-grid");

        let markup = "<table>";   // ""  | ''  | ``
        //let markup = '<table>';
        //let markup = `<table>`;
        markup += "<tr><td></td>";
        for (let day of daysOfTheWeek) {
            markup += `<td id="${day}">${day}</td>`;
        }
        markup += "</tr>";
        for (let timeslot of ['am','pm','eve']) {
            markup += `<tr><td>${timeslot}</td>`;

            for (let day of daysOfTheWeek) {

                markup += `<td id="${day}-${timeslot}"></td>`;
            }
            markup += "</tr>";
        }
        markup += "</tbody></table>";
        el.innerHTML = markup;

        // Initialize any app variables or code we will need
        this.mySchedule = new Schedule();
        let javaScriptCourse = new Course('JavaScript & jQuery', 0, "Thursaday");
        let designInterface = new Course('Interface Design', 2, "Wednesday");

        javaScriptCourse.setLocation("Home");
        javaScriptCourse.assignInstructor("Scott");
/*
        let scottsSchedule = generateEmptySchedule();
        let mardiasSchedule = generateEmptySchedule();
*/
        // Initialize any event handlers
    }

    add( p1, p2 = 0 ) {

        let temp = p1 + p2;
        return temp;
    }

	run() {
        // just waiting around for something to happen...
    }
}

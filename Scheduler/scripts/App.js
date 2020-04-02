/**
 * @copyright: (C) 2020 Scott Henshaw.  All Rights Reserved.
 * @author:    Scott Henshaw {@link mailto:shenshaw@vfs.com}
 * @version:   1.0
 */
'use strict';

import Schedule from "./Schedule.js"
import Course from "./Course.js"

// export ... = something that can be imported to another module
// ... default = the default thing to export can be imported without {}
//      ... class = an Object definition (not an instance of an Object), we can make more
export default class App {

	constructor() {
        this.daysOfTheWeek = ['sunday','monday','tuesday','wednesday','thursday','friday'];
        document.querySelector("#schedule-grid")
            .innerHTML = this.generateSchedule( this.daysOfTheWeek );

        // Initialize any event handlers
    }

    generateSchedule( daysOfTheWeek ) {
        /*  Builds this ...
        <table>
            <tbody>
                <tr><td></td><td>Monday</td><td>Tuesday</td><td>Wednesday</td><td>Thursday</td><td>Friday</td></tr>
                <tr><td>AM</td><td id="monday-am"></td><td></td><td></td><td></td><td></td></tr>
                <tr><td>PM</td><td></td><td></td><td></td><td></td><td></td></tr>
                <tr><td>EVE</td><td></td><td></td><td></td><td></td><td></td></tr>
            </tbody>
        </table>
        */
        let markup = "<table>";   // ""  | ''  | ``
        markup += "<tr><td></td>";
        for (let day of daysOfTheWeek) {
            markup += `<td id="${day}">${day}</td>`;
        }
        markup += "</tr>";
        for (let timeslot of ['am','pm','eve']) {

            markup += this.generateScheduleRow( daysOfTheWeek, timeslot );
        }
        markup += "</tbody></table>";
        return markup
    }

    generateScheduleRow( daysOfTheWeek, timeslot ) {
        /*
        <tr><td>AM</td><td id="monday-am"></td><td></td><td></td><td></td><td></td></tr>
        */
        let markup = `<tr><td>${timeslot}</td>`;
        for (let day of daysOfTheWeek) {

            markup += `<td id="${day}-${timeslot}"></td>`;
        }
        markup += "</tr>";

        return markup
    }

    // Initialize any app variables or code we will need in the constructor
    /*
    this.mySchedule = new Schedule();
    let javaScriptCourse = new Course('JavaScript & jQuery', 0, "Thursday");
    let designInterface = new Course('Interface Design', 2, "Wednesday");

    javaScriptCourse.setLocation("Home");
    javaScriptCourse.assignInstructor("Scott");
    /*
    let scottsSchedule = generateEmptySchedule();
    let mardiasSchedule = generateEmptySchedule();
    */

    run() {
        // just waiting around for something to happen...
    }
}

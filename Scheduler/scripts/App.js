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
        $("#schedule-grid").html( this.generateSchedule( this.daysOfTheWeek ));

        $("#term-list").html( this.generateTermGrid( new Date( 2020, 4, 4 )));

        this.todoItem = 0;
        this.eventMessage = "event handled";

        // Initialize any event handlers
        $("#todo-add-item-button").on("click", event => this.addTodoItem( event ));
        $("#assign-add").on("submit", event => this.addAssignment( event ));

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
    }

    addAssignment( event ) {
        event.preventDefault();

        // Vanilla JavaScript
        let program = document.forms["assign-add"]["assign-program"].value;
        let term = document.forms["assign-add"]["assign-term"].value;
        let course = document.forms["assign-add"]["assign-course"].value;
        let name = document.forms["assign-add"]["assign-name"].value;

        // jQuery
        let formDataList = $("#assign-add").serializeArray();
        /*
        [
            { name:"assign-program", value:"DD"},
            { name:"assign-term", value:"1"},
            ...
        ]
        */
        let content = `${program}47 T${term} ${course}: ${name}`;

         // create new item markup
         let markup = `<li class="todo-item">`;
         markup +=        `<input type="checkbox" name="assign-done" value="false">`
         markup +=        `<span class="todo-text">${content}</span>`
         markup +=    `</li>`;

         // append item markup to existing list
         $(".assign-list").append( markup );
    }

    addTodoItem( event ) {
        // get the value of the text input
        let content = $('input[name="new-item"]').val();

        // create new item markup
        let markup = `<li id="item-${this.todoItem}" class="todo-item">`;
        markup +=        `<input type="checkbox" name="item-done" value="false">`
        markup +=        `<span class="todo-text">${content}</span>`
        markup +=    `</li>`;

        // append item markup to existing list
        $(".todo-list").append( markup );
        this.todoItem++
    }

    generateSchedule( daysOfTheWeek ) {
        /*  Builds this ... */
        let markup = "<table>";   // ""  | ''  | ``
        markup += `<tr><td class="schedule-cell"></td>`;
        for (let day of daysOfTheWeek) {
            markup += `<td id="${day}" class="schedule-cell">${day}</td>`;
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
        let markup = `<tr><td class="schedule-cell">${timeslot}</td>`;
        for (let day of daysOfTheWeek) {

            markup += `<td id="${day}-${timeslot}" class="schedule-cell"></td>`;
        }
        markup += "</tr>";
        return markup
    }

    generateTermGrid( startDate = new Date()) {
        /*
        <tr>
            <td class="term-cell">W1</td>
            <td class="term-cell-mid"> - </td>
            <td>May 4 - May 9</td>
        </tr>
        */
        let startWeek = new Date( startDate.valueOf());
        let endWeek = new Date( startWeek.valueOf());
        endWeek.setDate( startWeek.getDate() + 5 );

        let markup = `<table><tbody>`;
        for (let week = 1; week < 9; week++) {

            let weekRange = `${this.formatDate( startWeek )} - ${this.formatDate( endWeek )}`;
            markup +=    `<tr>`;
            markup +=        `<td class="term-cell">W${week}</td>`;
            markup +=        `<td class="term-cell-mid"> - </td>`;
            markup +=        `<td class="term-date">${weekRange}</td>`;
            markup +=    `</tr>`;
            startWeek.setDate( startWeek.getDate() + 7 );
            endWeek.value = startWeek.valueOf();
            endWeek.setDate( startWeek.getDate() + 5 );
        }
        markup +=    `</tbody></table>`;

        // append item markup to existing list
        return markup
    }

    formatDate( aDate ) {
        // return the date as a string "MonthName dd"
        const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        return `${month[aDate.getMonth()]} ${aDate.getDate()}`;
    }

    run() {
        // just waiting around for something to happen...
    }
}

/**
 * @copyright: (C) 2020 Vancouver Film School.  All Rights Reserved.
 * @author:    Your Name {@link mailto:ddXXname@vfs.com}
 * @version:   1.0
 */
'use strict';

import App from './App.js';

(function Main(){

    // Wait for the DOM to finish loading (we don't want to reference things that don't exist)
    $(document).ready( event => {

        // Init the app and run it
        let app = new App();
        app.run()
    })
})()


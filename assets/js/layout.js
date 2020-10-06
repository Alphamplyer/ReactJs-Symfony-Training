'use strict';

import $ from 'jquery';
import 'whatwg-fetch'
import 'promise-polyfill/src/polyfill'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import '../css/main.scss';

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

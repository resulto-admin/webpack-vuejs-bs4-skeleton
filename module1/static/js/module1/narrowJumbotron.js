var Vue = require('vue');
var helloWorld = require('module1/libs/helloworld');

// Custom Components
var SubHeading = require('module1/components/subheading.vue');
var DataTables = require('module1/components/datatables.vue');

// Bootstrap Component
// Imported as ES6 because require() does not seem to work :'('
import vsAlert from 'vuestrap-base-components/src/components/alert';

new Vue({
    el: '#narrow-jumbotron',
    data: window.context,
    components: {
        'vs-alert': vsAlert,
        'subheading': SubHeading,
        'vs-datatables': DataTables,
    }
});

console.log(helloWorld('Bob King III'));

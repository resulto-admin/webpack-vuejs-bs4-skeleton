var Vue = require('vue');
var helloWorld = require('module1/libs/helloworld');

// Custom Components
var SubHeading = require('module1/components/subheading.vue');

// Bootstrap Component
// Imported as ES6 because require() does not seem to work :'('
import vsAlert from 'vuestrap-base-components/src/components/alert';

new Vue({
    el: '#narrow-jumbotron',
    components: {
        'vs-alert': vsAlert,
        'subheading': SubHeading,
    }
});

console.log(helloWorld('Bob King III'));

webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _alert = __webpack_require__(2);

	var _alert2 = _interopRequireDefault(_alert);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Vue = __webpack_require__(1);
	var helloWorld = __webpack_require__(4);

	// Custom Components
	var SubHeading = __webpack_require__(5);
	var DataTables = __webpack_require__(8);

	// Bootstrap Component
	// Imported as ES6 because require() does not seem to work :'('


	new Vue({
	    el: '#narrow-jumbotron',
	    data: window.context,
	    components: {
	        'vs-alert': _alert2.default,
	        'subheading': SubHeading,
	        'vs-datatables': DataTables
	    }
	});

	console.log(helloWorld('Bob King III'));

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _alert = __webpack_require__(3);

	var _alert2 = _interopRequireDefault(_alert);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// export component object
	exports.default = {
	  template: _alert2.default,
	  replace: true,
	  computed: {
	    alertState: function alertState() {
	      return !this.state || this.state === 'default' ? 'alert-success' : 'alert-' + this.state;
	    },

	    alertClass: function alertClass() {
	      var dismissible = this.dismissible ? 'alert-dismissible' : '';
	      return 'alert ' + this.alertState + ' ' + dismissible + ' fade in';
	    }
	  },
	  props: {
	    show: {
	      type: Boolean,
	      default: false,
	      required: true
	    },
	    state: {
	      type: String,
	      default: 'success'
	    },
	    dismissible: {
	      type: Boolean,
	      default: false
	    }
	  },
	  methods: {
	    dismiss: function dismiss() {
	      // hide an alert
	      this.show = false;
	      // Dispatch an event from the current vm that propagates all the way up to its $root
	      this.$dispatch('dismissed::alert');
	    }
	  }
	}; // import dependencies

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"alertClass\" role=\"alert\" v-show=\"show\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" v-if=\"dismissible\" v-on:click.stop.prevent=\"dismiss\">\n        <span aria-hidden=\"true\">&times;</span>\n        <span class=\"sr-only\">Close</span>\n    </button>\n    <slot></slot>\n</div>\n";

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	var helloWorld = function helloWorld(param1) {
	    return "Hello " + param1;
	};

	module.exports = helloWorld;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(6)

	/* template */
	var __vue_template__ = __webpack_require__(7)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] subheading.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 6 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//

	var component = {
	    props: ['title', 'description']
	};

	module.exports = component;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', [_h('h4', [_s(title)]), " ", _h('p', [_s(description)])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1", module.exports)
	  }
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var template = __webpack_require__(9);

	var $ = __webpack_require__(10);

	var component = {
	    template: template,
	    props: ['options', 'status', 'data'],
	    mounted: function mounted() {
	        this.$nextTick(function () {
	            // Equivalent to domReady/jquery.ready
	            this.dataTable = $(this.$el).DataTable(this.options);
	            this.loadData();
	        });
	    },
	    watch: {
	        data: {
	            handler: function handler(value, old_value) {
	                this.loadData();
	            },
	            immediate: true
	        }
	    },
	    methods: {
	        loadData: function loadData() {
	            if (!this.dataTable) {
	                return;
	            }
	            this.dataTable.clear().rows.add(this.data).draw();
	        }
	    }
	};

	module.exports = component;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<table class=\"table table-striped table-bordered\" cellspacing=\"0\" width=\"100%\">\n    <slot></slot>\n</table>\n";

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ }
]);
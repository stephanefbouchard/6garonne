webpackJsonp([4],{

/***/ 805:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	// import { injectReducer } from '../../../../store/reducers'
	
	exports.default = function (store) {
	  return {
	    path: ':projectname',
	    /*  Async getComponent is only invoked when route matches   */
	    getComponent: function getComponent(nextState, cb) {
	      /*  Webpack - use 'require.ensure' to create a split point
	          and embed an async module loader (jsonp) when bundling   */
	      __webpack_require__.e/* nsure */(5, function (require) {
	        /*  Webpack - use require callback to define
	            dependencies for bundling   */
	        var Project = __webpack_require__(806).default;
	        // const reducer = require('./modules/reducer').default
	
	        // injectReducer(store, { key: 'tabs', reducer })
	
	        /*  Return getComponent   */
	        cb(null, Project);
	
	        /* Webpack named bundle   */
	      });
	    }
	  };
	};

/***/ }

});
//# sourceMappingURL=4.4.613a65e282b66a2a6c63.js.map
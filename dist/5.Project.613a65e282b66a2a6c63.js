webpackJsonp([5],{

/***/ 806:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _stringify = __webpack_require__(807);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _getPrototypeOf = __webpack_require__(174);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(200);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(201);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(205);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(252);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _dec, _dec2, _class, _class2, _temp;
	
	// redux/firebase
	
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ProjectContainer = __webpack_require__(809);
	
	var _ProjectContainer2 = _interopRequireDefault(_ProjectContainer);
	
	var _CircularProgress = __webpack_require__(720);
	
	var _CircularProgress2 = _interopRequireDefault(_CircularProgress);
	
	var _reactRedux = __webpack_require__(323);
	
	var _reactReduxFirebase = __webpack_require__(426);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var isLoaded = _reactReduxFirebase.helpers.isLoaded,
	    dataToJS = _reactReduxFirebase.helpers.dataToJS;
	var Project = (_dec = (0, _reactReduxFirebase.firebase)(
	// Get paths from firebase
	function (_ref) {
	  var params = _ref.params;
	  return ['projects/' + params.projectname];
	}), _dec2 = (0, _reactRedux.connect)(
	// Map state to props
	function (_ref2, _ref3) {
	  var firebase = _ref2.firebase;
	  var params = _ref3.params;
	  return {
	    project: dataToJS(firebase, 'projects/' + params.projectname)
	  };
	}), _dec(_class = _dec2(_class = (_temp = _class2 = function (_Component) {
	  (0, _inherits3.default)(Project, _Component);
	
	  function Project() {
	    (0, _classCallCheck3.default)(this, Project);
	    return (0, _possibleConstructorReturn3.default)(this, (Project.__proto__ || (0, _getPrototypeOf2.default)(Project)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Project, [{
	    key: 'render',
	    value: function render() {
	      var project = this.props.project;
	
	
	      if (!isLoaded(project)) {
	        return _react2.default.createElement(
	          'div',
	          { className: _ProjectContainer2.default['progress'] },
	          _react2.default.createElement(_CircularProgress2.default, null)
	        );
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { className: _ProjectContainer2.default['container'] },
	        _react2.default.createElement(
	          'h2',
	          null,
	          'Project Container'
	        ),
	        _react2.default.createElement(
	          'pre',
	          null,
	          (0, _stringify2.default)(project, null, 2)
	        )
	      );
	    }
	  }]);
	  return Project;
	}(_react.Component), _class2.contextTypes = {
	  router: _react2.default.PropTypes.object.isRequired
	}, _class2.propTypes = {
	  project: _react.PropTypes.object,
	  params: _react.PropTypes.object.isRequired,
	  children: _react.PropTypes.object
	}, _temp)) || _class) || _class);
	exports.default = Project;

/***/ },

/***/ 807:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(808), __esModule: true };

/***/ },

/***/ 808:
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(187)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },

/***/ 809:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(810);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(636)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(810, function() {
				var newContent = __webpack_require__(810);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 810:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(635)();
	// imports
	
	
	// module
	exports.push([module.id, ".ProjectContainer__flex___2KpL-,.ProjectContainer__flex-column___1WU2p,.ProjectContainer__flex-column-center___1jrPD,.ProjectContainer__flex-row___IllzX,.ProjectContainer__flex-row-center___39yNf,.ProjectContainer__progress___2VQ9C{display:flex;display:-ms-flexbox;display:-webkit-flex}.ProjectContainer__flex-column___1WU2p,.ProjectContainer__flex-column-center___1jrPD{-ms-flex-direction:column;flex-direction:column}.ProjectContainer__flex-column-center___1jrPD{-ms-flex-align:center;align-items:center}.ProjectContainer__flex-row___IllzX,.ProjectContainer__flex-row-center___39yNf,.ProjectContainer__progress___2VQ9C{-ms-flex-direction:row;flex-direction:row}.ProjectContainer__flex-row-center___39yNf,.ProjectContainer__progress___2VQ9C{-ms-flex-pack:center;justify-content:center}.ProjectContainer__progress___2VQ9C{-ms-flex-align:center;align-items:center;padding-top:8rem}", "", {"version":3,"sources":["/./src/routes/Projects/routes/Project/containers/src/styles/_standard-classes.scss","/./src/routes/Projects/routes/Project/containers/src/routes/Projects/routes/Project/containers/ProjectContainer.scss"],"names":[],"mappings":"AAAA,wOACE,aAAc,oBAGO,oBACC,CACvB,qFAGC,0BAAA,qBAAuB,CAFzB,8CAMI,sBAAA,kBAAoB,CACrB,mHAID,uBAAA,kBAAoB,CAFtB,+EAMI,qBAAA,sBAAwB,CACzB,oCCnBD,sBAAA,mBAAoB,gBACF,CACnB","file":"ProjectContainer.scss","sourcesContent":[".flex {\n  display: flex;             /* NEW, Spec - Opera 12.1, Firefox 20+ */\n  display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */\n  display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */\n  display: -ms-flexbox;      /* TWEENER - IE 10 */\n  display: -webkit-flex;     /* NEW - Chrome */\n}\n.flex-column {\n  @extend .flex;\n  flex-direction: column;\n  &-center {\n    @extend .flex;\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.flex-row {\n  @extend .flex;\n  flex-direction: row;\n  &-center {\n    @extend .flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n}\n","@import 'base';\n\n.progress {\n  @extend .flex-row-center;\n  align-items: center;\n  padding-top: 8rem;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"flex": "ProjectContainer__flex___2KpL-",
		"flex-column": "ProjectContainer__flex-column___1WU2p",
		"flex-column-center": "ProjectContainer__flex-column-center___1jrPD",
		"flex-row": "ProjectContainer__flex-row___IllzX",
		"flex-row-center": "ProjectContainer__flex-row-center___39yNf",
		"progress": "ProjectContainer__progress___2VQ9C"
	};

/***/ }

});
//# sourceMappingURL=5.Project.613a65e282b66a2a6c63.js.map
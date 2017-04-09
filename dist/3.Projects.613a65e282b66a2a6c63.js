webpackJsonp([3],{

/***/ 766:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _LoadingSpinner = __webpack_require__(767);
	
	var _LoadingSpinner2 = _interopRequireDefault(_LoadingSpinner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _LoadingSpinner2.default;

/***/ },

/***/ 767:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LoadingSpinner = undefined;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _CircularProgress = __webpack_require__(720);
	
	var _CircularProgress2 = _interopRequireDefault(_CircularProgress);
	
	var _LoadingSpinner = __webpack_require__(768);
	
	var _LoadingSpinner2 = _interopRequireDefault(_LoadingSpinner);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var LoadingSpinner = exports.LoadingSpinner = function LoadingSpinner(_ref) {
	  var size = _ref.size;
	  return _react2.default.createElement(
	    'div',
	    { className: _LoadingSpinner2.default.container },
	    _react2.default.createElement(
	      'div',
	      { className: _LoadingSpinner2.default.progress },
	      _react2.default.createElement(_CircularProgress2.default, { mode: 'indeterminate', size: size || 80 })
	    )
	  );
	};
	
	LoadingSpinner.propTypes = {
	  size: _react.PropTypes.number
	};
	
	exports.default = LoadingSpinner;

/***/ },

/***/ 768:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(769);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(636)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(769, function() {
				var newContent = __webpack_require__(769);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 769:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(635)();
	// imports
	
	
	// module
	exports.push([module.id, ".LoadingSpinner__container___2RCDF,.LoadingSpinner__flex___3_WWY,.LoadingSpinner__flex-column___7pU45,.LoadingSpinner__flex-column-center___i6D0c,.LoadingSpinner__flex-row___2emXl,.LoadingSpinner__flex-row-center___1UmZG,.LoadingSpinner__progress___3WiaW{display:flex;display:-ms-flexbox;display:-webkit-flex}.LoadingSpinner__container___2RCDF,.LoadingSpinner__flex-column___7pU45,.LoadingSpinner__flex-column-center___i6D0c{-ms-flex-direction:column;flex-direction:column}.LoadingSpinner__container___2RCDF,.LoadingSpinner__flex-column-center___i6D0c{-ms-flex-align:center;align-items:center}.LoadingSpinner__flex-row___2emXl,.LoadingSpinner__flex-row-center___1UmZG,.LoadingSpinner__progress___3WiaW{-ms-flex-direction:row;flex-direction:row}.LoadingSpinner__flex-row-center___1UmZG,.LoadingSpinner__progress___3WiaW{-ms-flex-pack:center;justify-content:center}.LoadingSpinner__container___2RCDF{-ms-flex-pack:start;justify-content:flex-start;padding-top:7rem;height:100%}.LoadingSpinner__progress___3WiaW{-ms-flex-align:center;align-items:center;height:50%}", "", {"version":3,"sources":["/./src/components/LoadingSpinner/src/styles/_standard-classes.scss","/./src/components/LoadingSpinner/src/components/LoadingSpinner/LoadingSpinner.scss"],"names":[],"mappings":"AAAA,+PACE,aAAc,oBAGO,oBACC,CACvB,oHAGC,0BAAA,qBAAuB,CAFzB,+EAMI,sBAAA,kBAAoB,CACrB,6GAID,uBAAA,kBAAoB,CAFtB,2EAMI,qBAAA,sBAAwB,CACzB,mCCnBD,oBAAA,2BAA4B,iBACV,WACL,CACd,kCAGC,sBAAA,mBAAoB,UACR,CACb","file":"LoadingSpinner.scss","sourcesContent":[".flex {\n  display: flex;             /* NEW, Spec - Opera 12.1, Firefox 20+ */\n  display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */\n  display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */\n  display: -ms-flexbox;      /* TWEENER - IE 10 */\n  display: -webkit-flex;     /* NEW - Chrome */\n}\n.flex-column {\n  @extend .flex;\n  flex-direction: column;\n  &-center {\n    @extend .flex;\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.flex-row {\n  @extend .flex;\n  flex-direction: row;\n  &-center {\n    @extend .flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n}\n","@import 'base';\n\n.container {\n  @extend .flex-column-center;\n  justify-content: flex-start;\n  padding-top: 7rem;\n  height: 100%;\n}\n.progress {\n  @extend .flex-row-center;\n  align-items: center;\n  height: 50%;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"container": "LoadingSpinner__container___2RCDF",
		"flex": "LoadingSpinner__flex___3_WWY",
		"flex-column": "LoadingSpinner__flex-column___7pU45",
		"flex-column-center": "LoadingSpinner__flex-column-center___i6D0c",
		"flex-row": "LoadingSpinner__flex-row___2emXl",
		"flex-row-center": "LoadingSpinner__flex-row-center___1UmZG",
		"progress": "LoadingSpinner__progress___3WiaW"
	};

/***/ },

/***/ 773:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _TextField = __webpack_require__(774);
	
	var _TextField2 = _interopRequireDefault(_TextField);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _TextField2.default;

/***/ },

/***/ 774:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TextField = undefined;
	
	var _extends2 = __webpack_require__(421);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(640);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TextField = __webpack_require__(740);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TextField = function TextField(_ref) {
	  var input = _ref.input,
	      label = _ref.label,
	      _ref$meta = _ref.meta,
	      touched = _ref$meta.touched,
	      error = _ref$meta.error,
	      custom = (0, _objectWithoutProperties3.default)(_ref, ['input', 'label', 'meta']);
	  return _react2.default.createElement(_TextField2.default, (0, _extends3.default)({
	    hintText: label,
	    floatingLabelText: label,
	    errorText: touched && error
	  }, input, custom));
	};
	
	exports.TextField = TextField;
	TextField.propTypes = {
	  input: _react.PropTypes.object,
	  label: _react.PropTypes.string,
	  meta: _react.PropTypes.object
	};
	
	exports.default = TextField;

/***/ },

/***/ 787:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _defineProperty2 = __webpack_require__(788);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
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
	
	var _map2 = __webpack_require__(716);
	
	var _map3 = _interopRequireDefault(_map2);
	
	var _dec, _dec2, _class, _class2, _temp2;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(323);
	
	var _reactReduxFirebase = __webpack_require__(426);
	
	var _paths = __webpack_require__(637);
	
	var _ProjectTile = __webpack_require__(789);
	
	var _ProjectTile2 = _interopRequireDefault(_ProjectTile);
	
	var _NewProjectTile = __webpack_require__(792);
	
	var _NewProjectTile2 = _interopRequireDefault(_NewProjectTile);
	
	var _NewProjectDialog = __webpack_require__(796);
	
	var _NewProjectDialog2 = _interopRequireDefault(_NewProjectDialog);
	
	var _LoadingSpinner = __webpack_require__(766);
	
	var _LoadingSpinner2 = _interopRequireDefault(_LoadingSpinner);
	
	var _ProjectsContainer = __webpack_require__(803);
	
	var _ProjectsContainer2 = _interopRequireDefault(_ProjectsContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var populates = [{ child: 'owner', root: 'users', keyProp: 'uid' }];
	
	var Projects = (_dec = (0, _reactReduxFirebase.firebaseConnect)([{ path: 'projects', populates: populates }
	// 'projects#populate=owner:users' // string equivalent
	]), _dec2 = (0, _reactRedux.connect)(function (_ref, _ref2) {
	  var firebase = _ref.firebase;
	  var params = _ref2.params;
	  return {
	    auth: (0, _reactReduxFirebase.pathToJS)(firebase, 'auth'),
	    projects: (0, _reactReduxFirebase.populatedDataToJS)(firebase, '/projects', populates)
	  };
	}), _dec(_class = _dec2(_class = (_temp2 = _class2 = function (_Component) {
	  (0, _inherits3.default)(Projects, _Component);
	
	  function Projects() {
	    var _ref3;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, Projects);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref3 = Projects.__proto__ || (0, _getPrototypeOf2.default)(Projects)).call.apply(_ref3, [this].concat(args))), _this), _this.state = {
	      newProjectModal: false,
	      addProjectModal: false
	    }, _this.newSubmit = function (newProject) {
	      var _this$props = _this.props,
	          auth = _this$props.auth,
	          push = _this$props.firebase.push;
	
	      if (auth.uid) {
	        newProject.owner = auth.uid;
	      }
	      push('projects', newProject).then(function () {
	        return _this.setState({ newProjectModal: false });
	      }).catch(function (err) {
	        // TODO: Show Snackbar
	        console.error('error creating new project', err); // eslint-disable-line
	      });
	    }, _this.deleteProject = function (key) {
	      _this.props.firebase.remove('projects/' + key).then(function () {
	        // TODO: Show snackbar
	      });
	    }, _this.toggleModal = function (name, project) {
	      _this.setState((0, _defineProperty3.default)({}, name + 'Modal', !_this.state[name + 'Modal']));
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(Projects, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      // Project Route is being loaded
	      if (this.props.children) return this.props.children;
	
	      var _props = this.props,
	          projects = _props.projects,
	          auth = _props.auth;
	      var newProjectModal = this.state.newProjectModal;
	
	
	      if (!(0, _reactReduxFirebase.isLoaded)(projects, auth)) {
	        return _react2.default.createElement(_LoadingSpinner2.default, null);
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { className: _ProjectsContainer2.default.container },
	        newProjectModal && _react2.default.createElement(_NewProjectDialog2.default, {
	          open: newProjectModal,
	          onSubmit: this.newSubmit,
	          onRequestClose: function onRequestClose() {
	            return _this2.toggleModal('newProject');
	          }
	        }),
	        _react2.default.createElement(
	          'div',
	          { className: _ProjectsContainer2.default.tiles },
	          _react2.default.createElement(_NewProjectTile2.default, { onClick: function onClick() {
	              return _this2.toggleModal('newProject');
	            } }),
	          !(0, _reactReduxFirebase.isEmpty)(projects) && (0, _map3.default)(projects, function (project, key) {
	            return _react2.default.createElement(_ProjectTile2.default, {
	              key: 'Project-' + key,
	              project: project,
	              onCollabClick: _this2.collabClick,
	              onSelect: function onSelect() {
	                return _this2.context.router.push(_paths.LIST_PATH + '/' + key);
	              },
	              onDelete: function onDelete() {
	                return _this2.deleteProject(key);
	              },
	              showDelete: auth && project.owner.uid === auth.uid
	            });
	          })
	        )
	      );
	    }
	  }]);
	  return Projects;
	}(_react.Component), _class2.contextTypes = {
	  router: _react2.default.PropTypes.object.isRequired
	}, _class2.propTypes = {
	  projects: _react.PropTypes.object,
	  firebase: _react.PropTypes.object,
	  auth: _react.PropTypes.object,
	  children: _react.PropTypes.object,
	  params: _react.PropTypes.object
	}, _temp2)) || _class) || _class);
	exports.default = Projects;

/***/ },

/***/ 789:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ProjectTile = undefined;
	
	var _isObject2 = __webpack_require__(449);
	
	var _isObject3 = _interopRequireDefault(_isObject2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Paper = __webpack_require__(679);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	var _IconButton = __webpack_require__(642);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _delete = __webpack_require__(737);
	
	var _delete2 = _interopRequireDefault(_delete);
	
	var _ProjectTile = __webpack_require__(790);
	
	var _ProjectTile2 = _interopRequireDefault(_ProjectTile);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ProjectTile = exports.ProjectTile = function ProjectTile(_ref) {
	  var project = _ref.project,
	      onSelect = _ref.onSelect,
	      onDelete = _ref.onDelete,
	      showDelete = _ref.showDelete;
	  return _react2.default.createElement(
	    _Paper2.default,
	    { className: _ProjectTile2.default.container },
	    _react2.default.createElement(
	      'div',
	      { className: _ProjectTile2.default.top },
	      _react2.default.createElement(
	        'span',
	        { className: _ProjectTile2.default.name, onClick: function onClick() {
	            return onSelect(project);
	          } },
	        project.name
	      ),
	      showDelete && onDelete ? _react2.default.createElement(
	        _IconButton2.default,
	        {
	          tooltip: 'delete',
	          onClick: onDelete
	        },
	        _react2.default.createElement(_delete2.default, null)
	      ) : null
	    ),
	    _react2.default.createElement(
	      'span',
	      { className: _ProjectTile2.default.owner },
	      (0, _isObject3.default)(project.owner) ? project.owner.displayName : project.owner || 'No Owner'
	    )
	  );
	};
	
	ProjectTile.propTypes = {
	  project: _react.PropTypes.object.isRequired,
	  onSelect: _react.PropTypes.func.isRequired,
	  onDelete: _react.PropTypes.func.isRequired,
	  showDelete: _react.PropTypes.bool
	};
	
	exports.default = ProjectTile;

/***/ },

/***/ 790:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(791);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(636)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(791, function() {
				var newContent = __webpack_require__(791);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 791:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(635)();
	// imports
	
	
	// module
	exports.push([module.id, ".ProjectTile__collaborator___2_edT,.ProjectTile__collaborators___2uOy7,.ProjectTile__container___2mlyY,.ProjectTile__flex___keWpD,.ProjectTile__flex-column___39rfx,.ProjectTile__flex-column-center___3YK5Y,.ProjectTile__flex-row___1z_kj,.ProjectTile__flex-row-center___4G8Vx,.ProjectTile__settings___38tjH,.ProjectTile__top___BBRtU{display:flex;display:-ms-flexbox;display:-webkit-flex}.ProjectTile__container___2mlyY,.ProjectTile__flex-column___39rfx,.ProjectTile__flex-column-center___3YK5Y{-ms-flex-direction:column;flex-direction:column}.ProjectTile__flex-column-center___3YK5Y{-ms-flex-align:center;align-items:center}.ProjectTile__collaborator___2_edT,.ProjectTile__collaborators___2uOy7,.ProjectTile__flex-row___1z_kj,.ProjectTile__flex-row-center___4G8Vx,.ProjectTile__settings___38tjH,.ProjectTile__top___BBRtU{-ms-flex-direction:row;flex-direction:row}.ProjectTile__flex-row-center___4G8Vx{-ms-flex-pack:center;justify-content:center}.ProjectTile__container___2mlyY{-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:start;align-items:flex-start;height:200px;margin:.5rem;padding:1.3rem;overflow:hidden;min-width:300px}@media (min-width:768px) and (max-width:1023px){.ProjectTile__container___2mlyY{-ms-flex-preferred-size:40%;flex-basis:40%}}@media (max-width:767px){.ProjectTile__container___2mlyY{-ms-flex-preferred-size:80%;flex-basis:80%}}.ProjectTile__top___BBRtU{-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:start;align-items:flex-start;width:100%}.ProjectTile__name___1sJOu{font-size:1.5rem;font-weight:300;text-decoration:none;color:#616161;cursor:pointer;transition:all .8s ease 0ms}.ProjectTile__name___1sJOu:hover{color:#03a9f4}.ProjectTile__name___1sJOu:visited{text-decoration:none;color:#616161}.ProjectTile__settings___38tjH{-ms-flex-align:start;align-items:flex-start;-ms-flex-item-align:end;align-self:flex-end;cursor:pointer;transition:all .8s ease 0ms}.ProjectTile__settings___38tjH:hover{color:#03a9f4}.ProjectTile__owner___1QLna{font-size:1.2rem;color:#616161;cursor:pointer;transition:all .8s ease 0ms}.ProjectTile__owner___1QLna:hover{color:#03a9f4}.ProjectTile__collaborators___2uOy7{-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:start;align-items:flex-start;width:100%;margin-top:2rem}.ProjectTile__collaborator___2_edT{margin-left:.4rem;margin-right:.4rem;overflow:hidden;cursor:pointer;filter:grayscale(1)}.ProjectTile__collaborator___2_edT:hover{filter:none}.ProjectTile__collaborator___2_edT:hover img{background-color:#03a9f4}.ProjectTile__add___l2CgF:hover{color:#03a9f4}", "", {"version":3,"sources":["/./src/routes/Projects/components/ProjectTile/src/styles/_standard-classes.scss","/./src/routes/Projects/components/ProjectTile/src/routes/Projects/components/ProjectTile/ProjectTile.scss","/./src/routes/Projects/components/ProjectTile/src/styles/_colors.scss"],"names":[],"mappings":"AAAA,2UACE,aAAc,oBAGO,oBACC,CACvB,2GAGC,0BAAA,qBAAuB,CAFzB,yCAMI,sBAAA,kBAAoB,CACrB,qMAID,uBAAA,kBAAoB,CAFtB,sCAMI,qBAAA,sBAAwB,CACzB,gCCnBD,oBAAA,2BAA4B,qBAC5B,uBAAwB,aACV,aACA,eACE,gBACC,eACA,CAOlB,gDAfD,gCAUI,4BAAA,cAAgB,CAKnB,CAAA,yBAfD,gCAaI,4BAAA,cAAgB,CAEnB,CAAA,0BAGC,sBAAA,8BAA+B,qBAC/B,uBAAwB,UACZ,CACb,2BAEC,iBAAkB,gBACD,qBACK,cAEtB,eAAgB,2BACuC,CANzD,iCAQI,aCfiB,CDOrB,mCAWI,qBAAsB,aC/BR,CDiCf,+BAID,qBAAA,uBAAwB,wBACxB,oBAAqB,eACL,2BACuC,CALzD,qCAOI,aC7BiB,CD8BlB,4BAGD,iBAAkB,cAElB,eAAgB,2BACuC,CAJzD,kCAMI,aCtCiB,CDuClB,oCAID,oBAAA,2BAA4B,qBAC5B,uBAAwB,WACZ,eACK,CAClB,mCAGC,kBAAmB,mBACC,gBACH,eACD,mBAEC,CAPnB,yCAUI,WAAa,CAVjB,6CAYM,wBC5De,CD6DhB,gCAKD,aClEiB,CDmElB","file":"ProjectTile.scss","sourcesContent":[".flex {\n  display: flex;             /* NEW, Spec - Opera 12.1, Firefox 20+ */\n  display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */\n  display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */\n  display: -ms-flexbox;      /* TWEENER - IE 10 */\n  display: -webkit-flex;     /* NEW - Chrome */\n}\n.flex-column {\n  @extend .flex;\n  flex-direction: column;\n  &-center {\n    @extend .flex;\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.flex-row {\n  @extend .flex;\n  flex-direction: row;\n  &-center {\n    @extend .flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n}\n","@import 'base';\n\n.container {\n  @extend .flex-column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  height: 200px;\n  margin: .5rem;\n  padding: 1.3rem;\n  overflow: hidden;\n  min-width: 300px;\n  @include tablet {\n    flex-basis: 40%;\n  }\n  @include mobile {\n    flex-basis: 80%;\n  }\n}\n.top {\n  @extend .flex-row;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 100%;\n}\n.name {\n  font-size: 1.5rem;\n  font-weight: 300;\n  text-decoration: none;\n  color: $darkGray;\n  cursor: pointer;\n  transition: all 800ms cubic-bezier(0.25,0.1,0.25,1) 0ms;\n  &:hover {\n    color: $accentColor;\n  }\n  &:visited {\n    text-decoration: none;\n    color: $darkGray;\n  }\n}\n.settings {\n  @extend .flex-row;\n  align-items: flex-start;\n  align-self: flex-end;\n  cursor: pointer;\n  transition: all 800ms cubic-bezier(0.25,0.1,0.25,1) 0ms;\n  &:hover {\n    color: $accentColor;\n  }\n}\n.owner {\n  font-size: 1.2rem;\n  color: $darkGray;\n  cursor: pointer;\n  transition: all 800ms cubic-bezier(0.25,0.1,0.25,1) 0ms;\n  &:hover {\n    color: $accentColor;\n  }\n}\n.collaborators {\n  @extend .flex-row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  margin-top: 2rem;\n}\n.collaborator {\n  @extend .flex-row;\n  margin-left: .4rem;\n  margin-right: .4rem;\n  overflow: hidden;\n  cursor: pointer;\n  -webkit-filter: grayscale(1);\n  filter: grayscale(1);\n  &:hover {\n    -webkit-filter: none;\n    filter: none;\n    img {\n      background-color: $accentColor;\n    }\n  }\n}\n.add {\n  &:hover {\n    color: $accentColor;\n  }\n}\n","$blue: blue;\n$gray: #E6E6E6;\n$lightGray: #D8D8D8;\n$mediumGray: #979797;\n$darkGray: #616161;\n$blackGray: #272822;\n$primary: rgb(33,150,243);\n$secondary: rgb(200,230,201);\n$materialBlue: #00bcd4;\n$background: #F2F2F2;\n$white: #ffffff;\n$navbar: $materialBlue;\n$navbarText: $white;\n$subNavbar: $materialBlue;\n$editorBackground: $blackGray;\n$success: #c8e6c9;\n$error: #ffa3a3;\n$accentColor: #03A9F4;\n$Tab: #333333;\n$linkBlue: #427fed;\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"collaborator": "ProjectTile__collaborator___2_edT",
		"collaborators": "ProjectTile__collaborators___2uOy7",
		"container": "ProjectTile__container___2mlyY",
		"flex": "ProjectTile__flex___keWpD",
		"flex-column": "ProjectTile__flex-column___39rfx",
		"flex-column-center": "ProjectTile__flex-column-center___3YK5Y",
		"flex-row": "ProjectTile__flex-row___1z_kj",
		"flex-row-center": "ProjectTile__flex-row-center___4G8Vx",
		"settings": "ProjectTile__settings___38tjH",
		"top": "ProjectTile__top___BBRtU",
		"name": "ProjectTile__name___1sJOu",
		"owner": "ProjectTile__owner___1QLna",
		"add": "ProjectTile__add___l2CgF"
	};

/***/ },

/***/ 792:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NewProjectTile = undefined;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Paper = __webpack_require__(679);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	var _addCircle = __webpack_require__(793);
	
	var _addCircle2 = _interopRequireDefault(_addCircle);
	
	var _NewProjectTile = __webpack_require__(794);
	
	var _NewProjectTile2 = _interopRequireDefault(_NewProjectTile);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var iconSize = '6rem';
	var iconStyle = { width: iconSize, height: iconSize };
	var color = '#979797';
	var hoverColor = '#616161';
	
	var NewProjectTile = exports.NewProjectTile = function NewProjectTile(_ref) {
	  var onClick = _ref.onClick;
	  return _react2.default.createElement(
	    _Paper2.default,
	    { className: _NewProjectTile2.default['container'], onClick: onClick },
	    _react2.default.createElement(_addCircle2.default, {
	      color: color,
	      hoverColor: hoverColor,
	      style: iconStyle
	    })
	  );
	};
	
	NewProjectTile.propTypes = {
	  onClick: _react.PropTypes.func
	};
	
	exports.default = NewProjectTile;

/***/ },

/***/ 793:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(668);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(677);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ContentAddCircle = function ContentAddCircle(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z' })
	  );
	};
	ContentAddCircle = (0, _pure2.default)(ContentAddCircle);
	ContentAddCircle.displayName = 'ContentAddCircle';
	ContentAddCircle.muiName = 'SvgIcon';
	
	exports.default = ContentAddCircle;

/***/ },

/***/ 794:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(795);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(636)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(795, function() {
				var newContent = __webpack_require__(795);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 795:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(635)();
	// imports
	
	
	// module
	exports.push([module.id, ".NewProjectTile__container___HRlOk,.NewProjectTile__flex___4wGxd,.NewProjectTile__flex-column___jmFl_,.NewProjectTile__flex-column-center___27aeW,.NewProjectTile__flex-row___1-FFx,.NewProjectTile__flex-row-center___1j8H7{display:flex;display:-ms-flexbox;display:-webkit-flex}.NewProjectTile__flex-column___jmFl_,.NewProjectTile__flex-column-center___27aeW{-ms-flex-direction:column;flex-direction:column}.NewProjectTile__flex-column-center___27aeW{-ms-flex-align:center;align-items:center}.NewProjectTile__container___HRlOk,.NewProjectTile__flex-row___1-FFx,.NewProjectTile__flex-row-center___1j8H7{-ms-flex-direction:row;flex-direction:row}.NewProjectTile__container___HRlOk,.NewProjectTile__flex-row-center___1j8H7{-ms-flex-pack:center;justify-content:center}.NewProjectTile__container___HRlOk{-ms-flex-align:center;align-items:center;cursor:pointer;height:200px;margin:.5rem;padding:1.3rem;overflow:hidden;min-width:300px}@media (min-width:768px) and (max-width:1023px){.NewProjectTile__container___HRlOk{-ms-flex-preferred-size:40%;flex-basis:40%}}@media (max-width:767px){.NewProjectTile__container___HRlOk{-ms-flex-preferred-size:80%;flex-basis:80%}}", "", {"version":3,"sources":["/./src/routes/Projects/components/NewProjectTile/src/styles/_standard-classes.scss","/./src/routes/Projects/components/NewProjectTile/src/routes/Projects/components/NewProjectTile/NewProjectTile.scss"],"names":[],"mappings":"AAAA,6NACE,aAAc,oBAGO,oBACC,CACvB,iFAGC,0BAAA,qBAAuB,CAFzB,4CAMI,sBAAA,kBAAoB,CACrB,8GAID,uBAAA,kBAAoB,CAFtB,4EAMI,qBAAA,sBAAwB,CACzB,mCCnBD,sBAAA,mBAAoB,eACJ,aACF,aACA,eACE,gBACC,eACA,CAOlB,gDAfD,mCAUI,4BAAA,cAAgB,CAKnB,CAAA,yBAfD,mCAaI,4BAAA,cAAgB,CAEnB,CAAA","file":"NewProjectTile.scss","sourcesContent":[".flex {\n  display: flex;             /* NEW, Spec - Opera 12.1, Firefox 20+ */\n  display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */\n  display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */\n  display: -ms-flexbox;      /* TWEENER - IE 10 */\n  display: -webkit-flex;     /* NEW - Chrome */\n}\n.flex-column {\n  @extend .flex;\n  flex-direction: column;\n  &-center {\n    @extend .flex;\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.flex-row {\n  @extend .flex;\n  flex-direction: row;\n  &-center {\n    @extend .flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n}\n","@import 'base';\n\n.container {\n  @extend .flex-row-center;\n  align-items: center;\n  cursor: pointer;\n  height: 200px;\n  margin: .5rem;\n  padding: 1.3rem;\n  overflow: hidden;\n  min-width: 300px;\n  @include tablet {\n    flex-basis: 40%;\n  }\n  @include mobile {\n    flex-basis: 80%;\n  }\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"container": "NewProjectTile__container___HRlOk",
		"flex": "NewProjectTile__flex___4wGxd",
		"flex-column": "NewProjectTile__flex-column___jmFl_",
		"flex-column-center": "NewProjectTile__flex-column-center___27aeW",
		"flex-row": "NewProjectTile__flex-row___1-FFx",
		"flex-row-center": "NewProjectTile__flex-row-center___1j8H7"
	};

/***/ },

/***/ 796:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
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
	
	var _dec, _class, _class2, _temp2;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Dialog = __webpack_require__(797);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _FlatButton = __webpack_require__(703);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	var _reduxForm = __webpack_require__(428);
	
	var _TextField = __webpack_require__(773);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _NewProjectDialog = __webpack_require__(801);
	
	var _NewProjectDialog2 = _interopRequireDefault(_NewProjectDialog);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var formName = 'newProject';
	var validate = function validate(values) {
	  var errors = {};
	  if (!values.name) errors.name = 'Required';
	  return errors;
	};
	var NewProjectDialog = (_dec = (0, _reduxForm.reduxForm)({
	  form: formName,
	  validate: validate
	}), _dec(_class = (_temp2 = _class2 = function (_Component) {
	  (0, _inherits3.default)(NewProjectDialog, _Component);
	
	  function NewProjectDialog() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, NewProjectDialog);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = NewProjectDialog.__proto__ || (0, _getPrototypeOf2.default)(NewProjectDialog)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      open: _this.props.open || false
	    }, _this.close = function () {
	      _this.setState({
	        open: false
	      });
	      if (_this.props.onRequestClose) {
	        _this.props.onRequestClose();
	      }
	    }, _this.handleSubmitClick = function (e) {
	      e.preventDefault();
	      _this.props.dispatch((0, _reduxForm.submit)(formName));
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(NewProjectDialog, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.open) {
	        this.setState({
	          open: true
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var open = this.state.open;
	      var handleSubmit = this.props.handleSubmit;
	
	
	      var actions = [_react2.default.createElement(_FlatButton2.default, {
	        label: 'Cancel',
	        secondary: true,
	        onClick: this.close
	      }), _react2.default.createElement(_FlatButton2.default, {
	        label: 'Create',
	        primary: true,
	        onClick: this.handleSubmitClick
	      })];
	
	      return _react2.default.createElement(
	        _Dialog2.default,
	        {
	          title: 'New Project',
	          modal: false,
	          actions: actions,
	          open: open,
	          onRequestClose: this.close,
	          contentClassName: _NewProjectDialog2.default.container },
	        _react2.default.createElement(
	          'div',
	          { className: _NewProjectDialog2.default.inputs },
	          _react2.default.createElement(
	            'form',
	            { onSubmit: handleSubmit },
	            _react2.default.createElement(_reduxForm.Field, {
	              name: 'name',
	              component: _TextField2.default,
	              label: 'Project Name'
	            })
	          )
	        )
	      );
	    }
	  }]);
	  return NewProjectDialog;
	}(_react.Component), _class2.propTypes = {
	  open: _react.PropTypes.bool,
	  onRequestClose: _react.PropTypes.func.isRequired,
	  handleSubmit: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired
	}, _temp2)) || _class);
	exports.default = NewProjectDialog;

/***/ },

/***/ 801:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(802);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(636)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(802, function() {
				var newContent = __webpack_require__(802);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 802:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(635)();
	// imports
	
	
	// module
	exports.push([module.id, ".NewProjectDialog__buttons___2RfwJ,.NewProjectDialog__flex___1aVPi,.NewProjectDialog__flex-column___1J1Rx,.NewProjectDialog__flex-column-center___2H_Nr,.NewProjectDialog__flex-row___CGkPL,.NewProjectDialog__flex-row-center___3LYrA,.NewProjectDialog__inputs___3o7ef{display:flex;display:-ms-flexbox;display:-webkit-flex}.NewProjectDialog__buttons___2RfwJ,.NewProjectDialog__flex-column___1J1Rx,.NewProjectDialog__flex-column-center___2H_Nr,.NewProjectDialog__inputs___3o7ef{-ms-flex-direction:column;flex-direction:column}.NewProjectDialog__buttons___2RfwJ,.NewProjectDialog__flex-column-center___2H_Nr,.NewProjectDialog__inputs___3o7ef{-ms-flex-align:center;align-items:center}.NewProjectDialog__flex-row___CGkPL,.NewProjectDialog__flex-row-center___3LYrA{-ms-flex-direction:row;flex-direction:row}.NewProjectDialog__flex-row-center___3LYrA{-ms-flex-pack:center;justify-content:center}.NewProjectDialog__container___2naoy{padding:2rem}.NewProjectDialog__inputs___3o7ef{-ms-flex-pack:center;justify-content:center}.NewProjectDialog__inputs___3o7ef,.NewProjectDialog__inputs___3o7ef input{width:100%}.NewProjectDialog__buttons___2RfwJ{-ms-flex-pack:center;justify-content:center}", "", {"version":3,"sources":["/./src/routes/Projects/components/NewProjectDialog/src/styles/_standard-classes.scss","/./src/routes/Projects/components/NewProjectDialog/src/routes/Projects/components/NewProjectDialog/NewProjectDialog.scss"],"names":[],"mappings":"AAAA,yQACE,aAAc,oBAGO,oBACC,CACvB,0JAGC,0BAAA,qBAAuB,CAFzB,mHAMI,sBAAA,kBAAoB,CACrB,+EAID,uBAAA,kBAAoB,CAFtB,2CAMI,qBAAA,sBAAwB,CACzB,qCCpBD,YAAc,CACf,kCAGC,qBAAA,sBAAwB,CAF1B,0EAGE,UAAY,CAGX,mCAID,qBAAA,sBAAwB,CACzB","file":"NewProjectDialog.scss","sourcesContent":[".flex {\n  display: flex;             /* NEW, Spec - Opera 12.1, Firefox 20+ */\n  display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */\n  display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */\n  display: -ms-flexbox;      /* TWEENER - IE 10 */\n  display: -webkit-flex;     /* NEW - Chrome */\n}\n.flex-column {\n  @extend .flex;\n  flex-direction: column;\n  &-center {\n    @extend .flex;\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.flex-row {\n  @extend .flex;\n  flex-direction: row;\n  &-center {\n    @extend .flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n}\n","@import 'base';\n\n.container {\n  padding: 2rem;\n}\n.inputs {\n  @extend .flex-column-center;\n  justify-content: center;\n  width: 100%;\n  input {\n    width: 100%;\n  }\n}\n.buttons {\n  @extend .flex-column-center;\n  justify-content: center;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"buttons": "NewProjectDialog__buttons___2RfwJ",
		"flex": "NewProjectDialog__flex___1aVPi",
		"flex-column": "NewProjectDialog__flex-column___1J1Rx",
		"flex-column-center": "NewProjectDialog__flex-column-center___2H_Nr",
		"flex-row": "NewProjectDialog__flex-row___CGkPL",
		"flex-row-center": "NewProjectDialog__flex-row-center___3LYrA",
		"inputs": "NewProjectDialog__inputs___3o7ef",
		"container": "NewProjectDialog__container___2naoy"
	};

/***/ },

/***/ 803:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(804);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(636)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(804, function() {
				var newContent = __webpack_require__(804);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 804:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(635)();
	// imports
	
	
	// module
	exports.push([module.id, ".ProjectsContainer__container___1kCL7,.ProjectsContainer__flex___1zGYu,.ProjectsContainer__flex-column___3-kIo,.ProjectsContainer__flex-column-center___2tYh_,.ProjectsContainer__flex-row___3NnV6,.ProjectsContainer__flex-row-center___2aEYS,.ProjectsContainer__progress___xiObt,.ProjectsContainer__tiles___3JUax{display:flex;display:-ms-flexbox;display:-webkit-flex}.ProjectsContainer__container___1kCL7,.ProjectsContainer__flex-column___3-kIo,.ProjectsContainer__flex-column-center___2tYh_,.ProjectsContainer__progress___xiObt{-ms-flex-direction:column;flex-direction:column}.ProjectsContainer__container___1kCL7,.ProjectsContainer__flex-column-center___2tYh_,.ProjectsContainer__progress___xiObt{-ms-flex-align:center;align-items:center}.ProjectsContainer__flex-row___3NnV6,.ProjectsContainer__flex-row-center___2aEYS,.ProjectsContainer__tiles___3JUax{-ms-flex-direction:row;flex-direction:row}.ProjectsContainer__flex-row-center___2aEYS,.ProjectsContainer__tiles___3JUax{-ms-flex-pack:center;justify-content:center}.ProjectsContainer__container___1kCL7{-ms-flex-pack:start;justify-content:flex-start;padding-top:30px;-ms-flex-positive:2;flex-grow:2;box-sizing:border-box;overflow-y:scroll}.ProjectsContainer__tiles___3JUax{-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap}.ProjectsContainer__progress___xiObt{-ms-flex-pack:start;justify-content:flex-start;padding-top:30px;-ms-flex-positive:2;flex-grow:2;box-sizing:border-box;overflow-y:scroll;padding-left:5%;padding-right:5%}", "", {"version":3,"sources":["/./src/routes/Projects/containers/src/styles/_standard-classes.scss","/./src/routes/Projects/containers/src/routes/Projects/containers/ProjectsContainer.scss"],"names":[],"mappings":"AAAA,sTACE,aAAc,oBAGO,oBACC,CACvB,kKAGC,0BAAA,qBAAuB,CAFzB,0HAMI,sBAAA,kBAAoB,CACrB,mHAID,uBAAA,kBAAoB,CAFtB,8EAMI,qBAAA,sBAAwB,CACzB,sCCnBD,oBAAA,2BAA4B,iBACV,oBAClB,YAAa,sBACU,iBACJ,CACpB,kCAKC,qBAAA,uBAAwB,mBACxB,cAAgB,CACjB,qCAIC,oBAAA,2BAA4B,iBACV,oBAClB,YAAa,sBACU,kBACJ,gBACF,gBACC,CACnB","file":"ProjectsContainer.scss","sourcesContent":[".flex {\n  display: flex;             /* NEW, Spec - Opera 12.1, Firefox 20+ */\n  display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */\n  display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */\n  display: -ms-flexbox;      /* TWEENER - IE 10 */\n  display: -webkit-flex;     /* NEW - Chrome */\n}\n.flex-column {\n  @extend .flex;\n  flex-direction: column;\n  &-center {\n    @extend .flex;\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.flex-row {\n  @extend .flex;\n  flex-direction: row;\n  &-center {\n    @extend .flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n}\n","@import 'base';\n\n.container {\n  @extend .flex-column-center;\n  justify-content: flex-start;\n  padding-top: 30px;\n  flex-grow: 2;\n  box-sizing: border-box;\n  overflow-y: scroll;\n}\n\n.tiles {\n  @extend .flex-row-center;\n  -webkit-flex-flow: row wrap;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.progress {\n  @extend .flex-column-center;\n  justify-content: flex-start;\n  padding-top: 30px;\n  flex-grow: 2;\n  box-sizing: border-box;\n  overflow-y: scroll;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"container": "ProjectsContainer__container___1kCL7",
		"flex": "ProjectsContainer__flex___1zGYu",
		"flex-column": "ProjectsContainer__flex-column___3-kIo",
		"flex-column-center": "ProjectsContainer__flex-column-center___2tYh_",
		"flex-row": "ProjectsContainer__flex-row___3NnV6",
		"flex-row-center": "ProjectsContainer__flex-row-center___2aEYS",
		"progress": "ProjectsContainer__progress___xiObt",
		"tiles": "ProjectsContainer__tiles___3JUax"
	};

/***/ }

});
//# sourceMappingURL=3.Projects.613a65e282b66a2a6c63.js.map
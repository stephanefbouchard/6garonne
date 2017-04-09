webpackJsonp([1],{

/***/ 752:
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
	
	var _dec, _dec2, _class, _class2, _temp2;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(260);
	
	var _reactGoogleButton = __webpack_require__(753);
	
	var _reactGoogleButton2 = _interopRequireDefault(_reactGoogleButton);
	
	var _reactRedux = __webpack_require__(323);
	
	var _reactReduxFirebase = __webpack_require__(426);
	
	var _Paper = __webpack_require__(679);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	var _Snackbar = __webpack_require__(722);
	
	var _Snackbar2 = _interopRequireDefault(_Snackbar);
	
	var _router = __webpack_require__(755);
	
	var _paths = __webpack_require__(637);
	
	var _LoginForm = __webpack_require__(770);
	
	var _LoginForm2 = _interopRequireDefault(_LoginForm);
	
	var _LoginContainer = __webpack_require__(777);
	
	var _LoginContainer2 = _interopRequireDefault(_LoginContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Signup = (_dec = (0, _reactReduxFirebase.firebaseConnect)(), _dec2 = (0, _reactRedux.connect)(
	// Map state to props
	function (_ref) {
	  var firebase = _ref.firebase;
	  return {
	    authError: (0, _reactReduxFirebase.pathToJS)(firebase, 'authError')
	  };
	}), (0, _router.UserIsNotAuthenticated)(_class = _dec(_class = _dec2(_class = (_temp2 = _class2 = function (_Component) {
	  (0, _inherits3.default)(Signup, _Component);
	
	  function Signup() {
	    var _ref2;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, Signup);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = Signup.__proto__ || (0, _getPrototypeOf2.default)(Signup)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
	      snackCanOpen: false
	    }, _this.handleLogin = function (loginData) {
	      _this.setState({
	        snackCanOpen: true
	      });
	
	      _this.props.firebase.login(loginData);
	    }, _this.providerLogin = function (provider) {
	      return _this.handleLogin({ provider: provider });
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(Signup, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var authError = this.props.authError;
	      var snackCanOpen = this.state.snackCanOpen;
	
	
	      return _react2.default.createElement(
	        'div',
	        { className: _LoginContainer2.default.container },
	        _react2.default.createElement(
	          _Paper2.default,
	          { className: _LoginContainer2.default.panel },
	          _react2.default.createElement(_LoginForm2.default, { onSubmit: this.handleLogin })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _LoginContainer2.default.or },
	          'or'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _LoginContainer2.default.providers },
	          _react2.default.createElement(_reactGoogleButton2.default, { onClick: function onClick() {
	              return _this2.providerLogin('google');
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _LoginContainer2.default.signup },
	          _react2.default.createElement(
	            'span',
	            { className: _LoginContainer2.default['signup-label'] },
	            'Need an account?'
	          ),
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { className: _LoginContainer2.default['signup-link'], to: _paths.SIGNUP_PATH },
	            'Sign Up'
	          )
	        ),
	        (0, _reactReduxFirebase.isLoaded)(authError) && !(0, _reactReduxFirebase.isEmpty)(authError) && snackCanOpen && _react2.default.createElement(_Snackbar2.default, {
	          open: (0, _reactReduxFirebase.isLoaded)(authError) && !(0, _reactReduxFirebase.isEmpty)(authError) && snackCanOpen,
	          message: authError ? authError.message : 'Signup error',
	          action: 'close',
	          autoHideDuration: 3000
	        })
	      );
	    }
	  }]);
	  return Signup;
	}(_react.Component), _class2.propTypes = {
	  firebase: _react.PropTypes.shape({
	    login: _react.PropTypes.func.isRequired
	  }),
	  authError: _react.PropTypes.shape({
	    message: _react.PropTypes.string // eslint-disable-line react/no-unused-prop-types
	  })
	}, _temp2)) || _class) || _class) || _class);
	exports.default = Signup;

/***/ },

/***/ 753:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.GoogleButton = undefined;
	
	var _GoogleButton = __webpack_require__(754);
	
	Object.defineProperty(exports, 'GoogleButton', {
	  enumerable: true,
	  get: function get() {
	    return _GoogleButton.GoogleButton;
	  }
	});
	
	var _GoogleButton2 = _interopRequireDefault(_GoogleButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _GoogleButton2.default;

/***/ },

/***/ 754:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var style = {
	  backgroundColor: '#4285f4',
	  color: '#fff',
	  height: '50px',
	  width: '240px',
	  border: 'none',
	  textAlign: 'center',
	  verticalAlign: 'center',
	  fontSize: '16px',
	  lineHeight: '48px',
	  display: 'block',
	  transition: 'background-color .218s,border-color .218s,box-shadow .218s',
	  fontFamily: 'Roboto,arial,sans-serif',
	  cursor: 'pointer'
	};
	
	var iconStyle = {
	  width: '48px',
	  height: '48px',
	  textAlign: 'center',
	  verticalAlign: 'center',
	  display: 'block',
	  marginTop: '1px',
	  marginLeft: '1px',
	  float: 'left',
	  backgroundColor: '#fff',
	  borderRadius: '1px',
	  whiteSpace: 'nowrap'
	};
	
	var svgWrapperStyle = { padding: '15px' };
	
	var svgStyle = {
	  width: '18px',
	  height: '18px',
	  display: 'block'
	};
	
	var GoogleButton = function (_Component) {
	  _inherits(GoogleButton, _Component);
	
	  function GoogleButton() {
	    _classCallCheck(this, GoogleButton);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(GoogleButton).apply(this, arguments));
	  }
	
	  _createClass(GoogleButton, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        _extends({}, this.props, { style: style }),
	        _react2.default.createElement(
	          'div',
	          { style: iconStyle },
	          _react2.default.createElement(
	            'div',
	            { style: svgWrapperStyle },
	            _react2.default.createElement(
	              'svg',
	              { version: '1.1', xmlns: 'http://www.w3.org/2000/svg', width: '18px', height: '18px', viewBox: '0 0 48 48', style: svgStyle },
	              _react2.default.createElement(
	                'g',
	                null,
	                _react2.default.createElement('path', { fill: '#EA4335', d: 'M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z' }),
	                _react2.default.createElement('path', { fill: '#4285F4', d: 'M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z' }),
	                _react2.default.createElement('path', { fill: '#FBBC05', d: 'M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z' }),
	                _react2.default.createElement('path', { fill: '#34A853', d: 'M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z' }),
	                _react2.default.createElement('path', { fill: 'none', d: 'M0 0h48v48H0z' })
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'span',
	          null,
	          'Sign in with Google'
	        )
	      );
	    }
	  }]);
	
	  return GoogleButton;
	}(_react.Component);
	
	exports.default = GoogleButton;

/***/ },

/***/ 755:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UserIsNotAuthenticated = exports.UserIsAuthenticated = undefined;
	
	var _reduxAuthWrapper = __webpack_require__(756);
	
	var _reactRouter = __webpack_require__(260);
	
	var _constants = __webpack_require__(764);
	
	var _reactReduxFirebase = __webpack_require__(426);
	
	var _LoadingSpinner = __webpack_require__(766);
	
	var _LoadingSpinner2 = _interopRequireDefault(_LoadingSpinner);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var pathToJS = _reactReduxFirebase.helpers.pathToJS;
	
	
	var AUTHED_REDIRECT = 'AUTHED_REDIRECT';
	var UNAUTHED_REDIRECT = 'UNAUTHED_REDIRECT';
	
	/**
	 * @description Higher Order Component that redirects to `/login` instead
	 * rendering if user is not authenticated (default of redux-auth-wrapper).
	 * @param {Component} componentToWrap - Component to wrap
	 * @return {Component} wrappedComponent
	 */
	var UserIsAuthenticated = exports.UserIsAuthenticated = (0, _reduxAuthWrapper.UserAuthWrapper)({ // eslint-disable-line new-cap
	  wrapperDisplayName: 'UserIsAuthenticated',
	  LoadingComponent: _LoadingSpinner2.default,
	  authSelector: function authSelector(_ref) {
	    var firebase = _ref.firebase;
	    return pathToJS(firebase, 'auth');
	  },
	  authenticatingSelector: function authenticatingSelector(_ref2) {
	    var firebase = _ref2.firebase;
	    return pathToJS(firebase, 'auth') === undefined || pathToJS(firebase, 'isInitializing') === true;
	  },
	  predicate: function predicate(auth) {
	    return auth !== null;
	  },
	  redirectAction: function redirectAction(newLoc) {
	    return function (dispatch) {
	      _reactRouter.browserHistory.replace(newLoc);
	      dispatch({
	        type: UNAUTHED_REDIRECT,
	        payload: { message: 'User is not authenticated.' }
	      });
	    };
	  }
	});
	
	/**
	 * @description Higher Order Component that redirects to listings page or most
	 * recent route instead rendering if user is not authenticated. This is useful
	 * routes that should not be displayed if a user is logged in, such as the
	 * login route.
	 * @param {Component} componentToWrap - Component to wrap
	 * @return {Component} wrappedComponent
	 */
	var UserIsNotAuthenticated = exports.UserIsNotAuthenticated = (0, _reduxAuthWrapper.UserAuthWrapper)({ // eslint-disable-line new-cap
	  wrapperDisplayName: 'UserIsNotAuthenticated',
	  allowRedirectBack: false,
	  LoadingComponent: _LoadingSpinner2.default,
	  failureRedirectPath: function failureRedirectPath(state, props) {
	    return (
	      // redirect to page user was on or to list path
	      props.location.query.redirect || _constants.paths.LIST_PATH
	    );
	  },
	  authSelector: function authSelector(_ref3) {
	    var firebase = _ref3.firebase;
	    return pathToJS(firebase, 'auth');
	  },
	  authenticatingSelector: function authenticatingSelector(_ref4) {
	    var firebase = _ref4.firebase;
	    return pathToJS(firebase, 'auth') === undefined || pathToJS(firebase, 'isInitializing') === true;
	  },
	  predicate: function predicate(auth) {
	    return auth === null;
	  },
	  redirectAction: function redirectAction(newLoc) {
	    return function (dispatch) {
	      _reactRouter.browserHistory.replace(newLoc);
	      dispatch({ type: AUTHED_REDIRECT });
	    };
	  }
	});
	
	exports.default = {
	  UserIsAuthenticated: UserIsAuthenticated,
	  UserIsNotAuthenticated: UserIsNotAuthenticated
	};

/***/ },

/***/ 756:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UserAuthWrapper = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(323);
	
	var _hoistNonReactStatics = __webpack_require__(303);
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	var _lodash = __webpack_require__(757);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _url = __webpack_require__(758);
	
	var _url2 = _interopRequireDefault(_url);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var defaults = {
	  LoadingComponent: function LoadingComponent() {
	    return null;
	  }, // dont render anything while authenticating
	  failureRedirectPath: '/login',
	  FailureComponent: undefined,
	  redirectQueryParamName: 'redirect',
	  wrapperDisplayName: 'AuthWrapper',
	  predicate: function predicate(x) {
	    return !(0, _lodash2.default)(x);
	  },
	  authenticatingSelector: function authenticatingSelector() {
	    return false;
	  },
	  allowRedirectBack: true,
	  propMapper: function propMapper(_ref) {
	    var redirect = _ref.redirect,
	        authData = _ref.authData,
	        isAuthenticating = _ref.isAuthenticating,
	        failureRedirectPath = _ref.failureRedirectPath,
	        otherProps = _objectWithoutProperties(_ref, ['redirect', 'authData', 'isAuthenticating', 'failureRedirectPath']);
	
	    return _extends({ authData: authData }, otherProps);
	  } // eslint-disable-line no-unused-vars
	};
	
	var UserAuthWrapper = exports.UserAuthWrapper = function UserAuthWrapper(args) {
	  var _defaults$args = _extends({}, defaults, args),
	      authSelector = _defaults$args.authSelector,
	      authenticatingSelector = _defaults$args.authenticatingSelector,
	      LoadingComponent = _defaults$args.LoadingComponent,
	      failureRedirectPath = _defaults$args.failureRedirectPath,
	      FailureComponent = _defaults$args.FailureComponent,
	      wrapperDisplayName = _defaults$args.wrapperDisplayName,
	      predicate = _defaults$args.predicate,
	      allowRedirectBack = _defaults$args.allowRedirectBack,
	      redirectAction = _defaults$args.redirectAction,
	      redirectQueryParamName = _defaults$args.redirectQueryParamName,
	      propMapper = _defaults$args.propMapper;
	
	  var isAuthorized = function isAuthorized(authData) {
	    return predicate(authData);
	  };
	
	  var createRedirect = function createRedirect(location, redirect, redirectPath) {
	    var redirectLoc = _url2.default.parse(redirectPath, true);
	
	    var query = void 0;
	    var canRedirect = typeof allowRedirectBack === 'function' ? allowRedirectBack(location, redirectPath) : allowRedirectBack;
	
	    if (canRedirect) {
	      query = _defineProperty({}, redirectQueryParamName, '' + location.pathname + location.search);
	    } else {
	      query = {};
	    }
	
	    query = _extends({}, query, redirectLoc.query);
	
	    redirect({
	      pathname: redirectLoc.pathname,
	      query: query
	    });
	  };
	
	  var shouldRedirect = FailureComponent === undefined;
	  var locationShape = _react.PropTypes.shape({
	    pathname: _react.PropTypes.string.isRequired,
	    search: _react.PropTypes.string.isRequired
	  });
	
	  // Wraps the component that needs the auth enforcement
	  function wrapComponent(DecoratedComponent) {
	    var _dec, _class, _class2, _temp2;
	
	    var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';
	
	    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	      if (redirectAction !== undefined) {
	        return { redirect: function redirect(args) {
	            return dispatch(redirectAction(args));
	          } };
	      } else {
	        return {};
	      }
	    };
	
	    var UserAuthWrapper = (_dec = (0, _reactRedux.connect)(function (state, ownProps) {
	      return {
	        authData: authSelector(state, ownProps),
	        failureRedirectPath: typeof failureRedirectPath === 'function' ? failureRedirectPath(state, ownProps) : failureRedirectPath,
	        isAuthenticating: authenticatingSelector(state, ownProps)
	      };
	    }, mapDispatchToProps), _dec(_class = (_temp2 = _class2 = function (_Component) {
	      _inherits(UserAuthWrapper, _Component);
	
	      function UserAuthWrapper() {
	        var _ref2;
	
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, UserAuthWrapper);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = UserAuthWrapper.__proto__ || Object.getPrototypeOf(UserAuthWrapper)).call.apply(_ref2, [this].concat(args))), _this), _this.getRedirectFunc = function (_ref3) {
	          var redirect = _ref3.redirect;
	
	          if (redirect) {
	            return redirect;
	          } else {
	            if (!_this.context.router.replace) {
	              /* istanbul ignore next sanity */
	              throw new Error('You must provide a router context (or use React-Router 2.x) if not passing a redirectAction to ' + wrapperDisplayName);
	            } else {
	              return _this.context.router.replace;
	            }
	          }
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	      }
	
	      _createClass(UserAuthWrapper, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	          if (!this.props.isAuthenticating && !isAuthorized(this.props.authData) && shouldRedirect) {
	            createRedirect(this.props.location, this.getRedirectFunc(this.props), this.props.failureRedirectPath);
	          }
	        }
	      }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	          var willBeAuthorized = isAuthorized(nextProps.authData);
	          var willbeAuthenticating = nextProps.isAuthenticating;
	          var wasAuthorized = isAuthorized(this.props.authData);
	          var wasAuthenticating = this.props.isAuthenticating;
	
	          // Don't bother to redirect if:
	          // 1. currently authenticating or FailureComponent is set
	          if (willbeAuthenticating || !shouldRedirect) return;
	
	          // Redirect if:
	          if ( // 1. Was authorized, but no longer
	          wasAuthorized && !willBeAuthorized ||
	          // 2. Was not authorized and authenticating
	          wasAuthenticating && !willBeAuthorized) {
	            createRedirect(nextProps.location, this.getRedirectFunc(nextProps), nextProps.failureRedirectPath);
	          }
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          // Allow everything but the replace aciton creator to be passed down
	          // Includes route props from React-Router and authData
	          var _props = this.props,
	              authData = _props.authData,
	              isAuthenticating = _props.isAuthenticating;
	
	          if (isAuthorized(authData)) {
	            return _react2.default.createElement(DecoratedComponent, propMapper(this.props));
	          } else if (isAuthenticating) {
	            return _react2.default.createElement(LoadingComponent, propMapper(this.props));
	          } else {
	            // Display FailureComponent or nothing if FailureComponent is null
	            // If FailureComponent is undefined user will never see this because
	            // they will be redirected to failureRedirectPath
	            return FailureComponent ? _react2.default.createElement(FailureComponent, propMapper(this.props)) : null;
	          }
	        }
	      }]);
	
	      return UserAuthWrapper;
	    }(_react.Component), _class2.displayName = wrapperDisplayName + '(' + displayName + ')', _class2.propTypes = {
	      failureRedirectPath: _react.PropTypes.string.isRequired,
	      location: shouldRedirect ? locationShape.isRequired : locationShape,
	      redirect: _react.PropTypes.func,
	      authData: _react.PropTypes.object
	    }, _class2.contextTypes = {
	      // Only used if no redirectAction specified
	      router: _react.PropTypes.object
	    }, _temp2)) || _class);
	
	
	    return (0, _hoistNonReactStatics2.default)(UserAuthWrapper, DecoratedComponent);
	  }
	
	  if (shouldRedirect) {
	    wrapComponent.onEnter = function (store, nextState, replace) {
	      var authData = authSelector(store.getState(), nextState);
	      var isAuthenticating = authenticatingSelector(store.getState(), nextState);
	
	      if (!isAuthorized(authData) && !isAuthenticating) {
	        var redirectPath = typeof failureRedirectPath === 'function' ? failureRedirectPath(store.getState(), nextState) : failureRedirectPath;
	        createRedirect(nextState.location, replace, redirectPath);
	      }
	    };
	  }
	
	  return wrapComponent;
	};

/***/ },

/***/ 757:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';
	
	var dataViewTag = '[object DataView]';
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
	    nativeKeys = overArg(Object.keys, Object);
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView'),
	    Map = getNative(root, 'Map'),
	    Promise = getNative(root, 'Promise'),
	    Set = getNative(root, 'Set'),
	    WeakMap = getNative(root, 'WeakMap');
	
	/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
	var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');
	
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);
	
	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;
	
	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge < 14, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;
	
	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;
	
	/**
	 * Checks if `value` is an empty object, collection, map, or set.
	 *
	 * Objects are considered empty if they have no own enumerable string keyed
	 * properties.
	 *
	 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
	 * jQuery-like collections are considered empty if they have a `length` of `0`.
	 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	 * @example
	 *
	 * _.isEmpty(null);
	 * // => true
	 *
	 * _.isEmpty(true);
	 * // => true
	 *
	 * _.isEmpty(1);
	 * // => true
	 *
	 * _.isEmpty([1, 2, 3]);
	 * // => false
	 *
	 * _.isEmpty({ 'a': 1 });
	 * // => false
	 */
	function isEmpty(value) {
	  if (isArrayLike(value) &&
	      (isArray(value) || typeof value == 'string' ||
	        typeof value.splice == 'function' || isBuffer(value) || isArguments(value))) {
	    return !value.length;
	  }
	  var tag = getTag(value);
	  if (tag == mapTag || tag == setTag) {
	    return !value.size;
	  }
	  if (nonEnumShadows || isPrototype(value)) {
	    return !nativeKeys(value).length;
	  }
	  for (var key in value) {
	    if (hasOwnProperty.call(value, key)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = isEmpty;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(344)(module)))

/***/ },

/***/ 758:
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	var punycode = __webpack_require__(759);
	var util = __webpack_require__(760);
	
	exports.parse = urlParse;
	exports.resolve = urlResolve;
	exports.resolveObject = urlResolveObject;
	exports.format = urlFormat;
	
	exports.Url = Url;
	
	function Url() {
	  this.protocol = null;
	  this.slashes = null;
	  this.auth = null;
	  this.host = null;
	  this.port = null;
	  this.hostname = null;
	  this.hash = null;
	  this.search = null;
	  this.query = null;
	  this.pathname = null;
	  this.path = null;
	  this.href = null;
	}
	
	// Reference: RFC 3986, RFC 1808, RFC 2396
	
	// define these here so at least they only have to be
	// compiled once on the first module load.
	var protocolPattern = /^([a-z0-9.+-]+:)/i,
	    portPattern = /:[0-9]*$/,
	
	    // Special case for a simple path URL
	    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
	
	    // RFC 2396: characters reserved for delimiting URLs.
	    // We actually just auto-escape these.
	    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],
	
	    // RFC 2396: characters not allowed for various reasons.
	    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),
	
	    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
	    autoEscape = ['\''].concat(unwise),
	    // Characters that are never ever allowed in a hostname.
	    // Note that any invalid chars are also handled, but these
	    // are the ones that are *expected* to be seen, so we fast-path
	    // them.
	    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
	    hostEndingChars = ['/', '?', '#'],
	    hostnameMaxLen = 255,
	    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
	    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
	    // protocols that can allow "unsafe" and "unwise" chars.
	    unsafeProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that never have a hostname.
	    hostlessProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that always contain a // bit.
	    slashedProtocol = {
	      'http': true,
	      'https': true,
	      'ftp': true,
	      'gopher': true,
	      'file': true,
	      'http:': true,
	      'https:': true,
	      'ftp:': true,
	      'gopher:': true,
	      'file:': true
	    },
	    querystring = __webpack_require__(761);
	
	function urlParse(url, parseQueryString, slashesDenoteHost) {
	  if (url && util.isObject(url) && url instanceof Url) return url;
	
	  var u = new Url;
	  u.parse(url, parseQueryString, slashesDenoteHost);
	  return u;
	}
	
	Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
	  if (!util.isString(url)) {
	    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
	  }
	
	  // Copy chrome, IE, opera backslash-handling behavior.
	  // Back slashes before the query string get converted to forward slashes
	  // See: https://code.google.com/p/chromium/issues/detail?id=25916
	  var queryIndex = url.indexOf('?'),
	      splitter =
	          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
	      uSplit = url.split(splitter),
	      slashRegex = /\\/g;
	  uSplit[0] = uSplit[0].replace(slashRegex, '/');
	  url = uSplit.join(splitter);
	
	  var rest = url;
	
	  // trim before proceeding.
	  // This is to support parse stuff like "  http://foo.com  \n"
	  rest = rest.trim();
	
	  if (!slashesDenoteHost && url.split('#').length === 1) {
	    // Try fast path regexp
	    var simplePath = simplePathPattern.exec(rest);
	    if (simplePath) {
	      this.path = rest;
	      this.href = rest;
	      this.pathname = simplePath[1];
	      if (simplePath[2]) {
	        this.search = simplePath[2];
	        if (parseQueryString) {
	          this.query = querystring.parse(this.search.substr(1));
	        } else {
	          this.query = this.search.substr(1);
	        }
	      } else if (parseQueryString) {
	        this.search = '';
	        this.query = {};
	      }
	      return this;
	    }
	  }
	
	  var proto = protocolPattern.exec(rest);
	  if (proto) {
	    proto = proto[0];
	    var lowerProto = proto.toLowerCase();
	    this.protocol = lowerProto;
	    rest = rest.substr(proto.length);
	  }
	
	  // figure out if it's got a host
	  // user@server is *always* interpreted as a hostname, and url
	  // resolution will treat //foo/bar as host=foo,path=bar because that's
	  // how the browser resolves relative URLs.
	  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
	    var slashes = rest.substr(0, 2) === '//';
	    if (slashes && !(proto && hostlessProtocol[proto])) {
	      rest = rest.substr(2);
	      this.slashes = true;
	    }
	  }
	
	  if (!hostlessProtocol[proto] &&
	      (slashes || (proto && !slashedProtocol[proto]))) {
	
	    // there's a hostname.
	    // the first instance of /, ?, ;, or # ends the host.
	    //
	    // If there is an @ in the hostname, then non-host chars *are* allowed
	    // to the left of the last @ sign, unless some host-ending character
	    // comes *before* the @-sign.
	    // URLs are obnoxious.
	    //
	    // ex:
	    // http://a@b@c/ => user:a@b host:c
	    // http://a@b?@c => user:a host:c path:/?@c
	
	    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
	    // Review our test case against browsers more comprehensively.
	
	    // find the first instance of any hostEndingChars
	    var hostEnd = -1;
	    for (var i = 0; i < hostEndingChars.length; i++) {
	      var hec = rest.indexOf(hostEndingChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }
	
	    // at this point, either we have an explicit point where the
	    // auth portion cannot go past, or the last @ char is the decider.
	    var auth, atSign;
	    if (hostEnd === -1) {
	      // atSign can be anywhere.
	      atSign = rest.lastIndexOf('@');
	    } else {
	      // atSign must be in auth portion.
	      // http://a@b/c@d => host:b auth:a path:/c@d
	      atSign = rest.lastIndexOf('@', hostEnd);
	    }
	
	    // Now we have a portion which is definitely the auth.
	    // Pull that off.
	    if (atSign !== -1) {
	      auth = rest.slice(0, atSign);
	      rest = rest.slice(atSign + 1);
	      this.auth = decodeURIComponent(auth);
	    }
	
	    // the host is the remaining to the left of the first non-host char
	    hostEnd = -1;
	    for (var i = 0; i < nonHostChars.length; i++) {
	      var hec = rest.indexOf(nonHostChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }
	    // if we still have not hit it, then the entire thing is a host.
	    if (hostEnd === -1)
	      hostEnd = rest.length;
	
	    this.host = rest.slice(0, hostEnd);
	    rest = rest.slice(hostEnd);
	
	    // pull out port.
	    this.parseHost();
	
	    // we've indicated that there is a hostname,
	    // so even if it's empty, it has to be present.
	    this.hostname = this.hostname || '';
	
	    // if hostname begins with [ and ends with ]
	    // assume that it's an IPv6 address.
	    var ipv6Hostname = this.hostname[0] === '[' &&
	        this.hostname[this.hostname.length - 1] === ']';
	
	    // validate a little.
	    if (!ipv6Hostname) {
	      var hostparts = this.hostname.split(/\./);
	      for (var i = 0, l = hostparts.length; i < l; i++) {
	        var part = hostparts[i];
	        if (!part) continue;
	        if (!part.match(hostnamePartPattern)) {
	          var newpart = '';
	          for (var j = 0, k = part.length; j < k; j++) {
	            if (part.charCodeAt(j) > 127) {
	              // we replace non-ASCII char with a temporary placeholder
	              // we need this to make sure size of hostname is not
	              // broken by replacing non-ASCII by nothing
	              newpart += 'x';
	            } else {
	              newpart += part[j];
	            }
	          }
	          // we test again with ASCII char only
	          if (!newpart.match(hostnamePartPattern)) {
	            var validParts = hostparts.slice(0, i);
	            var notHost = hostparts.slice(i + 1);
	            var bit = part.match(hostnamePartStart);
	            if (bit) {
	              validParts.push(bit[1]);
	              notHost.unshift(bit[2]);
	            }
	            if (notHost.length) {
	              rest = '/' + notHost.join('.') + rest;
	            }
	            this.hostname = validParts.join('.');
	            break;
	          }
	        }
	      }
	    }
	
	    if (this.hostname.length > hostnameMaxLen) {
	      this.hostname = '';
	    } else {
	      // hostnames are always lower case.
	      this.hostname = this.hostname.toLowerCase();
	    }
	
	    if (!ipv6Hostname) {
	      // IDNA Support: Returns a punycoded representation of "domain".
	      // It only converts parts of the domain name that
	      // have non-ASCII characters, i.e. it doesn't matter if
	      // you call it with a domain that already is ASCII-only.
	      this.hostname = punycode.toASCII(this.hostname);
	    }
	
	    var p = this.port ? ':' + this.port : '';
	    var h = this.hostname || '';
	    this.host = h + p;
	    this.href += this.host;
	
	    // strip [ and ] from the hostname
	    // the host field still retains them, though
	    if (ipv6Hostname) {
	      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
	      if (rest[0] !== '/') {
	        rest = '/' + rest;
	      }
	    }
	  }
	
	  // now rest is set to the post-host stuff.
	  // chop off any delim chars.
	  if (!unsafeProtocol[lowerProto]) {
	
	    // First, make 100% sure that any "autoEscape" chars get
	    // escaped, even if encodeURIComponent doesn't think they
	    // need to be.
	    for (var i = 0, l = autoEscape.length; i < l; i++) {
	      var ae = autoEscape[i];
	      if (rest.indexOf(ae) === -1)
	        continue;
	      var esc = encodeURIComponent(ae);
	      if (esc === ae) {
	        esc = escape(ae);
	      }
	      rest = rest.split(ae).join(esc);
	    }
	  }
	
	
	  // chop off from the tail first.
	  var hash = rest.indexOf('#');
	  if (hash !== -1) {
	    // got a fragment string.
	    this.hash = rest.substr(hash);
	    rest = rest.slice(0, hash);
	  }
	  var qm = rest.indexOf('?');
	  if (qm !== -1) {
	    this.search = rest.substr(qm);
	    this.query = rest.substr(qm + 1);
	    if (parseQueryString) {
	      this.query = querystring.parse(this.query);
	    }
	    rest = rest.slice(0, qm);
	  } else if (parseQueryString) {
	    // no query string, but parseQueryString still requested
	    this.search = '';
	    this.query = {};
	  }
	  if (rest) this.pathname = rest;
	  if (slashedProtocol[lowerProto] &&
	      this.hostname && !this.pathname) {
	    this.pathname = '/';
	  }
	
	  //to support http.request
	  if (this.pathname || this.search) {
	    var p = this.pathname || '';
	    var s = this.search || '';
	    this.path = p + s;
	  }
	
	  // finally, reconstruct the href based on what has been validated.
	  this.href = this.format();
	  return this;
	};
	
	// format a parsed object into a url string
	function urlFormat(obj) {
	  // ensure it's an object, and not a string url.
	  // If it's an obj, this is a no-op.
	  // this way, you can call url_format() on strings
	  // to clean up potentially wonky urls.
	  if (util.isString(obj)) obj = urlParse(obj);
	  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
	  return obj.format();
	}
	
	Url.prototype.format = function() {
	  var auth = this.auth || '';
	  if (auth) {
	    auth = encodeURIComponent(auth);
	    auth = auth.replace(/%3A/i, ':');
	    auth += '@';
	  }
	
	  var protocol = this.protocol || '',
	      pathname = this.pathname || '',
	      hash = this.hash || '',
	      host = false,
	      query = '';
	
	  if (this.host) {
	    host = auth + this.host;
	  } else if (this.hostname) {
	    host = auth + (this.hostname.indexOf(':') === -1 ?
	        this.hostname :
	        '[' + this.hostname + ']');
	    if (this.port) {
	      host += ':' + this.port;
	    }
	  }
	
	  if (this.query &&
	      util.isObject(this.query) &&
	      Object.keys(this.query).length) {
	    query = querystring.stringify(this.query);
	  }
	
	  var search = this.search || (query && ('?' + query)) || '';
	
	  if (protocol && protocol.substr(-1) !== ':') protocol += ':';
	
	  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
	  // unless they had them to begin with.
	  if (this.slashes ||
	      (!protocol || slashedProtocol[protocol]) && host !== false) {
	    host = '//' + (host || '');
	    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
	  } else if (!host) {
	    host = '';
	  }
	
	  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
	  if (search && search.charAt(0) !== '?') search = '?' + search;
	
	  pathname = pathname.replace(/[?#]/g, function(match) {
	    return encodeURIComponent(match);
	  });
	  search = search.replace('#', '%23');
	
	  return protocol + host + pathname + search + hash;
	};
	
	function urlResolve(source, relative) {
	  return urlParse(source, false, true).resolve(relative);
	}
	
	Url.prototype.resolve = function(relative) {
	  return this.resolveObject(urlParse(relative, false, true)).format();
	};
	
	function urlResolveObject(source, relative) {
	  if (!source) return relative;
	  return urlParse(source, false, true).resolveObject(relative);
	}
	
	Url.prototype.resolveObject = function(relative) {
	  if (util.isString(relative)) {
	    var rel = new Url();
	    rel.parse(relative, false, true);
	    relative = rel;
	  }
	
	  var result = new Url();
	  var tkeys = Object.keys(this);
	  for (var tk = 0; tk < tkeys.length; tk++) {
	    var tkey = tkeys[tk];
	    result[tkey] = this[tkey];
	  }
	
	  // hash is always overridden, no matter what.
	  // even href="" will remove it.
	  result.hash = relative.hash;
	
	  // if the relative url is empty, then there's nothing left to do here.
	  if (relative.href === '') {
	    result.href = result.format();
	    return result;
	  }
	
	  // hrefs like //foo/bar always cut to the protocol.
	  if (relative.slashes && !relative.protocol) {
	    // take everything except the protocol from relative
	    var rkeys = Object.keys(relative);
	    for (var rk = 0; rk < rkeys.length; rk++) {
	      var rkey = rkeys[rk];
	      if (rkey !== 'protocol')
	        result[rkey] = relative[rkey];
	    }
	
	    //urlParse appends trailing / to urls like http://www.example.com
	    if (slashedProtocol[result.protocol] &&
	        result.hostname && !result.pathname) {
	      result.path = result.pathname = '/';
	    }
	
	    result.href = result.format();
	    return result;
	  }
	
	  if (relative.protocol && relative.protocol !== result.protocol) {
	    // if it's a known url protocol, then changing
	    // the protocol does weird things
	    // first, if it's not file:, then we MUST have a host,
	    // and if there was a path
	    // to begin with, then we MUST have a path.
	    // if it is file:, then the host is dropped,
	    // because that's known to be hostless.
	    // anything else is assumed to be absolute.
	    if (!slashedProtocol[relative.protocol]) {
	      var keys = Object.keys(relative);
	      for (var v = 0; v < keys.length; v++) {
	        var k = keys[v];
	        result[k] = relative[k];
	      }
	      result.href = result.format();
	      return result;
	    }
	
	    result.protocol = relative.protocol;
	    if (!relative.host && !hostlessProtocol[relative.protocol]) {
	      var relPath = (relative.pathname || '').split('/');
	      while (relPath.length && !(relative.host = relPath.shift()));
	      if (!relative.host) relative.host = '';
	      if (!relative.hostname) relative.hostname = '';
	      if (relPath[0] !== '') relPath.unshift('');
	      if (relPath.length < 2) relPath.unshift('');
	      result.pathname = relPath.join('/');
	    } else {
	      result.pathname = relative.pathname;
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    result.host = relative.host || '';
	    result.auth = relative.auth;
	    result.hostname = relative.hostname || relative.host;
	    result.port = relative.port;
	    // to support http.request
	    if (result.pathname || result.search) {
	      var p = result.pathname || '';
	      var s = result.search || '';
	      result.path = p + s;
	    }
	    result.slashes = result.slashes || relative.slashes;
	    result.href = result.format();
	    return result;
	  }
	
	  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
	      isRelAbs = (
	          relative.host ||
	          relative.pathname && relative.pathname.charAt(0) === '/'
	      ),
	      mustEndAbs = (isRelAbs || isSourceAbs ||
	                    (result.host && relative.pathname)),
	      removeAllDots = mustEndAbs,
	      srcPath = result.pathname && result.pathname.split('/') || [],
	      relPath = relative.pathname && relative.pathname.split('/') || [],
	      psychotic = result.protocol && !slashedProtocol[result.protocol];
	
	  // if the url is a non-slashed url, then relative
	  // links like ../.. should be able
	  // to crawl up to the hostname, as well.  This is strange.
	  // result.protocol has already been set by now.
	  // Later on, put the first path part into the host field.
	  if (psychotic) {
	    result.hostname = '';
	    result.port = null;
	    if (result.host) {
	      if (srcPath[0] === '') srcPath[0] = result.host;
	      else srcPath.unshift(result.host);
	    }
	    result.host = '';
	    if (relative.protocol) {
	      relative.hostname = null;
	      relative.port = null;
	      if (relative.host) {
	        if (relPath[0] === '') relPath[0] = relative.host;
	        else relPath.unshift(relative.host);
	      }
	      relative.host = null;
	    }
	    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
	  }
	
	  if (isRelAbs) {
	    // it's absolute.
	    result.host = (relative.host || relative.host === '') ?
	                  relative.host : result.host;
	    result.hostname = (relative.hostname || relative.hostname === '') ?
	                      relative.hostname : result.hostname;
	    result.search = relative.search;
	    result.query = relative.query;
	    srcPath = relPath;
	    // fall through to the dot-handling below.
	  } else if (relPath.length) {
	    // it's relative
	    // throw away the existing file, and take the new path instead.
	    if (!srcPath) srcPath = [];
	    srcPath.pop();
	    srcPath = srcPath.concat(relPath);
	    result.search = relative.search;
	    result.query = relative.query;
	  } else if (!util.isNullOrUndefined(relative.search)) {
	    // just pull out the search.
	    // like href='?foo'.
	    // Put this after the other two cases because it simplifies the booleans
	    if (psychotic) {
	      result.hostname = result.host = srcPath.shift();
	      //occationaly the auth can get stuck only in host
	      //this especially happens in cases like
	      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	      var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                       result.host.split('@') : false;
	      if (authInHost) {
	        result.auth = authInHost.shift();
	        result.host = result.hostname = authInHost.shift();
	      }
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    //to support http.request
	    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
	      result.path = (result.pathname ? result.pathname : '') +
	                    (result.search ? result.search : '');
	    }
	    result.href = result.format();
	    return result;
	  }
	
	  if (!srcPath.length) {
	    // no path at all.  easy.
	    // we've already handled the other stuff above.
	    result.pathname = null;
	    //to support http.request
	    if (result.search) {
	      result.path = '/' + result.search;
	    } else {
	      result.path = null;
	    }
	    result.href = result.format();
	    return result;
	  }
	
	  // if a url ENDs in . or .., then it must get a trailing slash.
	  // however, if it ends in anything else non-slashy,
	  // then it must NOT get a trailing slash.
	  var last = srcPath.slice(-1)[0];
	  var hasTrailingSlash = (
	      (result.host || relative.host || srcPath.length > 1) &&
	      (last === '.' || last === '..') || last === '');
	
	  // strip single dots, resolve double dots to parent dir
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = srcPath.length; i >= 0; i--) {
	    last = srcPath[i];
	    if (last === '.') {
	      srcPath.splice(i, 1);
	    } else if (last === '..') {
	      srcPath.splice(i, 1);
	      up++;
	    } else if (up) {
	      srcPath.splice(i, 1);
	      up--;
	    }
	  }
	
	  // if the path is allowed to go above the root, restore leading ..s
	  if (!mustEndAbs && !removeAllDots) {
	    for (; up--; up) {
	      srcPath.unshift('..');
	    }
	  }
	
	  if (mustEndAbs && srcPath[0] !== '' &&
	      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
	    srcPath.unshift('');
	  }
	
	  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
	    srcPath.push('');
	  }
	
	  var isAbsolute = srcPath[0] === '' ||
	      (srcPath[0] && srcPath[0].charAt(0) === '/');
	
	  // put the host back
	  if (psychotic) {
	    result.hostname = result.host = isAbsolute ? '' :
	                                    srcPath.length ? srcPath.shift() : '';
	    //occationaly the auth can get stuck only in host
	    //this especially happens in cases like
	    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	    var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                     result.host.split('@') : false;
	    if (authInHost) {
	      result.auth = authInHost.shift();
	      result.host = result.hostname = authInHost.shift();
	    }
	  }
	
	  mustEndAbs = mustEndAbs || (result.host && srcPath.length);
	
	  if (mustEndAbs && !isAbsolute) {
	    srcPath.unshift('');
	  }
	
	  if (!srcPath.length) {
	    result.pathname = null;
	    result.path = null;
	  } else {
	    result.pathname = srcPath.join('/');
	  }
	
	  //to support request.http
	  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
	    result.path = (result.pathname ? result.pathname : '') +
	                  (result.search ? result.search : '');
	  }
	  result.auth = relative.auth || result.auth;
	  result.slashes = result.slashes || relative.slashes;
	  result.href = result.format();
	  return result;
	};
	
	Url.prototype.parseHost = function() {
	  var host = this.host;
	  var port = portPattern.exec(host);
	  if (port) {
	    port = port[0];
	    if (port !== ':') {
	      this.port = port.substr(1);
	    }
	    host = host.substr(0, host.length - port.length);
	  }
	  if (host) this.hostname = host;
	};


/***/ },

/***/ 759:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/punycode v1.3.2 by @mathias */
	;(function(root) {
	
		/** Detect free variables */
		var freeExports = typeof exports == 'object' && exports &&
			!exports.nodeType && exports;
		var freeModule = typeof module == 'object' && module &&
			!module.nodeType && module;
		var freeGlobal = typeof global == 'object' && global;
		if (
			freeGlobal.global === freeGlobal ||
			freeGlobal.window === freeGlobal ||
			freeGlobal.self === freeGlobal
		) {
			root = freeGlobal;
		}
	
		/**
		 * The `punycode` object.
		 * @name punycode
		 * @type Object
		 */
		var punycode,
	
		/** Highest positive signed 32-bit float value */
		maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1
	
		/** Bootstring parameters */
		base = 36,
		tMin = 1,
		tMax = 26,
		skew = 38,
		damp = 700,
		initialBias = 72,
		initialN = 128, // 0x80
		delimiter = '-', // '\x2D'
	
		/** Regular expressions */
		regexPunycode = /^xn--/,
		regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators
	
		/** Error messages */
		errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},
	
		/** Convenience shortcuts */
		baseMinusTMin = base - tMin,
		floor = Math.floor,
		stringFromCharCode = String.fromCharCode,
	
		/** Temporary variable */
		key;
	
		/*--------------------------------------------------------------------------*/
	
		/**
		 * A generic error utility function.
		 * @private
		 * @param {String} type The error type.
		 * @returns {Error} Throws a `RangeError` with the applicable error message.
		 */
		function error(type) {
			throw RangeError(errors[type]);
		}
	
		/**
		 * A generic `Array#map` utility function.
		 * @private
		 * @param {Array} array The array to iterate over.
		 * @param {Function} callback The function that gets called for every array
		 * item.
		 * @returns {Array} A new array of values returned by the callback function.
		 */
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}
	
		/**
		 * A simple `Array#map`-like wrapper to work with domain name strings or email
		 * addresses.
		 * @private
		 * @param {String} domain The domain name or email address.
		 * @param {Function} callback The function that gets called for every
		 * character.
		 * @returns {Array} A new string of characters returned by the callback
		 * function.
		 */
		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				// In email addresses, only the domain name should be punycoded. Leave
				// the local part (i.e. everything up to `@`) intact.
				result = parts[0] + '@';
				string = parts[1];
			}
			// Avoid `split(regex)` for IE8 compatibility. See #17.
			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}
	
		/**
		 * Creates an array containing the numeric code points of each Unicode
		 * character in the string. While JavaScript uses UCS-2 internally,
		 * this function will convert a pair of surrogate halves (each of which
		 * UCS-2 exposes as separate characters) into a single code point,
		 * matching UTF-16.
		 * @see `punycode.ucs2.encode`
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode.ucs2
		 * @name decode
		 * @param {String} string The Unicode input string (UCS-2).
		 * @returns {Array} The new array of code points.
		 */
		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}
	
		/**
		 * Creates a string based on an array of numeric code points.
		 * @see `punycode.ucs2.decode`
		 * @memberOf punycode.ucs2
		 * @name encode
		 * @param {Array} codePoints The array of numeric code points.
		 * @returns {String} The new Unicode string (UCS-2).
		 */
		function ucs2encode(array) {
			return map(array, function(value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}
	
		/**
		 * Converts a basic code point into a digit/integer.
		 * @see `digitToBasic()`
		 * @private
		 * @param {Number} codePoint The basic numeric code point value.
		 * @returns {Number} The numeric value of a basic code point (for use in
		 * representing integers) in the range `0` to `base - 1`, or `base` if
		 * the code point does not represent a value.
		 */
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}
	
		/**
		 * Converts a digit/integer into a basic code point.
		 * @see `basicToDigit()`
		 * @private
		 * @param {Number} digit The numeric value of a basic code point.
		 * @returns {Number} The basic code point whose value (when used for
		 * representing integers) is `digit`, which needs to be in the range
		 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
		 * used; else, the lowercase form is used. The behavior is undefined
		 * if `flag` is non-zero and `digit` has no uppercase form.
		 */
		function digitToBasic(digit, flag) {
			//  0..25 map to ASCII a..z or A..Z
			// 26..35 map to ASCII 0..9
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}
	
		/**
		 * Bias adaptation function as per section 3.4 of RFC 3492.
		 * http://tools.ietf.org/html/rfc3492#section-3.4
		 * @private
		 */
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}
	
		/**
		 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
		 * symbols.
		 * @memberOf punycode
		 * @param {String} input The Punycode string of ASCII-only symbols.
		 * @returns {String} The resulting string of Unicode symbols.
		 */
		function decode(input) {
			// Don't use UCS-2
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,
			    /** Cached calculation results */
			    baseMinusT;
	
			// Handle the basic code points: let `basic` be the number of input code
			// points before the last delimiter, or `0` if there is none, then copy
			// the first basic code points to the output.
	
			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}
	
			for (j = 0; j < basic; ++j) {
				// if it's not a basic code point
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}
	
			// Main decoding loop: start just after the last delimiter if any basic code
			// points were copied; start at the beginning otherwise.
	
			for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {
	
				// `index` is the index of the next character to be consumed.
				// Decode a generalized variable-length integer into `delta`,
				// which gets added to `i`. The overflow checking is easier
				// if we increase `i` as we go, then subtract off its starting
				// value at the end to obtain `delta`.
				for (oldi = i, w = 1, k = base; /* no condition */; k += base) {
	
					if (index >= inputLength) {
						error('invalid-input');
					}
	
					digit = basicToDigit(input.charCodeAt(index++));
	
					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}
	
					i += digit * w;
					t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
	
					if (digit < t) {
						break;
					}
	
					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}
	
					w *= baseMinusT;
	
				}
	
				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);
	
				// `i` was supposed to wrap around from `out` to `0`,
				// incrementing `n` each time, so we'll fix that now:
				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}
	
				n += floor(i / out);
				i %= out;
	
				// Insert `n` at position `i` of the output
				output.splice(i++, 0, n);
	
			}
	
			return ucs2encode(output);
		}
	
		/**
		 * Converts a string of Unicode symbols (e.g. a domain name label) to a
		 * Punycode string of ASCII-only symbols.
		 * @memberOf punycode
		 * @param {String} input The string of Unicode symbols.
		 * @returns {String} The resulting Punycode string of ASCII-only symbols.
		 */
		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],
			    /** `inputLength` will hold the number of code points in `input`. */
			    inputLength,
			    /** Cached calculation results */
			    handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;
	
			// Convert the input in UCS-2 to Unicode
			input = ucs2decode(input);
	
			// Cache the length
			inputLength = input.length;
	
			// Initialize the state
			n = initialN;
			delta = 0;
			bias = initialBias;
	
			// Handle the basic code points
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}
	
			handledCPCount = basicLength = output.length;
	
			// `handledCPCount` is the number of code points that have been handled;
			// `basicLength` is the number of basic code points.
	
			// Finish the basic string - if it is not empty - with a delimiter
			if (basicLength) {
				output.push(delimiter);
			}
	
			// Main encoding loop:
			while (handledCPCount < inputLength) {
	
				// All non-basic code points < n have been handled already. Find the next
				// larger one:
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}
	
				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
				// but guard against overflow
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}
	
				delta += (m - n) * handledCPCountPlusOne;
				n = m;
	
				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];
	
					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}
	
					if (currentValue == n) {
						// Represent delta as a generalized variable-length integer
						for (q = delta, k = base; /* no condition */; k += base) {
							t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(
								stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
							);
							q = floor(qMinusT / baseMinusT);
						}
	
						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}
	
				++delta;
				++n;
	
			}
			return output.join('');
		}
	
		/**
		 * Converts a Punycode string representing a domain name or an email address
		 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
		 * it doesn't matter if you call it on a string that has already been
		 * converted to Unicode.
		 * @memberOf punycode
		 * @param {String} input The Punycoded domain name or email address to
		 * convert to Unicode.
		 * @returns {String} The Unicode representation of the given Punycode
		 * string.
		 */
		function toUnicode(input) {
			return mapDomain(input, function(string) {
				return regexPunycode.test(string)
					? decode(string.slice(4).toLowerCase())
					: string;
			});
		}
	
		/**
		 * Converts a Unicode string representing a domain name or an email address to
		 * Punycode. Only the non-ASCII parts of the domain name will be converted,
		 * i.e. it doesn't matter if you call it with a domain that's already in
		 * ASCII.
		 * @memberOf punycode
		 * @param {String} input The domain name or email address to convert, as a
		 * Unicode string.
		 * @returns {String} The Punycode representation of the given domain name or
		 * email address.
		 */
		function toASCII(input) {
			return mapDomain(input, function(string) {
				return regexNonASCII.test(string)
					? 'xn--' + encode(string)
					: string;
			});
		}
	
		/*--------------------------------------------------------------------------*/
	
		/** Define the public API */
		punycode = {
			/**
			 * A string representing the current Punycode.js version number.
			 * @memberOf punycode
			 * @type String
			 */
			'version': '1.3.2',
			/**
			 * An object of methods to convert from JavaScript's internal character
			 * representation (UCS-2) to Unicode code points, and back.
			 * @see <https://mathiasbynens.be/notes/javascript-encoding>
			 * @memberOf punycode
			 * @type Object
			 */
			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};
	
		/** Expose `punycode` */
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return punycode;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (freeExports && freeModule) {
			if (module.exports == freeExports) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = punycode;
			} else { // in Narwhal or RingoJS v0.7.0-
				for (key in punycode) {
					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.punycode = punycode;
		}
	
	}(this));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(344)(module), (function() { return this; }())))

/***/ },

/***/ 760:
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  isString: function(arg) {
	    return typeof(arg) === 'string';
	  },
	  isObject: function(arg) {
	    return typeof(arg) === 'object' && arg !== null;
	  },
	  isNull: function(arg) {
	    return arg === null;
	  },
	  isNullOrUndefined: function(arg) {
	    return arg == null;
	  }
	};


/***/ },

/***/ 764:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.formNames = exports.paths = undefined;
	
	var _extends2 = __webpack_require__(421);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _paths = __webpack_require__(637);
	
	var _paths2 = _interopRequireDefault(_paths);
	
	var _formNames = __webpack_require__(765);
	
	var _formNames2 = _interopRequireDefault(_formNames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.paths = _paths2.default;
	exports.formNames = _formNames2.default;
	exports.default = (0, _extends3.default)({}, _paths2.default, _formNames2.default);

/***/ },

/***/ 765:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ACCOUNT_FORM_NAME = exports.ACCOUNT_FORM_NAME = 'account';
	var RECOVER_CODE_FORM_NAME = exports.RECOVER_CODE_FORM_NAME = 'recoverCode';
	var RECOVER_EMAIL_FORM_NAME = exports.RECOVER_EMAIL_FORM_NAME = 'recoverEmail';
	
	exports.default = {
	  ACCOUNT_FORM_NAME: ACCOUNT_FORM_NAME,
	  RECOVER_CODE_FORM_NAME: RECOVER_CODE_FORM_NAME,
	  RECOVER_EMAIL_FORM_NAME: RECOVER_EMAIL_FORM_NAME,
	  account: ACCOUNT_FORM_NAME,
	  recoverCode: RECOVER_CODE_FORM_NAME,
	  recoverEmail: RECOVER_EMAIL_FORM_NAME
	};

/***/ },

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

/***/ 770:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LoginForm = undefined;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(260);
	
	var _RaisedButton = __webpack_require__(771);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _Checkbox = __webpack_require__(732);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _reduxForm = __webpack_require__(428);
	
	var _TextField = __webpack_require__(773);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _LoginForm = __webpack_require__(775);
	
	var _LoginForm2 = _interopRequireDefault(_LoginForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var validate = function validate(values) {
	  var errors = {};
	  if (!values.email) errors.email = 'Required';
	  if (!values.password) errors.password = 'Required';
	  return errors;
	};
	
	var LoginForm = exports.LoginForm = function LoginForm(_ref) {
	  var handleSubmit = _ref.handleSubmit,
	      submitting = _ref.submitting;
	  return _react2.default.createElement(
	    'form',
	    { className: _LoginForm2.default['container'], onSubmit: handleSubmit },
	    _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_reduxForm.Field, {
	        name: 'email',
	        component: _TextField2.default,
	        label: 'Email'
	      })
	    ),
	    _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_reduxForm.Field, {
	        name: 'password',
	        component: _TextField2.default,
	        label: 'Password',
	        type: 'password'
	      })
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: _LoginForm2.default['submit'] },
	      _react2.default.createElement(_RaisedButton2.default, {
	        label: 'Login',
	        primary: true,
	        type: 'submit',
	        disabled: submitting
	      })
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: _LoginForm2.default['options'] },
	      _react2.default.createElement(
	        'div',
	        { className: _LoginForm2.default['remember'] },
	        _react2.default.createElement(_Checkbox2.default, {
	          name: 'remember',
	          value: 'remember',
	          label: 'Remember',
	          labelStyle: { fontSize: '.8rem' }
	        })
	      ),
	      _react2.default.createElement(
	        _reactRouter.Link,
	        { className: _LoginForm2.default['recover'], to: '/recover' },
	        'Forgot Password?'
	      )
	    )
	  );
	};
	
	LoginForm.propTypes = {
	  handleSubmit: _react.PropTypes.func,
	  submitting: _react.PropTypes.bool
	};
	
	exports.default = (0, _reduxForm.reduxForm)({
	  form: 'Login',
	  validate: validate
	})(LoginForm);

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

/***/ 775:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(776);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(636)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(776, function() {
				var newContent = __webpack_require__(776);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 776:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(635)();
	// imports
	
	
	// module
	exports.push([module.id, ".LoginForm__container___1cqM3,.LoginForm__flex___2r1ta,.LoginForm__flex-column___2tytw,.LoginForm__flex-column-center___G5v1W,.LoginForm__flex-row___1oOi3,.LoginForm__flex-row-center___TcCvw,.LoginForm__options___OXQl1,.LoginForm__remember___ZOgTv,.LoginForm__submit___2H7AJ{display:flex;display:-ms-flexbox;display:-webkit-flex}.LoginForm__container___1cqM3,.LoginForm__flex-column___2tytw,.LoginForm__flex-column-center___G5v1W,.LoginForm__submit___2H7AJ{-ms-flex-direction:column;flex-direction:column}.LoginForm__container___1cqM3,.LoginForm__flex-column-center___G5v1W,.LoginForm__submit___2H7AJ{-ms-flex-align:center;align-items:center}.LoginForm__flex-row___1oOi3,.LoginForm__flex-row-center___TcCvw,.LoginForm__options___OXQl1,.LoginForm__remember___ZOgTv{-ms-flex-direction:row;flex-direction:row}.LoginForm__flex-row-center___TcCvw{-ms-flex-pack:center;justify-content:center}.LoginForm__container___1cqM3{-ms-flex-pack:start;justify-content:flex-start;-ms-flex-positive:1;flex-grow:1;height:100%;width:100%;margin:.2rem}.LoginForm__submit___2H7AJ{width:30%;min-width:192px;margin-top:1.5rem;text-align:center}.LoginForm__options___OXQl1{-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;margin-top:2rem;width:80%}@media (max-width:767px){.LoginForm__options___OXQl1{-ms-flex-direction:column;flex-direction:column}}.LoginForm__remember___ZOgTv{-ms-flex-preferred-size:50%;flex-basis:50%}@media (max-width:767px){.LoginForm__remember___ZOgTv{display:none}}.LoginForm__recover___GRyuS{display:inline;font-size:.8rem}.LoginForm__recover___GRyuS .LoginForm__hover___3vGim{text-decoration:underline}@media (max-width:767px){.LoginForm__recover___GRyuS{font-size:1rem}}.LoginForm__progress___3x9Om{margin-top:5rem}", "", {"version":3,"sources":["/./src/routes/Login/components/LoginForm/src/styles/_standard-classes.scss","/./src/routes/Login/components/LoginForm/src/routes/Login/components/LoginForm/LoginForm.scss"],"names":[],"mappings":"AAAA,mRACE,aAAc,oBAGO,oBACC,CACvB,gIAGC,0BAAA,qBAAuB,CAFzB,gGAMI,sBAAA,kBAAoB,CACrB,0HAID,uBAAA,kBAAoB,CAFtB,oCAMI,qBAAA,sBAAwB,CACzB,8BCnBD,oBAAA,2BAA4B,oBAC5B,YAAa,YACA,WACD,YACE,CACf,2BAIC,UAAW,gBACM,kBACE,iBACA,CACpB,4BAIC,sBAAA,mBAAoB,sBACpB,8BAA+B,gBACd,SACN,CAIZ,yBATD,4BAOI,0BAAA,qBAAuB,CAE1B,CAAA,6BAGC,4BAAA,cAAgB,CAIjB,yBAND,6BAII,YAAc,CAEjB,CAAA,4BAEC,eAAgB,eACC,CAFnB,sDAII,yBAA2B,CAC5B,yBALH,4BAOI,cAAgB,CAEnB,CAAA,6BAEC,eAAiB,CAClB","file":"LoginForm.scss","sourcesContent":[".flex {\n  display: flex;             /* NEW, Spec - Opera 12.1, Firefox 20+ */\n  display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */\n  display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */\n  display: -ms-flexbox;      /* TWEENER - IE 10 */\n  display: -webkit-flex;     /* NEW - Chrome */\n}\n.flex-column {\n  @extend .flex;\n  flex-direction: column;\n  &-center {\n    @extend .flex;\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.flex-row {\n  @extend .flex;\n  flex-direction: row;\n  &-center {\n    @extend .flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n}\n","@import 'base';\n\n.container {\n  @extend .flex-column-center;\n  justify-content: flex-start;\n  flex-grow: 1;\n  height: 100%;\n  width: 100%;\n  margin: .2rem;\n}\n\n.submit {\n  @extend .flex-column-center;\n  width: 30%;\n  min-width: 192px;\n  margin-top: 1.5rem;\n  text-align: center;\n}\n\n.options {\n  @extend .flex-row;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 2rem;\n  width: 80%;\n  @include mobile {\n    flex-direction: column;\n  }\n}\n.remember {\n  @extend .flex-row;\n  flex-basis: 50%;\n  @include mobile {\n    display: none;\n  }\n}\n.recover {\n  display: inline;\n  font-size: .8rem;\n  .hover {\n    text-decoration: underline;\n  }\n  @include mobile {\n    font-size: 1rem;\n  }\n}\n.progress {\n  margin-top: 5rem;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"container": "LoginForm__container___1cqM3",
		"flex": "LoginForm__flex___2r1ta",
		"flex-column": "LoginForm__flex-column___2tytw",
		"flex-column-center": "LoginForm__flex-column-center___G5v1W",
		"flex-row": "LoginForm__flex-row___1oOi3",
		"flex-row-center": "LoginForm__flex-row-center___TcCvw",
		"options": "LoginForm__options___OXQl1",
		"remember": "LoginForm__remember___ZOgTv",
		"submit": "LoginForm__submit___2H7AJ",
		"recover": "LoginForm__recover___GRyuS",
		"hover": "LoginForm__hover___3vGim",
		"progress": "LoginForm__progress___3x9Om"
	};

/***/ },

/***/ 777:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(778);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(636)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(778, function() {
				var newContent = __webpack_require__(778);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 778:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(635)();
	// imports
	
	
	// module
	exports.push([module.id, ".LoginContainer__container___2N3Kp,.LoginContainer__flex___1ynDE,.LoginContainer__flex-column___3tMKa,.LoginContainer__flex-column-center___1B3io,.LoginContainer__flex-row___1NGzG,.LoginContainer__flex-row-center___1LmwX,.LoginContainer__panel___zMpxJ,.LoginContainer__signup___HBo4S{display:flex;display:-ms-flexbox;display:-webkit-flex}.LoginContainer__container___2N3Kp,.LoginContainer__flex-column___3tMKa,.LoginContainer__flex-column-center___1B3io,.LoginContainer__panel___zMpxJ,.LoginContainer__signup___HBo4S{-ms-flex-direction:column;flex-direction:column}.LoginContainer__container___2N3Kp,.LoginContainer__flex-column-center___1B3io,.LoginContainer__panel___zMpxJ,.LoginContainer__signup___HBo4S{-ms-flex-align:center;align-items:center}.LoginContainer__flex-row___1NGzG,.LoginContainer__flex-row-center___1LmwX{-ms-flex-direction:row;flex-direction:row}.LoginContainer__flex-row-center___1LmwX{-ms-flex-pack:center;justify-content:center}.LoginContainer__container___2N3Kp{-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;height:100%;width:100%;font-weight:400;padding-top:1.5rem}.LoginContainer__panel___zMpxJ{-ms-flex-pack:center;justify-content:center;padding:1.25rem;width:35%;min-width:250px;min-height:270px}@media (max-width:767px){.LoginContainer__panel___zMpxJ{width:75%}}.LoginContainer__or___14uym{margin-top:1rem;margin-bottom:.5rem;font-size:1.3rem}.LoginContainer__signup___HBo4S{-ms-flex-pack:center;justify-content:center;margin-top:2rem}.LoginContainer__signup-link___sCITK{font-size:1.2rem}.LoginContainer__signup-label___2Ts0T{font-size:1.3rem;font-size:1rem;font-weight:700;color:#979797;font-weight:400}.LoginContainer__providers___2sPFC{margin-top:1rem}", "", {"version":3,"sources":["/./src/routes/Login/containers/src/styles/_standard-classes.scss","/./src/routes/Login/containers/src/routes/Login/containers/LoginContainer.scss"],"names":[],"mappings":"AAAA,4RACE,aAAc,oBAGO,oBACC,CACvB,mLAGC,0BAAA,qBAAuB,CAFzB,8IAMI,sBAAA,kBAAoB,CACrB,2EAID,uBAAA,kBAAoB,CAFtB,yCAMI,qBAAA,sBAAwB,CACzB,mCCnBD,sBAAA,mBAAoB,oBACpB,2BAA4B,YACf,WACD,gBACK,kBACG,CACrB,+BAGC,qBAAA,uBAAwB,gBACP,UACN,gBAIM,gBACC,CACnB,yBAVD,+BAMI,SAAW,CAId,CAAA,4BAEC,gBAAiB,oBACI,gBACH,CACnB,gCAGC,qBAAA,uBAAwB,eACP,CAHnB,qCAMI,gBAAkB,CANtB,sCAYI,iBAAkB,eACF,gBACE,cAElB,eAAiB,CAClB,mCAGD,eAAiB,CAClB","file":"LoginContainer.scss","sourcesContent":[".flex {\n  display: flex;             /* NEW, Spec - Opera 12.1, Firefox 20+ */\n  display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */\n  display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */\n  display: -ms-flexbox;      /* TWEENER - IE 10 */\n  display: -webkit-flex;     /* NEW - Chrome */\n}\n.flex-column {\n  @extend .flex;\n  flex-direction: column;\n  &-center {\n    @extend .flex;\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.flex-row {\n  @extend .flex;\n  flex-direction: row;\n  &-center {\n    @extend .flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n}\n","@import 'base';\n\n.container {\n  @extend .flex-column-center;\n  align-items: center;\n  justify-content: flex-start;\n  height: 100%;\n  width: 100%;\n  font-weight: 400;\n  padding-top: 1.5rem;\n}\n.panel {\n  @extend .flex-column-center;\n  justify-content: center;\n  padding: 1.25rem;\n  width: 35%;\n  @include mobile {\n    width: 75%;\n  }\n  min-width: 250px;\n  min-height: 270px;\n}\n.or {\n  margin-top: 1rem;\n  margin-bottom: .5rem;\n  font-size: 1.3rem;\n}\n.signup {\n  @extend .flex-column-center;\n  justify-content: center;\n  margin-top: 2rem;\n  &-link {\n    // color: $linkBlue;\n    font-size: 1.2rem;\n    &:hover {\n      // color: $materialBlue;\n    }\n  }\n  &-label {\n    font-size: 1.3rem;\n    font-size: 1rem;\n    font-weight: bold;\n    color: $mediumGray;\n    font-weight: 400;\n  }\n}\n.providers {\n  margin-top: 1rem;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"container": "LoginContainer__container___2N3Kp",
		"flex": "LoginContainer__flex___1ynDE",
		"flex-column": "LoginContainer__flex-column___3tMKa",
		"flex-column-center": "LoginContainer__flex-column-center___1B3io",
		"flex-row": "LoginContainer__flex-row___1NGzG",
		"flex-row-center": "LoginContainer__flex-row-center___1LmwX",
		"panel": "LoginContainer__panel___zMpxJ",
		"signup": "LoginContainer__signup___HBo4S",
		"or": "LoginContainer__or___14uym",
		"signup-link": "LoginContainer__signup-link___sCITK",
		"signup-label": "LoginContainer__signup-label___2Ts0T",
		"providers": "LoginContainer__providers___2sPFC"
	};

/***/ }

});
//# sourceMappingURL=1.Login.613a65e282b66a2a6c63.js.map
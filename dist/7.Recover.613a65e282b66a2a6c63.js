webpackJsonp([7],{

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

/***/ 814:
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
	
	var ActionAccountCircle = function ActionAccountCircle(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z' })
	  );
	};
	ActionAccountCircle = (0, _pure2.default)(ActionAccountCircle);
	ActionAccountCircle.displayName = 'ActionAccountCircle';
	ActionAccountCircle.muiName = 'SvgIcon';
	
	exports.default = ActionAccountCircle;

/***/ },

/***/ 820:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _promise = __webpack_require__(821);
	
	var _promise2 = _interopRequireDefault(_promise);
	
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
	
	var _dec, _class;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reduxForm = __webpack_require__(428);
	
	var _reactReduxFirebase = __webpack_require__(426);
	
	var _IconButton = __webpack_require__(642);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _Paper = __webpack_require__(679);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	var _TextField = __webpack_require__(740);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _Snackbar = __webpack_require__(722);
	
	var _Snackbar2 = _interopRequireDefault(_Snackbar);
	
	var _add = __webpack_require__(746);
	
	var _add2 = _interopRequireDefault(_add);
	
	var _Subheader = __webpack_require__(686);
	
	var _Subheader2 = _interopRequireDefault(_Subheader);
	
	var _RecoverForm = __webpack_require__(832);
	
	var _RecoverForm2 = _interopRequireDefault(_RecoverForm);
	
	var _EmailForm = __webpack_require__(836);
	
	var _EmailForm2 = _interopRequireDefault(_EmailForm);
	
	var _formNames = __webpack_require__(765);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// adds this.props.firebase
	var RecoverContainer = (_dec = (0, _reactReduxFirebase.firebaseConnect)(), _dec(_class = function (_Component) {
	  (0, _inherits3.default)(RecoverContainer, _Component);
	
	  function RecoverContainer() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, RecoverContainer);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RecoverContainer.__proto__ || (0, _getPrototypeOf2.default)(RecoverContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      message: null,
	      open: false
	    }, _this.sendRecoveryEmail = function (_ref2) {
	      var email = _ref2.email;
	
	      return _this.props.firebase.resetPassword(email).then(function () {
	        _this.setState({
	          message: 'Account Recovery Email Sent',
	          open: true
	        });
	      }).catch(function (err) {
	        console.error('Error updating account', err);
	        _this.setState({ message: err.message || 'Error' }); // show error snackbar
	        return _promise2.default.reject(err);
	      });
	    }, _this.recoverAccount = function (_ref3) {
	      var code = _ref3.code,
	          password = _ref3.password;
	      var _this$props$firebase = _this.props.firebase,
	          verifyPasswordResetCode = _this$props$firebase.verifyPasswordResetCode,
	          confirmPasswordReset = _this$props$firebase.confirmPasswordReset;
	
	
	      return verifyPasswordResetCode(code).then(function () {
	        return confirmPasswordReset(code, password);
	      }).then(function (res) {
	        _this.setState({
	          message: 'Password Changed Successfully'
	        });
	      }).catch(function (err) {
	        console.error('Error updating account', err);
	        _this.setState({ message: err.message }); // show error snackbar
	        return _promise2.default.reject(err);
	      });
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(RecoverContainer, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'flex-column-center' },
	        _react2.default.createElement(
	          _Paper2.default,
	          { style: { marginTop: '3rem' } },
	          _react2.default.createElement(_EmailForm2.default, { onSubmit: this.sendRecoveryEmail })
	        ),
	        _react2.default.createElement(
	          _Paper2.default,
	          { style: { marginTop: '3rem' } },
	          _react2.default.createElement(_RecoverForm2.default, { onSubmit: this.recoverAccount })
	        ),
	        _react2.default.createElement(_Snackbar2.default, {
	          open: !!this.state.message,
	          message: this.state.message || 'Error',
	          autoHideDuration: 4000,
	          onRequestClose: function onRequestClose() {
	            return _this2.setState({ message: null });
	          }
	        })
	      );
	    }
	  }]);
	  return RecoverContainer;
	}(_react.Component)) || _class);
	exports.default = RecoverContainer;

/***/ },

/***/ 821:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(822), __esModule: true };

/***/ },

/***/ 822:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(249);
	__webpack_require__(209);
	__webpack_require__(231);
	__webpack_require__(823);
	module.exports = __webpack_require__(187).Promise;

/***/ },

/***/ 823:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(213)
	  , global             = __webpack_require__(183)
	  , ctx                = __webpack_require__(188)
	  , classof            = __webpack_require__(365)
	  , $export            = __webpack_require__(186)
	  , isObject           = __webpack_require__(193)
	  , aFunction          = __webpack_require__(189)
	  , anInstance         = __webpack_require__(824)
	  , forOf              = __webpack_require__(825)
	  , speciesConstructor = __webpack_require__(826)
	  , task               = __webpack_require__(827).set
	  , microtask          = __webpack_require__(829)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(230)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(830)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(229)($Promise, PROMISE);
	__webpack_require__(831)(PROMISE);
	Wrapper = __webpack_require__(187)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(366)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },

/***/ 824:
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },

/***/ 825:
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(188)
	  , call        = __webpack_require__(361)
	  , isArrayIter = __webpack_require__(362)
	  , anObject    = __webpack_require__(192)
	  , toLength    = __webpack_require__(225)
	  , getIterFn   = __webpack_require__(364)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },

/***/ 826:
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(192)
	  , aFunction = __webpack_require__(189)
	  , SPECIES   = __webpack_require__(230)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },

/***/ 827:
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(188)
	  , invoke             = __webpack_require__(828)
	  , html               = __webpack_require__(228)
	  , cel                = __webpack_require__(197)
	  , global             = __webpack_require__(183)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(223)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },

/***/ 828:
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },

/***/ 829:
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(183)
	  , macrotask = __webpack_require__(827).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(223)(process) == 'process';
	
	module.exports = function(){
	  var head, last, notify;
	
	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };
	
	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },

/***/ 830:
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(190);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },

/***/ 831:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(183)
	  , core        = __webpack_require__(187)
	  , dP          = __webpack_require__(191)
	  , DESCRIPTORS = __webpack_require__(195)
	  , SPECIES     = __webpack_require__(230)('species');
	
	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },

/***/ 832:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _RecoverForm = __webpack_require__(833);
	
	var _RecoverForm2 = _interopRequireDefault(_RecoverForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _RecoverForm2.default;

/***/ },

/***/ 833:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RecoverForm = undefined;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(323);
	
	var _reduxForm = __webpack_require__(428);
	
	var _reactReduxFirebase = __webpack_require__(426);
	
	var _RaisedButton = __webpack_require__(771);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _Subheader = __webpack_require__(686);
	
	var _Subheader2 = _interopRequireDefault(_Subheader);
	
	var _TextField = __webpack_require__(773);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _List = __webpack_require__(726);
	
	var _accountCircle = __webpack_require__(814);
	
	var _accountCircle2 = _interopRequireDefault(_accountCircle);
	
	var _formNames = __webpack_require__(765);
	
	var _RecoverForm = __webpack_require__(834);
	
	var _RecoverForm2 = _interopRequireDefault(_RecoverForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var required = function required(value) {
	  return value ? undefined : 'Required';
	};
	
	var RecoverForm = exports.RecoverForm = function RecoverForm(_ref) {
	  var account = _ref.account,
	      handleSubmit = _ref.handleSubmit,
	      onRecoverClick = _ref.onRecoverClick,
	      submitting = _ref.submitting,
	      pristine = _ref.pristine,
	      valid = _ref.valid;
	  return _react2.default.createElement(
	    'form',
	    { className: _RecoverForm2.default.container, onSubmit: handleSubmit },
	    _react2.default.createElement(
	      'h4',
	      null,
	      'Recover Using Code From Email'
	    ),
	    _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _Subheader2.default,
	        null,
	        _react2.default.createElement(
	          'strong',
	          null,
	          'Note:'
	        ),
	        ' Not used for OAuth'
	      )
	    ),
	    _react2.default.createElement(_reduxForm.Field, {
	      name: 'code',
	      component: _TextField2.default,
	      label: 'Recover Code',
	      validate: [required]
	    }),
	    _react2.default.createElement(_reduxForm.Field, {
	      name: 'password',
	      component: _TextField2.default,
	      label: 'New Password',
	      validate: [required]
	    }),
	    _react2.default.createElement(
	      'div',
	      { className: _RecoverForm2.default.submit },
	      _react2.default.createElement(_RaisedButton2.default, {
	        label: 'Recover',
	        primary: true,
	        type: 'submit',
	        disabled: submitting
	      })
	    )
	  );
	};
	
	RecoverForm.propTypes = {
	  account: _react.PropTypes.shape({
	    providerData: _react.PropTypes.array
	  }),
	  handleSubmit: _react.PropTypes.func,
	  onRecoverClick: _react.PropTypes.func,
	  submitting: _react.PropTypes.bool
	};
	
	exports.default = (0, _reduxForm.reduxForm)({
	  form: _formNames.RECOVER_CODE_FORM_NAME
	})(RecoverForm);

/***/ },

/***/ 834:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(835);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(636)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(835, function() {
				var newContent = __webpack_require__(835);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 835:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(635)();
	// imports
	
	
	// module
	exports.push([module.id, ".RecoverForm__container___2j0TN,.RecoverForm__flex___3Lo7J,.RecoverForm__flex-column___CJsS4,.RecoverForm__flex-column-center___1RL-u,.RecoverForm__flex-row___3i8Cy,.RecoverForm__flex-row-center___3ZSK-{display:flex;display:-ms-flexbox;display:-webkit-flex}.RecoverForm__container___2j0TN,.RecoverForm__flex-column___CJsS4,.RecoverForm__flex-column-center___1RL-u{-ms-flex-direction:column;flex-direction:column}.RecoverForm__container___2j0TN,.RecoverForm__flex-column-center___1RL-u{-ms-flex-align:center;align-items:center}.RecoverForm__flex-row___3i8Cy,.RecoverForm__flex-row-center___3ZSK-{-ms-flex-direction:row;flex-direction:row}.RecoverForm__flex-row-center___3ZSK-{-ms-flex-pack:center;justify-content:center}.RecoverForm__container___2j0TN{padding:3rem}.RecoverForm__submit___3QVDG{margin-top:2rem}", "", {"version":3,"sources":["/./src/routes/Recover/components/RecoverForm/src/styles/_standard-classes.scss","/./src/routes/Recover/components/RecoverForm/src/routes/Recover/components/RecoverForm/RecoverForm.scss"],"names":[],"mappings":"AAAA,2MACE,aAAc,oBAGO,oBACC,CACvB,2GAGC,0BAAA,qBAAuB,CAFzB,yEAMI,sBAAA,kBAAoB,CACrB,qEAID,uBAAA,kBAAoB,CAFtB,sCAMI,qBAAA,sBAAwB,CACzB,gCCnBD,YAAc,CACf,6BAGC,eAAiB,CAClB","file":"RecoverForm.scss","sourcesContent":[".flex {\n  display: flex;             /* NEW, Spec - Opera 12.1, Firefox 20+ */\n  display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */\n  display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */\n  display: -ms-flexbox;      /* TWEENER - IE 10 */\n  display: -webkit-flex;     /* NEW - Chrome */\n}\n.flex-column {\n  @extend .flex;\n  flex-direction: column;\n  &-center {\n    @extend .flex;\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.flex-row {\n  @extend .flex;\n  flex-direction: row;\n  &-center {\n    @extend .flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n}\n","@import 'base';\n\n.container {\n  @extend .flex-column-center;\n  padding: 3rem;\n}\n\n.submit {\n  margin-top: 2rem;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"container": "RecoverForm__container___2j0TN",
		"flex": "RecoverForm__flex___3Lo7J",
		"flex-column": "RecoverForm__flex-column___CJsS4",
		"flex-column-center": "RecoverForm__flex-column-center___1RL-u",
		"flex-row": "RecoverForm__flex-row___3i8Cy",
		"flex-row-center": "RecoverForm__flex-row-center___3ZSK-",
		"submit": "RecoverForm__submit___3QVDG"
	};

/***/ },

/***/ 836:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EmailForm = __webpack_require__(837);
	
	var _EmailForm2 = _interopRequireDefault(_EmailForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _EmailForm2.default;

/***/ },

/***/ 837:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EmailForm = undefined;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(323);
	
	var _reduxForm = __webpack_require__(428);
	
	var _reactReduxFirebase = __webpack_require__(426);
	
	var _RaisedButton = __webpack_require__(771);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _TextField = __webpack_require__(773);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _List = __webpack_require__(726);
	
	var _accountCircle = __webpack_require__(814);
	
	var _accountCircle2 = _interopRequireDefault(_accountCircle);
	
	var _formNames = __webpack_require__(765);
	
	var _EmailForm = __webpack_require__(838);
	
	var _EmailForm2 = _interopRequireDefault(_EmailForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var required = function required(value) {
	  return value ? undefined : 'Required';
	};
	var email = function email(value) {
	  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
	};
	
	var EmailForm = exports.EmailForm = function EmailForm(_ref) {
	  var account = _ref.account,
	      handleSubmit = _ref.handleSubmit,
	      submitting = _ref.submitting,
	      pristine = _ref.pristine,
	      valid = _ref.valid;
	  return _react2.default.createElement(
	    'form',
	    { className: _EmailForm2.default.container, onSubmit: handleSubmit },
	    _react2.default.createElement(
	      'h4',
	      null,
	      'Send Recovery Code To Email'
	    ),
	    _react2.default.createElement(_reduxForm.Field, {
	      name: 'email',
	      component: _TextField2.default,
	      label: 'Email',
	      validate: [required, email]
	    }),
	    _react2.default.createElement(
	      'div',
	      { className: _EmailForm2.default.submit },
	      _react2.default.createElement(_RaisedButton2.default, {
	        label: 'Send',
	        primary: true,
	        type: 'submit',
	        disabled: submitting
	      })
	    )
	  );
	};
	
	EmailForm.propTypes = {
	  account: _react.PropTypes.shape({
	    providerData: _react.PropTypes.array
	  }),
	  handleSubmit: _react.PropTypes.func.isRequired,
	  submitting: _react.PropTypes.bool
	};
	
	exports.default = (0, _reduxForm.reduxForm)({
	  form: _formNames.RECOVER_EMAIL_FORM_NAME
	})(EmailForm);

/***/ },

/***/ 838:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(839);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(636)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(839, function() {
				var newContent = __webpack_require__(839);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 839:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(635)();
	// imports
	
	
	// module
	exports.push([module.id, ".EmailForm__container___yEN1i,.EmailForm__flex___Dvhms,.EmailForm__flex-column___tI4sG,.EmailForm__flex-column-center___XNkko,.EmailForm__flex-row___3cBwM,.EmailForm__flex-row-center___1VZCV{display:flex;display:-ms-flexbox;display:-webkit-flex}.EmailForm__container___yEN1i,.EmailForm__flex-column___tI4sG,.EmailForm__flex-column-center___XNkko{-ms-flex-direction:column;flex-direction:column}.EmailForm__container___yEN1i,.EmailForm__flex-column-center___XNkko{-ms-flex-align:center;align-items:center}.EmailForm__flex-row___3cBwM,.EmailForm__flex-row-center___1VZCV{-ms-flex-direction:row;flex-direction:row}.EmailForm__flex-row-center___1VZCV{-ms-flex-pack:center;justify-content:center}.EmailForm__container___yEN1i{padding:3rem}.EmailForm__submit___3Tsvf{margin-top:2rem}", "", {"version":3,"sources":["/./src/routes/Recover/components/EmailForm/src/styles/_standard-classes.scss","/./src/routes/Recover/components/EmailForm/src/routes/Recover/components/EmailForm/EmailForm.scss"],"names":[],"mappings":"AAAA,+LACE,aAAc,oBAGO,oBACC,CACvB,qGAGC,0BAAA,qBAAuB,CAFzB,qEAMI,sBAAA,kBAAoB,CACrB,iEAID,uBAAA,kBAAoB,CAFtB,oCAMI,qBAAA,sBAAwB,CACzB,8BCnBD,YAAc,CACf,2BAGC,eAAiB,CAClB","file":"EmailForm.scss","sourcesContent":[".flex {\n  display: flex;             /* NEW, Spec - Opera 12.1, Firefox 20+ */\n  display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */\n  display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */\n  display: -ms-flexbox;      /* TWEENER - IE 10 */\n  display: -webkit-flex;     /* NEW - Chrome */\n}\n.flex-column {\n  @extend .flex;\n  flex-direction: column;\n  &-center {\n    @extend .flex;\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.flex-row {\n  @extend .flex;\n  flex-direction: row;\n  &-center {\n    @extend .flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n}\n","@import 'base';\n\n.container {\n  @extend .flex-column-center;\n  padding: 3rem;\n}\n\n.submit {\n  margin-top: 2rem;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"container": "EmailForm__container___yEN1i",
		"flex": "EmailForm__flex___Dvhms",
		"flex-column": "EmailForm__flex-column___tI4sG",
		"flex-column-center": "EmailForm__flex-column-center___XNkko",
		"flex-row": "EmailForm__flex-row___3cBwM",
		"flex-row-center": "EmailForm__flex-row-center___1VZCV",
		"submit": "EmailForm__submit___3Tsvf"
	};

/***/ }

});
//# sourceMappingURL=7.Recover.613a65e282b66a2a6c63.js.map
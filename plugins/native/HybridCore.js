export default {
  install(Vue) {
		var infType = {
			UNKNOWN: "Unknown",
			IOS: "iOS",
			ANDROID: "Android",
		};
		window.INTERFACE_TYPE = infType;
	
		window.Lina = {};
	
		/**
		 * OS, Device 정보
		 * @returns 
		 */
		var navigator = function() {
			var userAgent = window.navigator.userAgent.toLowerCase();
			return {
				os: function(os) {
					if (os === undefined) {
						return this.device().os;
					}
					return this.device(os);
				},
				device: function (os, version) {
					var result;
					if (os === undefined) {
						result = { os: "unknown", version: "", tablet: false, mobile: false };
	
						if (userAgent.match(/android/i)) {
							result.os = "Android";
							if (!userAgent.match(/mobile/i)) {
								result.tablet = true;
							}
							version = /Android ([\\.\\_\d]+)/i.exec(userAgent);
							result.version = version ? version[1] : "";
							result.mobile = true;
						} else {
							// if (userAgent.match(/iphone|ipad|ipod|macintosh/i)) {
								result.os = "iOS";
							// 	if (userAgent.match(/ipad|macintosh/i)) {
							// 		result.tablet = true;
							// 	}
							// 	version = /OS (\d+)_(\d+)_?(\d+)?/i.exec(window.navigator.appVersion);
							// 	if (version == null) {
							// 		version = /OS [a-z|A-Z]+ (\d+)_(\d+)_?(\d+)?/i.exec(
							// 			window.navigator.appVersion
							// 		);
							// 	}
							// 	result.version = version[1] + "." + version[2] + "." + (version[3] | 0);
							// 	result.mobile = true;
							// } 
						}
						return result;
					}
	
					result = this.device();
					// var os = result.os.match(new RegExp(os, "i")) ? true : false;
					os = result.os.match(new RegExp(os, "i")) ? true : false;
					if (version === undefined) {
						return os;
					}
					var ver = result.version.match(new RegExp(version, "i")) ? true : false;
					return os && ver;
				},
			};
		};
		window.Lina.navigator = new navigator();
	
		/**
		 * Native interface platform 반환
		 * @return "UNKNOWN" or "IOS" or "ANDROID"
		 */
		window.Lina.interfaceType = (function() {
			var type = infType.UNKNOWN;
	
			if (window.Lina.navigator.device("ios")) {
				type = infType.IOS;
			} else if (window.Lina.navigator.device("android")) {
				type = infType.ANDROID;
			}
	
			return type;
		})();
	
		window.Lina.callbackId = Math.floor(Math.random() * 2000000000);
		window.Lina.callbacks = {};
	
		/**
		 * Native->js 호출(async)
		 * 
		 * @param {*} callbackId 	js에서 관리되는 callback id
		 * @param {*} args 				전달받을 결과값(항상 json format)
		 */
		window.Lina.nativeCallback = function(callbackId, args) {
			var callback = window.Lina.callbacks[callbackId];
			if (callback) {
					callback.apply(null, [args]);
					// delete window.Lina.callbacks[callbackId];
			}
		};
	
		/**
		 * js->Native 함수 호출 
		 * @param {*} funcName 	호출된 native 함수명(ios일 경우에는 handler name)
		 * @param {*} params 		항상 json format
		 * @param {*} callback 	async 처리 시 값 전달받을 함수
		 * @returns 
		 */
		window.Lina.execute = function execute(bridgeName, funcName, params, callback) {
			// parameter 없을 경우
			if (arguments.length == 0) {
				console.log("The parameter does not exist. Enter at least a function name.");
				return;
			}
	
			if (!bridgeName)
				bridgeName = 'core';
	
			// 함수 이름이 문자열이 아닐 경우
			if (typeof funcName !== 'string') {
				console.log("Enter the function name as string.");
				return;
			}
	
			var isAsync = false;
			var isParam = true;
			var callbackId = null;
			// callback이 존재할 경우 callback id 증가
			if (typeof callback == 'function') {
				isAsync = true;
				callbackId = window.Lina.callbackId;
				const prevCallback = window.Lina.callbacks[callbackId];
				if (prevCallback)
					delete window.Lina.callbacks[callbackId];
				else
					window.Lina.callbackId += 1;
				
					window.Lina.callbacks[callbackId] = callback;
			}
	
			if (typeof params === undefined || params == null) {
				isParam = false;
			}
	
			// iOS
			if (window.Lina.interfaceType === infType.IOS) {
				var message = {}
	
				// 비동기
				if (isAsync) 
				{
					if (isParam)
						message = { callbackId: callbackId.toString(), bridgeName: bridgeName, funcName: funcName, params: params };
					else
						message = { callbackId: callbackId.toString(), bridgeName: bridgeName, funcName: funcName };
					
					window.webkit.messageHandlers[funcName].postMessage(JSON.stringify(message));
				}
				// 동기
				else 
				{
					if (isParam)
					{
						if (typeof params !== 'object' && typeof params !== 'string')
							params = params.toString();
						message = { bridgeName: bridgeName, funcName: funcName, params: params };
					}
					else
						message = { bridgeName: bridgeName, funcName: funcName };
					return prompt(JSON.stringify(message));
				}
			}
			// Android
			else if (window.Lina.interfaceType === infType.ANDROID) {
				if (isParam)
				{
					if (typeof params === 'object') 
						params = JSON.stringify(params);
					else if (typeof params !== 'string')
						params = params.toString();
				}
	
				// 비동기
				if (isAsync) {
					if (isParam)
						window[bridgeName][funcName](callbackId.toString(), params);
					else
						window[bridgeName][funcName](callbackId.toString());
				}				
				// 동기	
				else 
				{
					if (isParam) {
						return window[bridgeName][funcName](params);
					}
					else {
						return window[bridgeName][funcName]();
					}
				}
			}
		};

		/**
		 * Plugin 실행
		 * @param {*} bridgeName Native 코드 설계를 위한 대분류
		 * @param {*} funcName 
		 * @param {*} params 
		 * @param {*} callback 
		 */
		window.Lina.plugin = function(bridgeName, funcName, params, callback) {
			return window.Lina.execute(bridgeName, funcName, params, callback)
		}

		window.onReady = function() {
			console.log("Core", "Called onReady()!!!!")
		};

		window.onResume = function() {
			console.log("Core", "Called onResume()!!!!")
		};

		window.onPause = function() {
			console.log("Core", "Called onPause()!!!!")
		};

		// window.onBack = function() {
		// 	console.log("Core", "Called onBack()!!!!")
		// };

		/**
		 * 데이터 관리
		 * global : 앱 실행 후 종료까지 유지(메모리 변수)
		 * storage : 앱을 다시 삭제되기 전까지 유지(preference 변수)
		 * @returns 
		 */
		Vue.prototype.$Data = {
			global: function(key, value) {
				if (arguments.length == 2) 
				{
						var params = {
								key: key,
								value: value
						}
						window.Lina.execute("core", "setGlobalData", params);
				}
				else if (arguments.length == 1) 
				{
						// if (typeof key == "object")
						// 		execute("setGlobalData", key)
						// else
								// @returns string 문자열
								return window.Lina.execute("core", "getGlobalData", key);
				}
				// else
						// return execute("getGlobalData", "")
			},
			removeGlobal: function(key) {
					if (arguments.length == 1) 
						window.Lina.execute("core", "removeGlobalData", key)
					// 메모리 데이터 전체 삭제
					// else
						// Lina.execute("removeGlobalData", {})
			},
			storage: function(key, value) {
					if (arguments.length == 2) {
							var params = {
									key: key,
									value: value
							}
							window.Lina.execute("core", "setStorageData", params)
					}
					else if (arguments.length == 1) {
							// @returns string 문자열
							return window.Lina.execute("getStorageData", key)
					}
					// else
					// 		return execute("getStorageData")
			},
			removeStorage: function(key) {
					if (arguments.length == 1)
						window.Lina.execute("core", "removeGlobalData", key)
					// else
						// Lina.execute("removeGlobalData", {})
			}
		},
		/**
		 * Popup
		 */
		Vue.prototype.$Popup = {
			toast: function(message, duration) {
				var params = {
					message: message,
					// duration: duration
				}

				if (duration === undefined)
					params.duration = 2000
				window.Lina.execute("core", "showToast", params)
			}
		},

		/**
		 * System
		 */
		Vue.prototype.$System = {
			/**
			 * 진동
			 * @param {*} duration 
			 */
			vibrate: function(duration) {
				window.Lina.execute("core", "vibrate", duration);
			},
			/**
			 * 전화걸기
			 * @param {*} tel 
			 */
			call: function(tel) {
				window.Lina.execute("core", "callPhone", tel);
			},
			/**
			 * 앱 종료
			 */
			exit: function() {
				window.Lina.execute("core", "finishApp");
			},
		},

		/**
		 * Device 정보
		 */
		Vue.prototype.$Device = {
			info: function() {
				return window.Lina.execute("core", "getDeviceInfo")
			},
		},

		/**
		 * App 정보
		 */
		Vue.prototype.$App = {
			info: function() {
				return window.Lina.execute("core", "getAppInfo")
			}
		}

		/**
		 * File
		 */
		Vue.prototype.$File = {
			toBase64: function(filePath) {
				return window.Lina.execute("core", "fileToBase64", filePath);
			}
		}
	}
}
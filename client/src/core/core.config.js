(function() {
	'use strict';

	angular
		.module('flux.core')
		.config(config);

	function config($urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
	}
})();

(function () {
	'use strict';

	angular
		.module('flux.core')
		.controller('CoreController', CoreController);

	function CoreController(auth, $scope, $state) {
		$scope.$on('$stateChangeSuccess', function(event, toState) {
			$scope.pageTitle = toState.data.pageTitle;
		});
	}
})();

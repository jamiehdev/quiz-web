angular.module("app").factory("ConfigService", [
	function () {
		var service = {};

		service.apiBase = "http://quizapijh-env.eba-ucuichpg.eu-west-2.elasticbeanstalk.com/";

		return service;
	},
]);

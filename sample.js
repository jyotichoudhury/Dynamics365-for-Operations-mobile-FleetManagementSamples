function main(metadataService, dataService, cacheService, $q) {

	let workspaceInitialization = function(appMetadata) {


	};
	let pageInitialization = function (pageMetadata, context) {
		// body...
	};
	let actionInitialization = function (taskMetadata, context, taskData) {
		// body...
	};

	return {

		appInit: workspaceInitialization,
		pageInit: pageInitialization,
		taskInit: actionInitialization
	};
}
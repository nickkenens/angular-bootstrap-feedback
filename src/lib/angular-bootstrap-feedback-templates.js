angular.module("angular.bootstrap.feedback").run(["$templateCache", function($templateCache) {$templateCache.put("angular.bootstrap.feedback.button.html","<div class=\"send-feedback\"><div ng-if=\"!$ctrl.factory.isScreenshotMode\" ng-click=\"$ctrl.openModal()\">{{$ctrl.factory.options.sendFeedbackButtonText}} <span class=\"glyphicon glyphicon-comment\" aria-hidden=\"true\"></span></div><div ng-if=\"$ctrl.factory.isScreenshotMode\"><span>Options</span><div class=\"row\"><div class=\"col-xs-12\"><button class=\"btn btn-danger col-xs-12\" ng-click=\"$ctrl.cancelScreenshotPressed()\">{{$ctrl.factory.options.cancelScreenshotOptionsButtonText}}</button></div></div><div class=\"row\"><div class=\"col-xs-12\"><button class=\"btn btn-success col-xs-12\" ng-click=\"$ctrl.takeScreenshotPressed()\">{{$ctrl.factory.options.takeScreenshotOptionsButtonText}}</button></div></div></div></div>");
$templateCache.put("angular.bootstrap.feedback.modal.html","<form novalidate=\"\" name=\"userFeedbackForm\"><div class=\"modal-header\"><h3 class=\"modal-title pull-left\">{{$ctrl.factory.options.modalTitle}}</h3><a><i class=\"glyphicon glyphicon-remove pull-right add-margin-right-1\" style=\"font-size: 18px\" data-ng-click=\"$ctrl.closeModal(); $event.stopPropagation()\"></i></a></div><div class=\"modal-body\"></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" type=\"submit\" ng-click=\"$ctrl.submitButtonPressed(userFeedbackForm)\">{{$ctrl.factory.options.submitButtonText}}</button></div></form>");
$templateCache.put("angular.bootstrap.feedback.screenshot.html","<div class=\"feedback-screenshot\"><img ng-src=\"{{$ctrl.factory.screenshotBase64}}\"></div><div class=\"btn-toolbar\"><button class=\"btn btn-default\" type=\"button\" ng-click=\"$ctrl.takeScreenshotButtonPressed()\"><span class=\"glyphicon glyphicon-camera\" aria-hidden=\"true\"></span> {{$ctrl.factory.options.takeScreenshotButtonText}}</button></div>");}]);
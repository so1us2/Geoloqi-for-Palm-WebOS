function StageAssistant() {
	/* this is the creator function for your stage assistant object */
}

StageAssistant.prototype.setup = function() {
	/* this function is for setup tasks that have to happen when the stage is first created */
	Mojo.Log.addLoggingMethodsToPrototype(Mojo.Controller.SceneController);
	this.controller.pushScene("Control");
};

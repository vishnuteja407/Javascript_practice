var log = java.util.logging.Logger.getLogger("InitialScriptTask");
var updateMilestones = [];

if (statusCode == 200) {
try {
    log.info('Get Pending Milestones resp::');
    log.info(response);
    var responseLocal = JSON.parse(response);
    var milestones = responseLocal['data'];
    for (var i = 0; i < milestones.length; i++) {
        if (milestones[i]['status'] !== 'Complete') {
            updateMilestones.push(milestones[i]['_id']);
            log.info("Milestone: " + milestones[i]["milestone"] + " : status: " + milestones[i]["status"]);
        }
    }
} catch (error) {
    var errMsg = "RuntimeException: " + error.message;
    log.severe(connector.getVariable("loggingKey") + ": Retrieve milestones Error: " + errMsg);
    throw new org.camunda.bpm.engine.delegate.BpmnError("serviceCatalogError", response);
    
}    

} else {
    log.severe(connector.getVariable("loggingKey") + ": Retrieve milestones Error: " + response);
    throw new org.camunda.bpm.engine.delegate.BpmnError("serviceCatalogError", response);
}
log.info("Milestone _id(s) to update: " + JSON.stringify(updateMilestones));
S(JSON.stringify(updateMilestones)).mapTo("java.util.ArrayList");
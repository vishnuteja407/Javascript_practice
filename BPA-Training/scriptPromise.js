



function getProduct(){
    console.log("Get Products Called....");
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
             resolve([{id:1, name: "Mobile phone"}, {id:2, name:"Inverter"}])
        }, 300)

        reject("No data Found....")
         
    })
}

function showProducts(){
    let products = getProduct();
    products.then(data =>{
        console.log(data);
    }).catch(err => 
        {
            console.log(err);
        })
    console.log("Next Statement.......");
    
}

showProducts();


// var clickedButtonKey = execution.getVariable('clickedButtonKey')

var parsedOldFormData = JSON.parse(serviceFormData);
var parsedNewFormData = JSON.parse(newFormData);

var oldHostNames = parsedOldFormData.hostnames ? parsedOldFormData.hostnames : [];
var newHostNames = parsedNewFormData.hostnames ? parsedNewFormData.hostnames : [];
var oldServiceType = parsedOldFormData.type;
var newServiceType = parsedNewFormData.type;
var oldNSER = parsedOldFormData.nser;
var newNSER = parsedNewFormData.nser;
var oldCRQ = parsedOldFormData.crq;
var newCRQ = parsedNewFormData.crq;
var oldWorkorderNumber = parsedOldFormData.workorderNumber;
var newWorkorderNumber = parsedNewFormData.workorderNumber;
var oldPid = parsedOldFormData.pid;
var newPid = parsedNewFormData.pid;
var oldSnapshotName = parsedOldFormData.userDefinedSnapshotName;
var newSnapshotName = parsedNewFormData.userDefinedSnapshotName;


var changeDetected = false;
var reInitiateAllChecks = false;

if (oldHostNames.length < newHostNames.length || oldHostNames.length > newHostNames.length) {
    changeDetected = true;
    reInitiateAllChecks = true;
} else {
    for (var i = 0; i < oldHostNames.length; i++) {
        var isDeviceInNewList = false;
        for (var j = 0; j < newHostNames.length; j++) {
            if (oldHostNames[i]['deviceName'] == newHostNames[j]['deviceName']) {
                isDeviceInNewList = true;
                break;
            }
        }
        if (!isDeviceInNewList) {
            changeDetected = true;
            reInitiateAllChecks = true;
            break;
        }
    }
}

if (oldServiceType != newServiceType) {
    changeDetected = true;
    reInitiateAllChecks = true;
}

if (oldNSER != newNSER || oldCRQ != newCRQ || oldWorkorderNumber != newWorkorderNumber || oldPid != newPid || oldSnapshotName !=newSnapshotName) {
    changeDetected = true;
}

execution.setVariable('reInitiateAllChecks', reInitiateAllChecks);
execution.setVariable('modifyChangeDetected', changeDetected);




var logger = java.util.logging.Logger;
var log = java.util.logging.Logger.getLogger("InitialScriptTask");
log.info("+_+_+_+_+_+_+_+_+_+_+_+_Update event started Here +_+_+_+_+_+_+_+_+_+_+_+_ in actual flow");
var Formdata = JSON.parse(execution.getVariable('serviceInputFormData'));
print("Form Data is ", Formdata);
print("Form data JSON is ", execution.getVariable('serviceInputFormData'));
var updatedFormData = execution.getVariable("updatedFormData");
if (execution.getVariable("isUpdatePMInput")) {
    log.info("+_+_+_+_+_+_+_+_+_+_+_+_ formData Update+_+_+_+_+_+_+_+_+_+_+_+_");
    Formdata['operation'] = updatedFormData.operation;
    Formdata['nser'] = updatedFormData.nser;
    Formdata['pid'] = updatedFormData.pid;
    Formdata['workorderNumber'] = updatedFormData.workorderNumber;
    Formdata['crq'] = updatedFormData.crq;
    var lastActivityId = execution.getVariable('lastActivityId');
    execution.setVariable("crq", updatedFormData.crq)
}
else {
    log.info("Not update PMInput")
}
log.info("serviceinputFormData is " + S(JSON.stringify(Formdata)))
S(JSON.stringify(Formdata))
execution.setVariable("serviceInputFormData", S(JSON.stringify(Formdata)))
S(JSON.stringify(Formdata))




var templateRequest = [];
                var log = java.util.logging.Logger.getLogger("InitialScriptTask");
                try{
                    log.info(execution.getVariable("loggingKey") +"Crafting Template Execution Request for Pre Change Platform Validation");
                    // Get Device Models Array
                    var tempDeviceModelsFinalList = JSON.parse(execution.getVariable('deviceFamilyList'));
                    log.info("tempDeviceModelsFinalList::::"+tempDeviceModelsFinalList)
                    var devicesListsArr = JSON.parse(org.camunda.spin.Spin.JSON(hostNameArr).toString());
                    for(var j = 0; j < tempDeviceModelsFinalList.length; j++) {
                        if(devicesListsArr.indexOf(tempDeviceModelsFinalList[j].device) > -1) {
                            var deviceModel = tempDeviceModelsFinalList[j].family;
                            var templateName;
                            log.info("deviceModel::::"+deviceModel);
                          if(deviceModel == "Catalyst9000")
                          {
                            log.info("entered if loop::::");
                            if(tempDeviceModelsFinalList[j].model.contains("C93"))
                            {
                              templateName = "C9300";
                            }
                            else if(tempDeviceModelsFinalList[j].model.contains("C94"))
                            {
                              templateName = "C9400";
                            }
                            else if(tempDeviceModelsFinalList[j].model.contains("C95"))
                            {
                              templateName = "C9500";
                            }
                          }
                          else
                          {
                            templateName = tempDeviceModelsFinalList[j].family;
                          }
                            templateRequest.push({
                                deviceName: tempDeviceModelsFinalList[j].device,
                                templateId: PrePostPlateformValidationPrefix+templateName
                            });
                            log.info("templateRequest.push pre::::::::::"+templateRequest)
                        }
                    }
                }catch(e){
                    log.severe(execution.getVariable("loggingKey") + ": Error while crafting Process Template Request FOR Pre Change Platform Validation" + e);
                }

                log.severe(execution.getVariable("loggingKey") + ": Process Template Request FOR Pre Change Platform Validation" + JSON.stringify(templateRequest));
                var spinList = S(JSON.stringify(templateRequest)).mapTo("java.util.ArrayList");
                spinList;
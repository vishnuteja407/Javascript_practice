// function registerUser() {
//   const email = document.getElementById("registerEmail").value;
//   const mobile = document.getElementById("registerMobile").value;
//   const registerStatus =
//     email && mobile
//       ? `<span id="greenClr">${email} registered with ${mobile}</span>`
//       : `<span id="redClr">email and mobile are mandatory</span>`;
//   document.getElementById("register").innerHTML = registerStatus;
// }

// let num;

// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);

// let j=2;

// for (n=2; j<25;n++){
//   for (let i=2; i<n;i++){
//     if (n%i==0) {continue;}
//     else {console.log("Prime Number:::"+n);}
//   }
// }


// let n = 10;

// prime:
// for (let i = 2; i <= n; i++) { // for each i...

//   for (let j = 2; j < i; j++) { // look for a divisor..
//     if (i % j == 0) continue prime; // not a prime, go next i
//   }
//  console.log(i); 
// }



// outer: for (let i = 0; i < 3; i++) {

//   for (let j = 0; j < 3; j++) {

//     let input = prompt(`Value at coords (${i},${j})`, '');

//     // if an empty string or canceled, then break out of both loops
//     if (!input) break outer; // (*)

//     // do something with the value...
//   }
// }
// alert('Done!');


// let userName = 'John';
// function showMessage() {
//   userName = "Bob"; // (1) changed the outer variable

//   let message = 'Hello, ' + userName;
//   alert(message);
// }
// alert( userName ); // John before the function call
// showMessage();
// alert( userName ); // Bob, the value was modified by the function



// function showMessage(from, text) {
//   from = '*' + from + '*'; // make "from" look nicer
//   alert( from + ': ' + text );
// }
// let from = "Ann";
// showMessage(from, "Hello"); // *Ann*: Hello
// // the value of "from" is the same, the function modified a local copy
// alert( from ); // Ann


// function showPrimes(n) {

//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;

//     alert(i);  // a prime
//   }
// }

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if ( n % i == 0) return false;
//   }
//   return true;
// }

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// for (let prop in menu){
//   if (typeof(menu[prop]) === 'number'){
//     console.log(menu[prop]);
//     menu [prop] *= 2;
//     console.log(menu);
//   }
// }
// console.log(menu);

// var response = [
//   {
//     "executionObjects": [
//       {
//         "deviceName": "MABOSOF01R1",
//         "templateId": "Common-Services-DRAM-Exposure-CEWA-V1P4P0",
//         "status": true,
//         "nso_instance": "NSO_61,nso5-rnetsim4",
//         "templateRecordId": "63e344c4a8e96e794c9a204d",
//         "executionStartedAt": "2023-02-08T10:18:26.946Z",
//         "overallTmplResult": true,
//         "commands": [
//           {
//             "executedCmd": "show inventory",
//             "command": "show inventory",
//             "cmdIndex": 1,
//             "overAllCmdResult": true,
//             "cmdOutPut": "\r\nshow inventory\r\nNAME: \"c36xx Stack\", DESCR: \"c36xx Stack\"\r\nPID: WS-C3650-48PS     , VID: V05  , SN: FDO2150Q0MA\r\n\r\nNAME: \"Switch 1\", DESCR: \"WS-C3650-48FS-L\"\r\nPID: WS-C3650-48FS-L   , VID: V05  , SN: FDO2150Q0MA\r\n\r\nNAME: \"Switch 1 - Power Supply A\", DESCR: \"Switch 1 - Power Supply A\"\r\nPID: PWR-C2-1025WAC    , VID: V02  , SN: LIT213227NS\r\n\r\nNAME: \"Switch 1 - Power Supply B\", DESCR: \"Switch 1 - Power Supply B\"\r\nPID: PWR-C2-1025WAC    , VID: V02  , SN: LIT213224U6\r\n\r\nNAME: \"Gi1/1/1\", DESCR: \"1000BaseSX SFP\"\r\nPID: GLC-SX-MMD         , VID: V01  , SN: ACW213000QZ    \r\n\r\n\r\nUSAZGNDGD01FIE0002# ",
//             "commandCollectedAt": 1675851508051,
//             "evaluatedRules": [
//               {
//                 "op": "Script",
//                 "opvariable": "",
//                 "rule": {},
//                 "result": true,
//                 "template": "cisco_ios_show_inventory_cewa_v1p4p0.template",
//                 "analysis": "cisco_ide_switch_snapshot_analysis_cewa_v1p4p0.py",
//                 "overallstatus": true,
//                 "overallmessage": "Passed",
//                 "customStatus": "Passed",
//                 "customStatCode": "Pass",
//                 "executionStatus": true,
//                 "scriptResult": "Executed Successfully.",
//                 "fields": [
//                   [
//                     { "name": "Name", "value": "OUTPUT" },
//                     {
//                       "name": "Value",
//                       "value": "[{\"PID\": \"WS-C3650-48PS\", \"NAME\": \"c36xx Stack\", \"VID\": \"V05  \", \"SN\": \"FDO2150Q0MA\", \"DESCR\": \"c36xx Stack\"}, {\"PID\": \"WS-C3650-48FS-L\", \"NAME\": \"Switch 1\", \"VID\": \"V05  \", \"SN\": \"FDO2150Q0MA\", \"DESCR\": \"WS-C3650-48FS-L\"}, {\"PID\": \"PWR-C2-1025WAC\", \"NAME\": \"Switch 1 - Power Supply A\", \"VID\": \"V02  \", \"SN\": \"LIT213227NS\", \"DESCR\": \"Switch 1 - Power Supply A\"}, {\"PID\": \"PWR-C2-1025WAC\", \"NAME\": \"Switch 1 - Power Supply B\", \"VID\": \"V02  \", \"SN\": \"LIT213224U6\", \"DESCR\": \"Switch 1 - Power Supply B\"}, {\"PID\": \"GLC-SX-MMD\", \"NAME\": \"Gi1/1/1\", \"VID\": \"V01  \", \"SN\": \"ACW213000QZ\", \"DESCR\": \"1000BaseSX SFP\"}]"
//                     },
//                     { "name": "Info", "value": "" },
//                     { "name": "Status", "value": "Passed" }
//                   ]
//                 ],
//                 "format": "2.0",
//                 "globalVariables": {}
//               }
//             ]
//           }
//         ],
//         "executionId": "63e376f6a8e96e794c9a36d0",
//         "executionDate": "2023-02-08T10:18:30.127Z"
//       },
//       {
//         "deviceName": "NYNYCLB40IDE01",
//         "templateId": "Common-Services-DRAM-Exposure-CEWA-V1P4P0",
//         "status": true,
//         "nso_instance": "NSO_61,nso5-rnetsim4",
//         "templateRecordId": "63e344c4a8e96e794c9a204d",
//         "executionStartedAt": "2023-02-08T10:18:26.949Z",
//         "overallTmplResult": true,
//         "commands": [
//           {
//             "executedCmd": "show inventory",
//             "command": "show inventory",
//             "cmdIndex": 1,
//             "overAllCmdResult": true,
//             "cmdOutPut": "\r\nshow inventory\r\nNAME: \"WS-C6506-E\", DESCR: \"Cisco Systems Catalyst 6500 6-slot Chassis System\"\r\nPID: WS-C6506-E        ,                     VID: V02, SN: SAL1339ZJGK\r\n\r\nNAME: \"WS-C6K-VTT-E 1\", DESCR: \"VTT-E FRU 1\"\r\nPID: WS-C6K-VTT-E      ,                     VID:    , SN: SMT1131L216\r\n\r\nNAME: \"WS-C6K-VTT-E 2\", DESCR: \"VTT-E FRU 2\"\r\nPID: WS-C6K-VTT-E      ,                     VID:    , SN: SMT1131L213\r\n\r\nNAME: \"WS-C6K-VTT-E 3\", DESCR: \"VTT-E FRU 3\"\r\nPID: WS-C6K-VTT-E      ,                     VID:    , SN: SMT1131L217\r\n\r\nNAME: \"CLK-7600 1\", DESCR: \"OSR-7600 Clock FRU 1\"\r\nPID: CLK-7600          ,                     VID:    , SN: SMT1130A553\r\n\r\nNAME: \"CLK-7600 2\", DESCR: \"OSR-7600 Clock FRU 2\"\r\nPID: CLK-7600          ,                     VID:    , SN: FTX1329AHAC\r\n\r\nNAME: \"1\", DESCR: \"WS-X6148A-GE-45AF 48-port 10/100/1000 RJ45 EtherModule Rev. 2.3\"\r\nPID: WS-X6148A-GE-45AF ,                     VID: V05, SN: SAL11509SEK\r\n\r\nNAME: \"sub-module of 1\", DESCR: \"WS-F6K-48-AF IEEE Voice Daughter Card Rev. 2.3\"\r\nPID: WS-F6K-48-AF      ,                     VID: V02, SN: SAL11509TX6\r\n\r\nNAME: \"2\", DESCR: \"WS-X6148A-GE-45AF 48-port 10/100/1000 RJ45 EtherModule Rev. 2.3\"\r\nPID: WS-X6148A-GE-45AF ,                     VID: V05, SN: SAL11499AGJ\r\n\r\nNAME: \"sub-module of 2\", DESCR: \"WS-F6K-48-AF IEEE Voice Daughter Card Rev. 2.3\"\r\nPID: WS-F6K-48-AF      ,                     VID: V02, SN: SAL11499GQX\r\n\r\nNAME: \"3\", DESCR: \"WS-X6148A-GE-45AF 48-port 10/100/1000 RJ45 EtherModule Rev. 4.1\"\r\nPID: WS-X6148A-GE-45AF ,                     VID: V09, SN: SAL145130J1\r\n\r\nNAME: \"sub-module of 3\", DESCR: \"WS-F6K-48-AF IEEE Voice Daughter Card Rev. 2.5\"\r\nPID: WS-F6K-48-AF      ,                     VID: V04, SN: SAL14523BLG\r\n\r\nNAME: \"4\", DESCR: \"WS-X6148A-GE-45AF 48-port 10/100/1000 RJ45 EtherModule Rev. 4.1\"\r\nPID: WS-X6148A-GE-45AF ,                     VID: V09, SN: SAL145130N0\r\n\r\nNAME: \"sub-module of 4\", DESCR: \"WS-F6K-48-AF IEEE Voice Daughter Card Rev. 2.5\"\r\nPID: WS-F6K-48-AF      ,                     VID: V04, SN: SAL1451348J\r\n\r\nNAME: \"5\", DESCR: \"WS-SUP32-GE-3B 9 ports Supervisor Engine 32 8GE Rev. 4.5\"\r\nPID: WS-SUP32-GE-3B    ,                     VID: V06, SN: SAL1148885Q\r\n\r\nNAME: \"msfc sub-module of 5\", DESCR: \"WS-F6K-MSFC2A Cat6k MSFC 2A daughterboard Rev. 4.0\"\r\nPID: WS-F6K-MSFC2A     ,                     VID:    , SN: SAL11488ESQ\r\n\r\nNAME: \"WS-F6K-PFC3B Policy Feature Card 3 sub-module of 5\", DESCR: \"WS-F6K-PFC3B Policy Feature Card 3 Rev. 2.3\"\r\nPID: WS-F6K-PFC3B      ,                     VID: V01, SN: SAL11488L9N\r\n\r\nNAME: \"6\", DESCR: \"WS-X6148A-GE-45AF 48-port 10/100/1000 RJ45 EtherModule Rev. 4.1\"\r\nPID: WS-X6148A-GE-45AF ,                     VID: V09, SN: SAL14512MVS\r\n\r\nNAME: \"sub-module of 6\", DESCR: \"WS-F6K-48-AF IEEE Voice Daughter Card Rev. 2.5\"\r\nPID: WS-F6K-48-AF      ,                     VID: V04, SN: SAL14512Y74\r\n\r\nNAME: \"WS-C6506-E-FAN 1\", DESCR: \"Enhanced 6-slot Fan Tray 1\"\r\nPID: WS-C6506-E-FAN    ,                     VID: V03, SN: DCH11392858\r\n\r\nNAME: \"PS 1 WS-CAC-6000W\", DESCR: \"AC power supply, 6000 watt 1\"\r\nPID: WS-CAC-6000W      ,                     VID: V04, SN: DCH1143Y0J4\r\n\r\nNAME: \"PS 2 WS-CAC-6000W\", DESCR: \"AC power supply, 6000 watt 2\"\r\nPID: WS-CAC-6000W      ,                     VID: V04, SN: DCH1143Y0JB\r\n\r\n\r\nNYNYCLB40IDE01# ",
//             "commandCollectedAt": 1675851508060,
//             "evaluatedRules": [
//               {
//                 "op": "Script",
//                 "opvariable": "",
//                 "rule": {},
//                 "result": true,
//                 "template": "cisco_ios_show_inventory_cewa_v1p4p0.template",
//                 "analysis": "cisco_ide_switch_snapshot_analysis_cewa_v1p4p0.py",
//                 "overallstatus": true,
//                 "overallmessage": "Passed",
//                 "customStatus": "Passed",
//                 "customStatCode": "Pass",
//                 "executionStatus": true,
//                 "scriptResult": "Executed Successfully.",
//                 "fields": [
//                   [
//                     { "name": "Name", "value": "OUTPUT" },
//                     {
//                       "name": "Value",
//                       "value": "[{\"PID\": \"WS-C6506-E\", \"NAME\": \"WS-C6506-E\", \"VID\": \"V02\", \"SN\": \"SAL1339ZJGK\", \"DESCR\": \"Cisco Systems Catalyst 6500 6-slot Chassis System\"}, {\"PID\": \"WS-C6K-VTT-E\", \"NAME\": \"WS-C6K-VTT-E 1\", \"VID\": \"\", \"SN\": \"SMT1131L216\", \"DESCR\": \"VTT-E FRU 1\"}, {\"PID\": \"WS-C6K-VTT-E\", \"NAME\": \"WS-C6K-VTT-E 2\", \"VID\": \"\", \"SN\": \"SMT1131L213\", \"DESCR\": \"VTT-E FRU 2\"}, {\"PID\": \"WS-C6K-VTT-E\", \"NAME\": \"WS-C6K-VTT-E 3\", \"VID\": \"\", \"SN\": \"SMT1131L217\", \"DESCR\": \"VTT-E FRU 3\"}, {\"PID\": \"CLK-7600\", \"NAME\": \"CLK-7600 1\", \"VID\": \"\", \"SN\": \"SMT1130A553\", \"DESCR\": \"OSR-7600 Clock FRU 1\"}, {\"PID\": \"CLK-7600\", \"NAME\": \"CLK-7600 2\", \"VID\": \"\", \"SN\": \"FTX1329AHAC\", \"DESCR\": \"OSR-7600 Clock FRU 2\"}, {\"PID\": \"WS-X6148A-GE-45AF\", \"NAME\": \"1\", \"VID\": \"V05\", \"SN\": \"SAL11509SEK\", \"DESCR\": \"WS-X6148A-GE-45AF 48-port 10/100/1000 RJ45 EtherModule Rev. 2.3\"}, {\"PID\": \"WS-F6K-48-AF\", \"NAME\": \"sub-module of 1\", \"VID\": \"V02\", \"SN\": \"SAL11509TX6\", \"DESCR\": \"WS-F6K-48-AF IEEE Voice Daughter Card Rev. 2.3\"}, {\"PID\": \"WS-X6148A-GE-45AF\", \"NAME\": \"2\", \"VID\": \"V05\", \"SN\": \"SAL11499AGJ\", \"DESCR\": \"WS-X6148A-GE-45AF 48-port 10/100/1000 RJ45 EtherModule Rev. 2.3\"}, {\"PID\": \"WS-F6K-48-AF\", \"NAME\": \"sub-module of 2\", \"VID\": \"V02\", \"SN\": \"SAL11499GQX\", \"DESCR\": \"WS-F6K-48-AF IEEE Voice Daughter Card Rev. 2.3\"}, {\"PID\": \"WS-X6148A-GE-45AF\", \"NAME\": \"3\", \"VID\": \"V09\", \"SN\": \"SAL145130J1\", \"DESCR\": \"WS-X6148A-GE-45AF 48-port 10/100/1000 RJ45 EtherModule Rev. 4.1\"}, {\"PID\": \"WS-F6K-48-AF\", \"NAME\": \"sub-module of 3\", \"VID\": \"V04\", \"SN\": \"SAL14523BLG\", \"DESCR\": \"WS-F6K-48-AF IEEE Voice Daughter Card Rev. 2.5\"}, {\"PID\": \"WS-X6148A-GE-45AF\", \"NAME\": \"4\", \"VID\": \"V09\", \"SN\": \"SAL145130N0\", \"DESCR\": \"WS-X6148A-GE-45AF 48-port 10/100/1000 RJ45 EtherModule Rev. 4.1\"}, {\"PID\": \"WS-F6K-48-AF\", \"NAME\": \"sub-module of 4\", \"VID\": \"V04\", \"SN\": \"SAL1451348J\", \"DESCR\": \"WS-F6K-48-AF IEEE Voice Daughter Card Rev. 2.5\"}, {\"PID\": \"WS-SUP32-GE-3B\", \"NAME\": \"5\", \"VID\": \"V06\", \"SN\": \"SAL1148885Q\", \"DESCR\": \"WS-SUP32-GE-3B 9 ports Supervisor Engine 32 8GE Rev. 4.5\"}, {\"PID\": \"WS-F6K-MSFC2A\", \"NAME\": \"msfc sub-module of 5\", \"VID\": \"\", \"SN\": \"SAL11488ESQ\", \"DESCR\": \"WS-F6K-MSFC2A Cat6k MSFC 2A daughterboard Rev. 4.0\"}, {\"PID\": \"WS-F6K-PFC3B\", \"NAME\": \"WS-F6K-PFC3B Policy Feature Card 3 sub-module of 5\", \"VID\": \"V01\", \"SN\": \"SAL11488L9N\", \"DESCR\": \"WS-F6K-PFC3B Policy Feature Card 3 Rev. 2.3\"}, {\"PID\": \"WS-X6148A-GE-45AF\", \"NAME\": \"6\", \"VID\": \"V09\", \"SN\": \"SAL14512MVS\", \"DESCR\": \"WS-X6148A-GE-45AF 48-port 10/100/1000 RJ45 EtherModule Rev. 4.1\"}, {\"PID\": \"WS-F6K-48-AF\", \"NAME\": \"sub-module of 6\", \"VID\": \"V04\", \"SN\": \"SAL14512Y74\", \"DESCR\": \"WS-F6K-48-AF IEEE Voice Daughter Card Rev. 2.5\"}, {\"PID\": \"WS-C6506-E-FAN\", \"NAME\": \"WS-C6506-E-FAN 1\", \"VID\": \"V03\", \"SN\": \"DCH11392858\", \"DESCR\": \"Enhanced 6-slot Fan Tray 1\"}, {\"PID\": \"WS-CAC-6000W\", \"NAME\": \"PS 1 WS-CAC-6000W\", \"VID\": \"V04\", \"SN\": \"DCH1143Y0J4\", \"DESCR\": \"AC power supply, 6000 watt 1\"}, {\"PID\": \"WS-CAC-6000W\", \"NAME\": \"PS 2 WS-CAC-6000W\", \"VID\": \"V04\", \"SN\": \"DCH1143Y0JB\", \"DESCR\": \"AC power supply, 6000 watt 2\"}]"
//                     },
//                     { "name": "Info", "value": "" },
//                     { "name": "Status", "value": "Passed" }
//                   ]
//                 ],
//                 "format": "2.0",
//                 "globalVariables": {}
//               }
//             ]
//           }
//         ],
//         "executionId": "63e376f6a8e96e794c9a36d2",
//         "executionDate": "2023-02-08T10:18:30.132Z"
//       },
//       {
//         "deviceName": "USNCCLTLU17BDM0001",
//         "templateId": "Common-Services-DRAM-Exposure-CEWA-V1P4P0",
//         "status": true,
//         "nso_instance": "NSO_61,nso5-rnetsim4",
//         "templateRecordId": "63e344c4a8e96e794c9a204d",
//         "executionStartedAt": "2023-02-08T10:18:26.947Z",
//         "overallTmplResult": true,
//         "commands": [
//           {
//             "executedCmd": "show inventory",
//             "command": "show inventory",
//             "cmdIndex": 1,
//             "overAllCmdResult": true,
//             "cmdOutPut": "\r\nshow inventory\r\nNAME: \"Chassis\",  DESCR: \"Nexus9000 93180YC-EX chassis\"          \r\nPID: N9K-C93180YC-EX     ,  VID: V03 ,  SN: FDO22381Q0T          \r\n\r\nNAME: \"Slot 1\",  DESCR: \"48x10/25G + 6x40/100G Ethernet Module\" \r\nPID: N9K-C93180YC-EX     ,  VID: V03 ,  SN: FDO22381Q0T          \r\n\r\nNAME: \"Power Supply 1\",  DESCR: \"Nexus9000 93180YC-EX chassis Power Supply\"\r\nPID: NXA-PAC-650W-PE     ,  VID: V02 ,  SN: ART2233F9T5          \r\n\r\nNAME: \"Power Supply 2\",  DESCR: \"Nexus9000 93180YC-EX chassis Power Supply\"\r\nPID: NXA-PAC-650W-PE     ,  VID: V02 ,  SN: ART2233F9UK          \r\n\r\nNAME: \"Fan 1\",  DESCR: \"Nexus9000 93180YC-EX chassis Fan Module\"\r\nPID: NXA-FAN-30CFM-F     ,  VID: V01 ,  SN: N/A                  \r\n\r\nNAME: \"Fan 2\",  DESCR: \"Nexus9000 93180YC-EX chassis Fan Module\"\r\nPID: NXA-FAN-30CFM-F     ,  VID: V01 ,  SN: N/A                  \r\n\r\nNAME: \"Fan 3\",  DESCR: \"Nexus9000 93180YC-EX chassis Fan Module\"\r\nPID: NXA-FAN-30CFM-F     ,  VID: V01 ,  SN: N/A                  \r\n\r\nNAME: \"Fan 4\",  DESCR: \"Nexus9000 93180YC-EX chassis Fan Module\"\r\nPID: NXA-FAN-30CFM-F     ,  VID: V01 ,  SN: N/A                  \r\n\r\n",
//             "commandCollectedAt": 1675851508068,
//             "evaluatedRules": [
//               {
//                 "op": "Script",
//                 "opvariable": "",
//                 "rule": {},
//                 "result": true,
//                 "template": "cisco_ios_show_inventory_cewa_v1p4p0.template",
//                 "analysis": "cisco_ide_switch_snapshot_analysis_cewa_v1p4p0.py",
//                 "overallstatus": true,
//                 "overallmessage": "Passed",
//                 "customStatus": "Passed",
//                 "customStatCode": "Pass",
//                 "executionStatus": true,
//                 "scriptResult": "Executed Successfully.",
//                 "fields": [
//                   [
//                     { "name": "Name", "value": "OUTPUT" },
//                     {
//                       "name": "Value",
//                       "value": "[{\"PID\": \"N9K-C93180YC-EX\", \"NAME\": \"Chassis\", \"VID\": \"V03 \", \"SN\": \"FDO22381Q0T\", \"DESCR\": \"Nexus9000 93180YC-EX chassis\"}, {\"PID\": \"N9K-C93180YC-EX\", \"NAME\": \"Slot 1\", \"VID\": \"V03 \", \"SN\": \"FDO22381Q0T\", \"DESCR\": \"48x10/25G + 6x40/100G Ethernet Module\"}, {\"PID\": \"NXA-PAC-650W-PE\", \"NAME\": \"Power Supply 1\", \"VID\": \"V02 \", \"SN\": \"ART2233F9T5\", \"DESCR\": \"Nexus9000 93180YC-EX chassis Power Supply\"}, {\"PID\": \"NXA-PAC-650W-PE\", \"NAME\": \"Power Supply 2\", \"VID\": \"V02 \", \"SN\": \"ART2233F9UK\", \"DESCR\": \"Nexus9000 93180YC-EX chassis Power Supply\"}, {\"PID\": \"NXA-FAN-30CFM-F\", \"NAME\": \"Fan 1\", \"VID\": \"V01 \", \"SN\": \"N\", \"DESCR\": \"Nexus9000 93180YC-EX chassis Fan Module\"}, {\"PID\": \"NXA-FAN-30CFM-F\", \"NAME\": \"Fan 2\", \"VID\": \"V01 \", \"SN\": \"N\", \"DESCR\": \"Nexus9000 93180YC-EX chassis Fan Module\"}, {\"PID\": \"NXA-FAN-30CFM-F\", \"NAME\": \"Fan 3\", \"VID\": \"V01 \", \"SN\": \"N\", \"DESCR\": \"Nexus9000 93180YC-EX chassis Fan Module\"}, {\"PID\": \"NXA-FAN-30CFM-F\", \"NAME\": \"Fan 4\", \"VID\": \"V01 \", \"SN\": \"N\", \"DESCR\": \"Nexus9000 93180YC-EX chassis Fan Module\"}]"
//                     },
//                     { "name": "Info", "value": "" },
//                     { "name": "Status", "value": "Passed" }
//                   ]
//                 ],
//                 "format": "2.0",
//                 "globalVariables": {}
//               }
//             ]
//           }
//         ],
//         "executionId": "63e376f6a8e96e794c9a36d4",
//         "executionDate": "2023-02-08T10:18:30.136Z"
//       },
//       {
//         "deviceName": "GAATLEP01R1",
//         "templateId": "Common-Services-DRAM-Exposure-CEWA-V1P4P0",
//         "status": true,
//         "nso_instance": "NSO_61,nso5-rnetsim4",
//         "templateRecordId": "63e344c4a8e96e794c9a204d",
//         "executionStartedAt": "2023-02-08T10:18:26.940Z",
//         "overallTmplResult": true,
//         "commands": [
//           {
//             "executedCmd": "show inventory",
//             "command": "show inventory",
//             "cmdIndex": 1,
//             "overAllCmdResult": true,
//             "cmdOutPut": "\r\nshow inventory\r\nNAME: \"3845 chassis\", DESCR: \"3845 chassis\"\r\nPID: CISCO3845         , VID: V03 , SN: FTX1345AJ4R\r\n\r\nNAME: \"c3845 Motherboard with Gigabit Ethernet on Slot 0\", DESCR: \"c3845 Motherboard with Gigabit Ethernet\"\r\nPID: CISCO3845         , VID: V07 , SN: FTX1345AJ4R\r\n\r\nNAME: \"WAN Interface Card - HWIC CSU/DSU on Slot 0 SubSlot 0\", DESCR: \"WAN Interface Card - HWIC CSU/DSU\"\r\nPID: HWIC-2DSU-T2      , VID: V01 , SN: FOC141368NA\r\n\r\nNAME: \"WAN Interface Card - HWIC CSU/DSU on Slot 0 SubSlot 1\", DESCR: \"WAN Interface Card - HWIC CSU/DSU\"\r\nPID: HWIC-1DSU-T1      , VID: V01 , SN: FOC141368NA\r\n\r\nNAME: \"WAN Interface Card - HWIC Serial 2A/S on Slot 0 SubSlot 3\", DESCR: \"WAN Interface Card - HWIC Serial 2A/S\"\r\nPID: HWIC-2A/S         , VID: V02 , SN: FOC135041JL\r\n\r\nNAME: \"PVDMII DSP SIMM with four DSPs on Slot 0 SubSlot 4\", DESCR: \"PVDMII DSP SIMM with four DSPs\"\r\nPID: PVDM2-64          , VID: V01 , SN: FOC134346WY\r\n\r\nNAME: \"Enhanced High Density Voice Network Module on Slot 3\", DESCR: \"Enhanced High Density Voice Network Module\"\r\nPID:                   , VID: V  , SN: FOC07231SWW\r\n\r\nNAME: \"One port T1 voice interface daughtercard on Slot 3 SubSlot 0\", DESCR: \"One port T1 voice interface daughtercard\"\r\nPID: VWIC-1MFT-T1=     , VID: 1.0, SN: 35509003   \r\n\r\nNAME: \"Four port FXS DID voice interface daughtercard on Slot 3 SubSlot 1\", DESCR: \"Four port FXS DID voice interface daughtercard\"\r\nPID: VIC-4FXS/DID=     , VID: 3.1, SN: FOC1101048N\r\n\r\nNAME: \"NM-SE on Slot 4\", DESCR: \"NM-SE\"\r\nPID: NM-CUE            , VID: V03, SN: FOC09493TGR\r\n\r\nNAME: \"40GB IDE Disc Daughter Card on Slot 4 SubSlot 0\", DESCR: \"40GB IDE Disc Daughter Card\"\r\nPID:                   , VID:    , SN: FOC10022GNU\r\n\r\n\r\nGAATLEP01R1# ",
//             "commandCollectedAt": 1675851508134,
//             "evaluatedRules": [
//               {
//                 "op": "Script",
//                 "opvariable": "",
//                 "rule": {},
//                 "result": true,
//                 "template": "cisco_ios_show_inventory_cewa_v1p4p0.template",
//                 "analysis": "cisco_ide_switch_snapshot_analysis_cewa_v1p4p0.py",
//                 "overallstatus": true,
//                 "overallmessage": "Passed",
//                 "customStatus": "Passed",
//                 "customStatCode": "Pass",
//                 "executionStatus": true,
//                 "scriptResult": "Executed Successfully.",
//                 "fields": [
//                   [
//                     { "name": "Name", "value": "OUTPUT" },
//                     {
//                       "name": "Value",
//                       "value": "[{\"PID\": \"CISCO3845\", \"NAME\": \"3845 chassis\", \"VID\": \"V03 \", \"SN\": \"FTX1345AJ4R\", \"DESCR\": \"3845 chassis\"}, {\"PID\": \"CISCO3845\", \"NAME\": \"c3845 Motherboard with Gigabit Ethernet on Slot 0\", \"VID\": \"V07 \", \"SN\": \"FTX1345AJ4R\", \"DESCR\": \"c3845 Motherboard with Gigabit Ethernet\"}, {\"PID\": \"HWIC-2DSU-T2\", \"NAME\": \"WAN Interface Card - HWIC CSU/DSU on Slot 0 SubSlot 0\", \"VID\": \"V01 \", \"SN\": \"FOC141368NA\", \"DESCR\": \"WAN Interface Card - HWIC CSU/DSU\"}, {\"PID\": \"HWIC-1DSU-T1\", \"NAME\": \"WAN Interface Card - HWIC CSU/DSU on Slot 0 SubSlot 1\", \"VID\": \"V01 \", \"SN\": \"FOC141368NA\", \"DESCR\": \"WAN Interface Card - HWIC CSU/DSU\"}, {\"PID\": \"HWIC-2A/S\", \"NAME\": \"WAN Interface Card - HWIC Serial 2A/S on Slot 0 SubSlot 3\", \"VID\": \"V02 \", \"SN\": \"FOC135041JL\", \"DESCR\": \"WAN Interface Card - HWIC Serial 2A/S\"}, {\"PID\": \"PVDM2-64\", \"NAME\": \"PVDMII DSP SIMM with four DSPs on Slot 0 SubSlot 4\", \"VID\": \"V01 \", \"SN\": \"FOC134346WY\", \"DESCR\": \"PVDMII DSP SIMM with four DSPs\"}, {\"PID\": \"\", \"NAME\": \"Enhanced High Density Voice Network Module on Slot 3\", \"VID\": \"V  \", \"SN\": \"FOC07231SWW\", \"DESCR\": \"Enhanced High Density Voice Network Module\"}, {\"PID\": \"VWIC-1MFT-T1=\", \"NAME\": \"One port T1 voice interface daughtercard on Slot 3 SubSlot 0\", \"VID\": \"1.0\", \"SN\": \"35509003\", \"DESCR\": \"One port T1 voice interface daughtercard\"}, {\"PID\": \"VIC-4FXS/DID=\", \"NAME\": \"Four port FXS DID voice interface daughtercard on Slot 3 SubSlot 1\", \"VID\": \"3.1\", \"SN\": \"FOC1101048N\", \"DESCR\": \"Four port FXS DID voice interface daughtercard\"}, {\"PID\": \"NM-CUE\", \"NAME\": \"NM-SE on Slot 4\", \"VID\": \"V03\", \"SN\": \"FOC09493TGR\", \"DESCR\": \"NM-SE\"}, {\"PID\": \"\", \"NAME\": \"40GB IDE Disc Daughter Card on Slot 4 SubSlot 0\", \"VID\": \"\", \"SN\": \"FOC10022GNU\", \"DESCR\": \"40GB IDE Disc Daughter Card\"}]"
//                     },
//                     { "name": "Info", "value": "" },
//                     { "name": "Status", "value": "Passed" }
//                   ]
//                 ],
//                 "format": "2.0",
//                 "globalVariables": {}
//               }
//             ]
//           }
//         ],
//         "executionId": "63e376f6a8e96e794c9a36d6",
//         "executionDate": "2023-02-08T10:18:30.185Z"
//       },
//       {
//         "deviceName": "USAZGNDGD01FIE0001",
//         "templateId": "Common-Services-DRAM-Exposure-CEWA-V1P4P0",
//         "status": true,
//         "nso_instance": "NSO_61,nso5-rnetsim4",
//         "templateRecordId": "63e344c4a8e96e794c9a204d",
//         "executionStartedAt": "2023-02-08T10:18:26.945Z",
//         "overallTmplResult": true,
//         "commands": [
//           {
//             "executedCmd": "show inventory",
//             "command": "show inventory",
//             "cmdIndex": 1,
//             "overAllCmdResult": true,
//             "cmdOutPut": "\r\nshow inventory\r\nNAME: \"c36xx Stack\", DESCR: \"c36xx Stack\"\r\nPID: WS-C3650-48PS     , VID: V05  , SN: FDO2150Q0MA\r\n\r\nNAME: \"Switch 1\", DESCR: \"WS-C3650-48FS-L\"\r\nPID: WS-C3650-48FS-L   , VID: V05  , SN: FDO2150Q0MA\r\n\r\nNAME: \"Switch 1 - Power Supply A\", DESCR: \"Switch 1 - Power Supply A\"\r\nPID: PWR-C2-1025WAC    , VID: V02  , SN: LIT213227NS\r\n\r\nNAME: \"Switch 1 - Power Supply B\", DESCR: \"Switch 1 - Power Supply B\"\r\nPID: PWR-C2-1025WAC    , VID: V02  , SN: LIT213224U6\r\n\r\nNAME: \"Gi1/1/1\", DESCR: \"1000BaseSX SFP\"\r\nPID: GLC-SX-MMD         , VID: V01  , SN: ACW213000QZ    \r\n\r\n\r\nUSAZGNDGD01FIE0001# ",
//             "commandCollectedAt": 1675851508186,
//             "evaluatedRules": [
//               {
//                 "op": "Script",
//                 "opvariable": "",
//                 "rule": {},
//                 "result": true,
//                 "template": "cisco_ios_show_inventory_cewa_v1p4p0.template",
//                 "analysis": "cisco_ide_switch_snapshot_analysis_cewa_v1p4p0.py",
//                 "overallstatus": true,
//                 "overallmessage": "Passed",
//                 "customStatus": "Passed",
//                 "customStatCode": "Pass",
//                 "executionStatus": true,
//                 "scriptResult": "Executed Successfully.",
//                 "fields": [
//                   [
//                     { "name": "Name", "value": "OUTPUT" },
//                     {
//                       "name": "Value",
//                       "value": "[{\"PID\": \"WS-C3650-48PS\", \"NAME\": \"c36xx Stack\", \"VID\": \"V05  \", \"SN\": \"FDO2150Q0MA\", \"DESCR\": \"c36xx Stack\"}, {\"PID\": \"WS-C3650-48FS-L\", \"NAME\": \"Switch 1\", \"VID\": \"V05  \", \"SN\": \"FDO2150Q0MA\", \"DESCR\": \"WS-C3650-48FS-L\"}, {\"PID\": \"PWR-C2-1025WAC\", \"NAME\": \"Switch 1 - Power Supply A\", \"VID\": \"V02  \", \"SN\": \"LIT213227NS\", \"DESCR\": \"Switch 1 - Power Supply A\"}, {\"PID\": \"PWR-C2-1025WAC\", \"NAME\": \"Switch 1 - Power Supply B\", \"VID\": \"V02  \", \"SN\": \"LIT213224U6\", \"DESCR\": \"Switch 1 - Power Supply B\"}, {\"PID\": \"GLC-SX-MMD\", \"NAME\": \"Gi1/1/1\", \"VID\": \"V01  \", \"SN\": \"ACW213000QZ\", \"DESCR\": \"1000BaseSX SFP\"}]"
//                     },
//                     { "name": "Info", "value": "" },
//                     { "name": "Status", "value": "Passed" }
//                   ]
//                 ],
//                 "format": "2.0",
//                 "globalVariables": {}
//               }
//             ]
//           }
//         ],
//         "executionId": "63e376f6a8e96e794c9a36d8",
//         "executionDate": "2023-02-08T10:18:30.231Z"
//       },
//       {
//         "deviceName": "MABOSOF01E1",
//         "templateId": "Common-Services-DRAM-Exposure-CEWA-V1P4P0",
//         "status": true,
//         "nso_instance": "NSO_61,nso5-rnetsim4",
//         "templateRecordId": "63e344c4a8e96e794c9a204d",
//         "executionStartedAt": "2023-02-08T10:18:26.944Z",
//         "overallTmplResult": true,
//         "commands": [
//           {
//             "executedCmd": "show inventory",
//             "command": "show inventory",
//             "cmdIndex": 1,
//             "overAllCmdResult": true,
//             "cmdOutPut": "\r\nshow inventory\r\nNAME: \"1\", DESCR: \"WS-C3560-48PS\"\r\nPID: WS-C3560-48PS-S   , VID: V07  , SN: FDO1321Y06R\r\n\r\nNAME: \"GigabitEthernet0/1\", DESCR: \"1000BaseSX SFP\"\r\nPID:                     , VID:      , SN: H301431         \r\n\r\n\r\nMABOSOF01E1# ",
//             "commandCollectedAt": 1675851508258,
//             "evaluatedRules": [
//               {
//                 "op": "Script",
//                 "opvariable": "",
//                 "rule": {},
//                 "result": true,
//                 "template": "cisco_ios_show_inventory_cewa_v1p4p0.template",
//                 "analysis": "cisco_ide_switch_snapshot_analysis_cewa_v1p4p0.py",
//                 "overallstatus": true,
//                 "overallmessage": "Passed",
//                 "customStatus": "Passed",
//                 "customStatCode": "Pass",
//                 "executionStatus": true,
//                 "scriptResult": "Executed Successfully.",
//                 "fields": [
//                   [
//                     { "name": "Name", "value": "OUTPUT" },
//                     {
//                       "name": "Value",
//                       "value": "[{\"PID\": \"WS-C3560-48PS-S\", \"NAME\": \"1\", \"VID\": \"V07  \", \"SN\": \"FDO1321Y06R\", \"DESCR\": \"WS-C3560-48PS\"}, {\"PID\": \"\", \"NAME\": \"GigabitEthernet0/1\", \"VID\": \"\", \"SN\": \"H301431\", \"DESCR\": \"1000BaseSX SFP\"}]"
//                     },
//                     { "name": "Info", "value": "" },
//                     { "name": "Status", "value": "Passed" }
//                   ]
//                 ],
//                 "format": "2.0",
//                 "globalVariables": {}
//               }
//             ]
//           }
//         ],
//         "executionId": "63e376f6a8e96e794c9a36da",
//         "executionDate": "2023-02-08T10:18:30.298Z"
//       }
//     ],
//     "executionIds": "[\"63e376f6a8e96e794c9a36d0\",\"63e376f6a8e96e794c9a36d2\",\"63e376f6a8e96e794c9a36d4\",\"63e376f6a8e96e794c9a36d6\",\"63e376f6a8e96e794c9a36d8\",\"63e376f6a8e96e794c9a36da\"]"
//   },
//   {
//     "executionObjects": [
//       {
//         "deviceName": "C3845-ROBOT",
//         "templateId": "Common-Services-DRAM-Exposure-CEWA-V1P4P0",
//         "status": true,
//         "nso_instance": "NSO_61,nso5-lsa4-rb",
//         "templateRecordId": "63e344c4a8e96e794c9a204d",
//         "executionStartedAt": "2023-02-08T10:18:26.948Z",
//         "overallTmplResult": true,
//         "commands": [
//           {
//             "executedCmd": "show inventory",
//             "command": "show inventory",
//             "cmdIndex": 1,
//             "overAllCmdResult": true,
//             "cmdOutPut": "\r\nNAME: \"3845 chassis\", DESCR: \"3845 chassis\"\r\nPID: CISCO3845         , VID: V01 , SN: FTX1248A0SE\r\n\r\nNAME: \"c3845 Motherboard with Gigabit Ethernet on Slot 0\", DESCR: \"c3845 Motherboard with Gigabit Ethernet\"\r\nPID: CISCO3845-MB      , VID: V07 , SN: FOC124524YS\r\n\r\nNAME: \"Thirtytwo Port Low-Speed Async on Slot 1\", DESCR: \"Thirtytwo Port Low-Speed Async\"\r\nPID: NM-32A            , VID: V01, SN: 36688892   \r\n\r\nNAME: \"Thirtytwo Port Low-Speed Async on Slot 2\", DESCR: \"Thirtytwo Port Low-Speed Async\"\r\nPID: NM-32A            , VID: V01, SN: 36688909   \r\n\r\n\r\nC3845-Robot#",
//             "commandCollectedAt": 1675851509326,
//             "evaluatedRules": [
//               {
//                 "op": "Script",
//                 "opvariable": "",
//                 "rule": {},
//                 "result": true,
//                 "template": "cisco_ios_show_inventory_cewa_v1p4p0.template",
//                 "analysis": "cisco_ide_switch_snapshot_analysis_cewa_v1p4p0.py",
//                 "overallstatus": true,
//                 "overallmessage": "Passed",
//                 "customStatus": "Passed",
//                 "customStatCode": "Pass",
//                 "executionStatus": true,
//                 "scriptResult": "Executed Successfully.",
//                 "fields": [
//                   [
//                     { "name": "Name", "value": "OUTPUT" },
//                     {
//                       "name": "Value",
//                       "value": "[{\"PID\": \"CISCO3845\", \"NAME\": \"3845 chassis\", \"VID\": \"V01 \", \"SN\": \"FTX1248A0SE\", \"DESCR\": \"3845 chassis\"}, {\"PID\": \"CISCO3845-MB\", \"NAME\": \"c3845 Motherboard with Gigabit Ethernet on Slot 0\", \"VID\": \"V07 \", \"SN\": \"FOC124524YS\", \"DESCR\": \"c3845 Motherboard with Gigabit Ethernet\"}, {\"PID\": \"NM-32A\", \"NAME\": \"Thirtytwo Port Low-Speed Async on Slot 1\", \"VID\": \"V01\", \"SN\": \"36688892\", \"DESCR\": \"Thirtytwo Port Low-Speed Async\"}, {\"PID\": \"NM-32A\", \"NAME\": \"Thirtytwo Port Low-Speed Async on Slot 2\", \"VID\": \"V01\", \"SN\": \"36688909\", \"DESCR\": \"Thirtytwo Port Low-Speed Async\"}]"
//                     },
//                     { "name": "Info", "value": "" },
//                     { "name": "Status", "value": "Passed" }
//                   ]
//                 ],
//                 "format": "2.0",
//                 "globalVariables": {}
//               }
//             ]
//           }
//         ],
//         "executionId": "63e376f7a8e96e794c9a36dc",
//         "executionDate": "2023-02-08T10:18:31.368Z"
//       },
//       {
//         "deviceName": "C3945-ROBOT",
//         "templateId": "Common-Services-DRAM-Exposure-CEWA-V1P4P0",
//         "status": true,
//         "nso_instance": "NSO_61,nso5-lsa4-rb",
//         "templateRecordId": "63e344c4a8e96e794c9a204d",
//         "executionStartedAt": "2023-02-08T10:18:26.945Z",
//         "overallTmplResult": false,
//         "commands": [
//           {
//             "executedCmd": "show inventory",
//             "command": "show inventory",
//             "cmdIndex": 1,
//             "overAllCmdResult": false,
//             "cmdOutPut": "",
//             "commandCollectedAt": "",
//             "error": "{\"type\":\"rpc.method.failed\",\"code\":-32000,\"message\":\"Method failed\",\"data\":{\"reason\":\"Failed to connect to device C3945-ROBOT: connection refused: NEDCOM CONNECT: Authenticate: Exhausted available authentication methods. Server allowed: [ publickey keyboard-interactive password ] in new state\"},\"internal\":\"jsonrpc_schema2225\"}"
//           }
//         ],
//         "executionId": "63e376fda8e96e794c9a36de",
//         "executionDate": "2023-02-08T10:18:37.126Z"
//       }
//     ],
//     "executionIds": "[\"63e376f7a8e96e794c9a36dc\",\"63e376fda8e96e794c9a36de\"]"
//   }
// ]

var response = [
  {
    "executionObjects": [
      {
        "deviceName": "USNYNYCTP02DBM01",
        "templateId": "Common-Services-DRAM-Exposure-CEWA-V1P5P0",
        "status": true,
        "nso_instance": "RTP_NSO_56,nso5-lsa3-rd",
        "templateRecordId": "63da01c274f5f9003753ecea",
        "overallTmplResult": true,
        "commands": [
          {
            "executedCmd": "show inventory",
            "command": "show inventory",
            "cmdIndex": 1,
            "overAllCmdResult": true,
            "cmdOutPut": "\r\nshow inventory\r\nNAME: \"Chassis\",  DESCR: \"Nexus7000 C7018 (18 Slot) Chassis \"    \r\nPID: N7K-C7018           ,  VID: V01 ,  SN: TBM15243971          \r\n\r\nNAME: \"Slot 1\",  DESCR: \"10 Gbps Ethernet Module\"               \r\nPID: N7K-M132XP-12       ,  VID: V11 ,  SN: JAF1525CSQT          \r\n\r\nNAME: \"Slot 2\",  DESCR: \"10 Gbps Ethernet Module\"               \r\nPID: N7K-M132XP-12       ,  VID: V11 ,  SN: JAF1525AFBN          \r\n\r\nNAME: \"Slot 3\",  DESCR: \"10 Gbps Ethernet Module\"               \r\nPID: N7K-M132XP-12       ,  VID: V11 ,  SN: JAF1525CSTL          \r\n\r\nNAME: \"Slot 4\",  DESCR: \"10 Gbps Ethernet Module\"               \r\nPID: N7K-M132XP-12       ,  VID: V14 ,  SN: JAF1452CNCM          \r\n\r\nNAME: \"Slot 5\",  DESCR: \"10 Gbps Ethernet Module\"               \r\nPID: N7K-M132XP-12       ,  VID: V11 ,  SN: JAF1525CSRM          \r\n\r\nNAME: \"Slot 6\",  DESCR: \"10 Gbps Ethernet Module\"               \r\nPID: N7K-M132XP-12       ,  VID: V11 ,  SN: JAF1525AFBE          \r\n\r\nNAME: \"Slot 9\",  DESCR: \"Supervisor Module-1X\"                  \r\nPID: N7K-SUP1            ,  VID: V13 ,  SN: JAF1525BPPT          \r\n\r\nNAME: \"Slot 10\",  DESCR: \"Supervisor Module-1X\"                  \r\nPID: N7K-SUP1            ,  VID: V15 ,  SN: JAF1619AJGL          \r\n\r\nNAME: \"Slot 16\",  DESCR: \"1/10 Gbps Ethernet Module\"             \r\nPID: N7K-F132XP-15       ,  VID: V02 ,  SN: JAF1521BBFB          \r\n\r\nNAME: \"Slot 17\",  DESCR: \"1/10 Gbps Ethernet Module\"             \r\nPID: N7K-F132XP-15       ,  VID: V02 ,  SN: JAF1521BBGP          \r\n\r\nNAME: \"Slot 18\",  DESCR: \"1/10 Gbps Ethernet Module\"             \r\nPID: N7K-F132XP-15       ,  VID: V02 ,  SN: JAF1701AAEP          \r\n\r\nNAME: \"Slot 19\",  DESCR: \"Fabric card module\"                    \r\nPID: N7K-C7018-FAB-1     ,  VID: V04 ,  SN: JAF1524DBCJ          \r\n\r\nNAME: \"Slot 20\",  DESCR: \"Fabric card module\"                    \r\nPID: N7K-C7018-FAB-1     ,  VID: V04 ,  SN: JAF1524DBCF          \r\n\r\nNAME: \"Slot 21\",  DESCR: \"Fabric card module\"                    \r\nPID: N7K-C7018-FAB-1     ,  VID: V04 ,  SN: JAF1524DBBH          \r\n\r\nNAME: \"Slot 22\",  DESCR: \"Fabric card module\"                    \r\nPID: N7K-C7018-FAB-1     ,  VID: V04 ,  SN: JAF1524DASJ          \r\n\r\nNAME: \"Slot 23\",  DESCR: \"Fabric card module\"                    \r\nPID: N7K-C7018-FAB-1     ,  VID: V04 ,  SN: JAF1524DBDE          \r\n\r\nNAME: \"Slot 33\",  DESCR: \"Nexus7000 C7018 (18 Slot) Chassis Power Supply\"\r\nPID: N7K-AC-7.5KW-US     ,  VID: V01 ,  SN: DTM152204YS          \r\n\r\nNAME: \"Slot 34\",  DESCR: \"Nexus7000 C7018 (18 Slot) Chassis Power Supply\"\r\nPID: N7K-AC-7.5KW-US     ,  VID: V01 ,  SN: DTM1322001G          \r\n\r\nNAME: \"Slot 35\",  DESCR: \"Nexus7000 C7018 (18 Slot) Chassis Power Supply\"\r\nPID: N7K-AC-7.5KW-US     ,  VID: V01 ,  SN: DTM1520005Q          \r\n\r\nNAME: \"Slot 36\",  DESCR: \"Nexus7000 C7018 (18 Slot) Chassis Power Supply\"\r\nPID: N7K-AC-7.5KW-US     ,  VID: V01 ,  SN: DTM152204Z7          \r\n\r\nNAME: \"Slot 37\",  DESCR: \"Nexus7000 C7018 (18 Slot) Chassis Fan Module\"\r\nPID: N7K-C7018-FAN       ,  VID: V01 ,  SN: FOX1520XA2Y          \r\n\r\nNAME: \"Slot 38\",  DESCR: \"Nexus7000 C7018 (18 Slot) Chassis Fan Module\"\r\nPID: N7K-C7018-FAN       ,  VID: V01 ,  SN: FOX1520XA0C          \r\n\r\n",
            "commandCollectedAt": 1675671942690,
            "evaluatedRules": [
              {
                "op": "Script",
                "opvariable": "",
                "rule": {},
                "result": true,
                "template": "cisco_ios_show_inventory_cewa_V1P5P0.template",
                "analysis": "cisco_ide_switch_snapshot_analysis_cewa_V1P5P0.py",
                "overallstatus": true,
                "overallmessage": "Passed",
                "customStatus": "Passed",
                "customStatCode": "Pass",
                "executionStatus": true,
                "scriptResult": "Executed Successfully.",
                "fields": [
                  {
                    "name": "OUTPUT",
                    "value": "[{\"PID\": \"N7K-C7018\", \"NAME\": \"Chassis\", \"VID\": \"V01 \", \"SN\": \"TBM15243971\", \"DESCR\": \"Nexus7000 C7018 (18 Slot) Chassis \"}, {\"PID\": \"N7K-M132XP-12\", \"NAME\": \"Slot 1\", \"VID\": \"V11 \", \"SN\": \"JAF1525CSQT\", \"DESCR\": \"10 Gbps Ethernet Module\"}, {\"PID\": \"N7K-M132XP-12\", \"NAME\": \"Slot 2\", \"VID\": \"V11 \", \"SN\": \"JAF1525AFBN\", \"DESCR\": \"10 Gbps Ethernet Module\"}, {\"PID\": \"N7K-M132XP-12\", \"NAME\": \"Slot 3\", \"VID\": \"V11 \", \"SN\": \"JAF1525CSTL\", \"DESCR\": \"10 Gbps Ethernet Module\"}, {\"PID\": \"N7K-M132XP-12\", \"NAME\": \"Slot 4\", \"VID\": \"V14 \", \"SN\": \"JAF1452CNCM\", \"DESCR\": \"10 Gbps Ethernet Module\"}, {\"PID\": \"N7K-M132XP-12\", \"NAME\": \"Slot 5\", \"VID\": \"V11 \", \"SN\": \"JAF1525CSRM\", \"DESCR\": \"10 Gbps Ethernet Module\"}, {\"PID\": \"N7K-M132XP-12\", \"NAME\": \"Slot 6\", \"VID\": \"V11 \", \"SN\": \"JAF1525AFBE\", \"DESCR\": \"10 Gbps Ethernet Module\"}, {\"PID\": \"N7K-SUP1\", \"NAME\": \"Slot 9\", \"VID\": \"V13 \", \"SN\": \"JAF1525BPPT\", \"DESCR\": \"Supervisor Module-1X\"}, {\"PID\": \"N7K-SUP1\", \"NAME\": \"Slot 10\", \"VID\": \"V15 \", \"SN\": \"JAF1619AJGL\", \"DESCR\": \"Supervisor Module-1X\"}, {\"PID\": \"N7K-F132XP-15\", \"NAME\": \"Slot 16\", \"VID\": \"V02 \", \"SN\": \"JAF1521BBFB\", \"DESCR\": \"1/10 Gbps Ethernet Module\"}, {\"PID\": \"N7K-F132XP-15\", \"NAME\": \"Slot 17\", \"VID\": \"V02 \", \"SN\": \"JAF1521BBGP\", \"DESCR\": \"1/10 Gbps Ethernet Module\"}, {\"PID\": \"N7K-F132XP-15\", \"NAME\": \"Slot 18\", \"VID\": \"V02 \", \"SN\": \"JAF1701AAEP\", \"DESCR\": \"1/10 Gbps Ethernet Module\"}, {\"PID\": \"N7K-C7018-FAB-1\", \"NAME\": \"Slot 19\", \"VID\": \"V04 \", \"SN\": \"JAF1524DBCJ\", \"DESCR\": \"Fabric card module\"}, {\"PID\": \"N7K-C7018-FAB-1\", \"NAME\": \"Slot 20\", \"VID\": \"V04 \", \"SN\": \"JAF1524DBCF\", \"DESCR\": \"Fabric card module\"}, {\"PID\": \"N7K-C7018-FAB-1\", \"NAME\": \"Slot 21\", \"VID\": \"V04 \", \"SN\": \"JAF1524DBBH\", \"DESCR\": \"Fabric card module\"}, {\"PID\": \"N7K-C7018-FAB-1\", \"NAME\": \"Slot 22\", \"VID\": \"V04 \", \"SN\": \"JAF1524DASJ\", \"DESCR\": \"Fabric card module\"}, {\"PID\": \"N7K-C7018-FAB-1\", \"NAME\": \"Slot 23\", \"VID\": \"V04 \", \"SN\": \"JAF1524DBDE\", \"DESCR\": \"Fabric card module\"}, {\"PID\": \"N7K-AC-7.5KW-US\", \"NAME\": \"Slot 33\", \"VID\": \"V01 \", \"SN\": \"DTM152204YS\", \"DESCR\": \"Nexus7000 C7018 (18 Slot) Chassis Power Supply\"}, {\"PID\": \"N7K-AC-7.5KW-US\", \"NAME\": \"Slot 34\", \"VID\": \"V01 \", \"SN\": \"DTM1322001G\", \"DESCR\": \"Nexus7000 C7018 (18 Slot) Chassis Power Supply\"}, {\"PID\": \"N7K-AC-7.5KW-US\", \"NAME\": \"Slot 35\", \"VID\": \"V01 \", \"SN\": \"DTM1520005Q\", \"DESCR\": \"Nexus7000 C7018 (18 Slot) Chassis Power Supply\"}, {\"PID\": \"N7K-AC-7.5KW-US\", \"NAME\": \"Slot 36\", \"VID\": \"V01 \", \"SN\": \"DTM152204Z7\", \"DESCR\": \"Nexus7000 C7018 (18 Slot) Chassis Power Supply\"}, {\"PID\": \"N7K-C7018-FAN\", \"NAME\": \"Slot 37\", \"VID\": \"V01 \", \"SN\": \"FOX1520XA2Y\", \"DESCR\": \"Nexus7000 C7018 (18 Slot) Chassis Fan Module\"}, {\"PID\": \"N7K-C7018-FAN\", \"NAME\": \"Slot 38\", \"VID\": \"V01 \", \"SN\": \"FOX1520XA0C\", \"DESCR\": \"Nexus7000 C7018 (18 Slot) Chassis Fan Module\"}]",
                    "info": "",
                    "status": "Passed"
                  }
                ],
                "format": "1.0",
                "globalVariables": {}
              }
            ]
          }
        ],
        "executionId": "63e0b988d8461f0045c1c29d",
        "executionDate": "2023-02-06T08:25:44.725Z"
      },
      {
        "deviceName": "USNCCLTLU17BDM0002",
        "templateId": "Common-Services-DRAM-Exposure-CEWA-V1P5P0",
        "status": true,
        "nso_instance": "RTP_NSO_56,nso5-lsa3-rd",
        "templateRecordId": "63da01c274f5f9003753ecea",
        "overallTmplResult": true,
        "commands": [
          {
            "executedCmd": "show inventory",
            "command": "show inventory",
            "cmdIndex": 1,
            "overAllCmdResult": true,
            "cmdOutPut": "\r\nshow inventory\r\nNAME: \"Chassis\",  DESCR: \"Nexus9000 93180YC-EX chassis\"          \r\nPID: N9K-C93180YC-EX     ,  VID: V03 ,  SN: FDO22390749          \r\n\r\nNAME: \"Slot 1\",  DESCR: \"48x10/25G + 6x40/100G Ethernet Module\" \r\nPID: N9K-C93180YC-EX     ,  VID: V03 ,  SN: FDO22390749          \r\n\r\nNAME: \"Power Supply 1\",  DESCR: \"Nexus9000 93180YC-EX chassis Power Supply\"\r\nPID: NXA-PAC-650W-PE     ,  VID: V02 ,  SN: ART2233F9Y9          \r\n\r\nNAME: \"Power Supply 2\",  DESCR: \"Nexus9000 93180YC-EX chassis Power Supply\"\r\nPID: NXA-PAC-650W-PE     ,  VID: V02 ,  SN: ART2233F9S9          \r\n\r\nNAME: \"Fan 1\",  DESCR: \"Nexus9000 93180YC-EX chassis Fan Module\"\r\nPID: NXA-FAN-30CFM-F     ,  VID: V01 ,  SN: N/A                  \r\n\r\nNAME: \"Fan 2\",  DESCR: \"Nexus9000 93180YC-EX chassis Fan Module\"\r\nPID: NXA-FAN-30CFM-F     ,  VID: V01 ,  SN: N/A                  \r\n\r\nNAME: \"Fan 3\",  DESCR: \"Nexus9000 93180YC-EX chassis Fan Module\"\r\nPID: NXA-FAN-30CFM-F     ,  VID: V01 ,  SN: N/A                  \r\n\r\nNAME: \"Fan 4\",  DESCR: \"Nexus9000 93180YC-EX chassis Fan Module\"\r\nPID: NXA-FAN-30CFM-F     ,  VID: V01 ,  SN: N/A                  \r\n\r\n",
            "commandCollectedAt": 1675671942827,
            "evaluatedRules": [
              {
                "op": "Script",
                "opvariable": "",
                "rule": {},
                "result": true,
                "template": "cisco_ios_show_inventory_cewa_V1P5P0.template",
                "analysis": "cisco_ide_switch_snapshot_analysis_cewa_V1P5P0.py",
                "overallstatus": true,
                "overallmessage": "Passed",
                "customStatus": "Passed",
                "customStatCode": "Pass",
                "executionStatus": true,
                "scriptResult": "Executed Successfully.",
                "fields": [
                  {
                    "name": "OUTPUT",
                    "value": "[{\"PID\": \"N9K-C93180YC-EX\", \"NAME\": \"Chassis\", \"VID\": \"V03 \", \"SN\": \"FDO22390749\", \"DESCR\": \"Nexus9000 93180YC-EX chassis\"}, {\"PID\": \"N9K-C93180YC-EX\", \"NAME\": \"Slot 1\", \"VID\": \"V03 \", \"SN\": \"FDO22390749\", \"DESCR\": \"48x10/25G + 6x40/100G Ethernet Module\"}, {\"PID\": \"NXA-PAC-650W-PE\", \"NAME\": \"Power Supply 1\", \"VID\": \"V02 \", \"SN\": \"ART2233F9Y9\", \"DESCR\": \"Nexus9000 93180YC-EX chassis Power Supply\"}, {\"PID\": \"NXA-PAC-650W-PE\", \"NAME\": \"Power Supply 2\", \"VID\": \"V02 \", \"SN\": \"ART2233F9S9\", \"DESCR\": \"Nexus9000 93180YC-EX chassis Power Supply\"}, {\"PID\": \"NXA-FAN-30CFM-F\", \"NAME\": \"Fan 1\", \"VID\": \"V01 \", \"SN\": \"N\", \"DESCR\": \"Nexus9000 93180YC-EX chassis Fan Module\"}, {\"PID\": \"NXA-FAN-30CFM-F\", \"NAME\": \"Fan 2\", \"VID\": \"V01 \", \"SN\": \"N\", \"DESCR\": \"Nexus9000 93180YC-EX chassis Fan Module\"}, {\"PID\": \"NXA-FAN-30CFM-F\", \"NAME\": \"Fan 3\", \"VID\": \"V01 \", \"SN\": \"N\", \"DESCR\": \"Nexus9000 93180YC-EX chassis Fan Module\"}, {\"PID\": \"NXA-FAN-30CFM-F\", \"NAME\": \"Fan 4\", \"VID\": \"V01 \", \"SN\": \"N\", \"DESCR\": \"Nexus9000 93180YC-EX chassis Fan Module\"}]",
                    "info": "",
                    "status": "Passed"
                  }
                ],
                "format": "1.0",
                "globalVariables": {}
              }
            ]
          }
        ],
        "executionId": "63e0b988d8461f0045c1c29f",
        "executionDate": "2023-02-06T08:25:44.860Z"
      }
    ],
    "executionIds": "[\"63e0b988d8461f0045c1c29d\",\"63e0b988d8461f0045c1c29f\"]"
  },
  {
    "executionObjects": [
      {
        "deviceName": "USNCCLTLU17BDM0001",
        "templateId": "Common-Services-DRAM-Exposure-CEWA-V1P5P0",
        "status": true,
        "nso_instance": "RTP_NSO_56,nso5-lsa3-rb",
        "templateRecordId": "63da01c274f5f9003753ecea",
        "overallTmplResult": true,
        "commands": [
          {
            "executedCmd": "show inventory",
            "command": "show inventory",
            "cmdIndex": 1,
            "overAllCmdResult": true,
            "cmdOutPut": "\r\nshow inventory\r\nNAME: \"Chassis\",  DESCR: \"Nexus9000 93180YC-EX chassis\"          \r\nPID: N9K-C93180YC-EX     ,  VID: V03 ,  SN: FDO22381Q0T          \r\n\r\nNAME: \"Slot 1\",  DESCR: \"48x10/25G + 6x40/100G Ethernet Module\" \r\nPID: N9K-C93180YC-EX     ,  VID: V03 ,  SN: FDO22381Q0T          \r\n\r\nNAME: \"Power Supply 1\",  DESCR: \"Nexus9000 93180YC-EX chassis Power Supply\"\r\nPID: NXA-PAC-650W-PE     ,  VID: V02 ,  SN: ART2233F9T5          \r\n\r\nNAME: \"Power Supply 2\",  DESCR: \"Nexus9000 93180YC-EX chassis Power Supply\"\r\nPID: NXA-PAC-650W-PE     ,  VID: V02 ,  SN: ART2233F9UK          \r\n\r\nNAME: \"Fan 1\",  DESCR: \"Nexus9000 93180YC-EX chassis Fan Module\"\r\nPID: NXA-FAN-30CFM-F     ,  VID: V01 ,  SN: N/A                  \r\n\r\nNAME: \"Fan 2\",  DESCR: \"Nexus9000 93180YC-EX chassis Fan Module\"\r\nPID: NXA-FAN-30CFM-F     ,  VID: V01 ,  SN: N/A                  \r\n\r\nNAME: \"Fan 3\",  DESCR: \"Nexus9000 93180YC-EX chassis Fan Module\"\r\nPID: NXA-FAN-30CFM-F     ,  VID: V01 ,  SN: N/A                  \r\n\r\nNAME: \"Fan 4\",  DESCR: \"Nexus9000 93180YC-EX chassis Fan Module\"\r\nPID: NXA-FAN-30CFM-F     ,  VID: V01 ,  SN: N/A                  \r\n\r\n",
            "commandCollectedAt": 1675671942769,
            "evaluatedRules": [
              {
                "op": "Script",
                "opvariable": "",
                "rule": {},
                "result": true,
                "template": "cisco_ios_show_inventory_cewa_V1P5P0.template",
                "analysis": "cisco_ide_switch_snapshot_analysis_cewa_V1P5P0.py",
                "overallstatus": true,
                "overallmessage": "Passed",
                "customStatus": "Passed",
                "customStatCode": "Pass",
                "executionStatus": true,
                "scriptResult": "Executed Successfully.",
                "fields": [
                  {
                    "name": "OUTPUT",
                    "value": "[{\"PID\": \"N9K-C93180YC-EX\", \"NAME\": \"Chassis\", \"VID\": \"V03 \", \"SN\": \"FDO22381Q0T\", \"DESCR\": \"Nexus9000 93180YC-EX chassis\"}, {\"PID\": \"N9K-C93180YC-EX\", \"NAME\": \"Slot 1\", \"VID\": \"V03 \", \"SN\": \"FDO22381Q0T\", \"DESCR\": \"48x10/25G + 6x40/100G Ethernet Module\"}, {\"PID\": \"NXA-PAC-650W-PE\", \"NAME\": \"Power Supply 1\", \"VID\": \"V02 \", \"SN\": \"ART2233F9T5\", \"DESCR\": \"Nexus9000 93180YC-EX chassis Power Supply\"}, {\"PID\": \"NXA-PAC-650W-PE\", \"NAME\": \"Power Supply 2\", \"VID\": \"V02 \", \"SN\": \"ART2233F9UK\", \"DESCR\": \"Nexus9000 93180YC-EX chassis Power Supply\"}, {\"PID\": \"NXA-FAN-30CFM-F\", \"NAME\": \"Fan 1\", \"VID\": \"V01 \", \"SN\": \"N\", \"DESCR\": \"Nexus9000 93180YC-EX chassis Fan Module\"}, {\"PID\": \"NXA-FAN-30CFM-F\", \"NAME\": \"Fan 2\", \"VID\": \"V01 \", \"SN\": \"N\", \"DESCR\": \"Nexus9000 93180YC-EX chassis Fan Module\"}, {\"PID\": \"NXA-FAN-30CFM-F\", \"NAME\": \"Fan 3\", \"VID\": \"V01 \", \"SN\": \"N\", \"DESCR\": \"Nexus9000 93180YC-EX chassis Fan Module\"}, {\"PID\": \"NXA-FAN-30CFM-F\", \"NAME\": \"Fan 4\", \"VID\": \"V01 \", \"SN\": \"N\", \"DESCR\": \"Nexus9000 93180YC-EX chassis Fan Module\"}]",
                    "info": "",
                    "status": "Passed"
                  }
                ],
                "format": "1.0",
                "globalVariables": {}
              }
            ]
          }
        ],
        "executionId": "63e0b988d8461f0045c1c29e",
        "executionDate": "2023-02-06T08:25:44.796Z"
      }
    ],
    "executionIds": "[\"63e0b988d8461f0045c1c29e\"]"
  }
]

// console.log(response);
DRAMdevicesArray = []
for (var j = 0; j < response.length; j++) {
  var executions = response[j]['executionObjects'];
  if (executions) {
    for (var i = 0; i < executions.length; i++) {
      var template = executions[i]; 
      // console.log(template);
      var deviceTrakingOutput = JSON.parse(template.commands[0].evaluatedRules[0].fields[0].value);
      console.log(deviceTrakingOutput);
      for (var h = 0; h < deviceTrakingOutput.length; h++) {
              DRAMdevicesArray.push({
                  deviceName: template.deviceName,
                  serialNumber: deviceTrakingOutput[h]['SN'],
                  partNumber: deviceTrakingOutput[h]['PID']
              })
            }
        }
        }
      }
console.log(DRAMdevicesArray);
 
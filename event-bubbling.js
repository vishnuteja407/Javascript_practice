// let m = document.getElementById("m");
// let d = document.getElementById("d");
// let p = document.getElementById("p");
// let s = document.getElementById("s");

// const { Console } = require("console");

// let highlight = ev => {
//     let target = ev.currentTarget;
//     target.className = "gold";
// }

// d.addEventListener("click", ev => console.log("Hi I'm a DIV"));

// [m,d,p,s].forEach(element => {
//     element.addEventListener("click", highlight)
// });

// function isGreaterOrEqualVersion(version1, version2="16.12.2"){
//     if (version1 == version2) return true;
//     version1 = version1.split(".");
//     version2 = version2.split(".");
//     for (var i=0; i <= Math.max(version1.length, version2.length); i++ ){
        
//         var comp1 = parseInt(version1[i]);
//         if (isNaN(comp1)) comp1 = 0;
//         var comp2 = parseInt(version2[i]);
//         if (isNaN(comp2)) comp2 = 0;
//         if (comp1 > comp2) return true;
//         else if (comp1 < comp2) return false; 
        
//     }
// }

var DEVICE_TYPE_VOICE = "VOICE";
var DEVICE_TYPE_DATA = "DATA";
var voiceDeviceCodesArr=["VAR", "VAE", "VRT", "VIR", "VKR", "VTR"];

function getDeviceType(hostname)
{
    var deviceCode = "";

    // Detecting device code
    if (hostname != null && hostname.length > 0)
    {
        var characterArr = hostname.split('');
        var c = '';
        var isDigitExist = false;
        var startIndex = -1;

       for (var i=0; i < characterArr.length; i++)
        {
            c = characterArr[i];
            if ( !isDigitExist && !isNaN(c) )
            {
                startIndex = i;
                isDigitExist = true;
                continue;
            }
            if (isDigitExist)
            {
                if (!isNaN(c))
                {
                    startIndex = i;
                    continue;
                }
                break;
            }
        }

       if(startIndex != -1 && hostname.length > (startIndex + 3))
        {
            deviceCode = hostname.substr( (startIndex+1),3);
            deviceCode = deviceCode.toUpperCase();
        }
    }

    // Checking device type
    if(deviceCode == null || deviceCode.trim().length == 0)
    {
        return DEVICE_TYPE_DATA;
    }
    else if( voiceDeviceCodesArr.indexOf(deviceCode) !== -1 )
    {
        return DEVICE_TYPE_VOICE;
    }
    else 
    {
        return DEVICE_TYPE_DATA;
    }

}

console.log(getDeviceType("USMEPON1M10VAR01"))
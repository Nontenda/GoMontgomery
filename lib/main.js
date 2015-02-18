var tabs = require("sdk/tabs")

tabs.on("ready", changeByMontgomery);

function changeByMontgomery(tab) {
    tab.attach({
        contentScriptFile: [ "./jquery-2.1.3.js", "./changeByMontgomery.js" ]
    });
}
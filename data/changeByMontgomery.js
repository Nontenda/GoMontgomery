jQuery.fn.replaceEachOne = function (objective, reposition) {
    this.contents().each(function(){
        if (this.nodeType == Node.ELEMENT_NODE) {
            $(this).replaceEachOne(objective, reposition);
        } else if (this.nodeType == Node.TEXT_NODE) {
            var label = document.createElement("label");
            label.innerHTML = this.nodeValue.replace(objective, reposition);
            this.parentNode.insertBefore(label, this);
            this.parentNode.removeChild(this);
        }
    });
}

$('body').replaceEachOne("gouvernement", "manoir");
$('body').replaceEachOne("Gouvernement", "Manoir");
$('body').replaceEachOne("Manuel Valls", "Brad Montgomery");
$('body').replaceEachOne("François Hollande", "Brett Montgomery");

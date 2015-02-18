jQuery.fn.replaceEachOne = function (obj) {
    this.contents().each(function () {
        $.each(obj, function (key, value) {
            if (this.nodeType == Node.ELEMENT_NODE) {
                $(this).replaceEachOne(obj);
            } else if (this.nodeType == Node.TEXT_NODE) {
                var label = document.createElement("label");

                label.innerHTML = this.nodeValue.replace(key, value);
                this.parentNode.insertBefore(label, this);
                this.parentNode.removeChild(this);
            }
        });
    });
}

$('body').replaceEachOne(
    {
        "gouvernement": "manoir",
        "Gouvernement": "Manoir",
        "Manuel Valls": "Brad Montgomery",
        "François Hollande": "Brett Montgomery"
    });

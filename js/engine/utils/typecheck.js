function isDOMElement(node) {
    try {
        //Using W3 DOM2 (works for FF, Opera and Chrome)
        return node instanceof HTMLElement;
    }
    catch(e){
        //Browsers not supporting W3 DOM2 don't have HTMLElement and
        //an exception is thrown and we end up here. Testing some
        //properties that all elements have (works on IE7)
        return (typeof node==="object")
               && (node.nodeType===1)
               && (typeof node.style === "object")
               && (typeof node.ownerDocument ==="object");
    }
}

function isEmptyObject(object) {
    try {
        // because Object.keys(new Date()).length === 0;
        // we have to do some additional check
        return object // 👈 null and undefined check
            && Object.keys(object).length === 0
            && Object.getPrototypeOf(object) === Object.prototype
    } catch(e) {
        for(var prop in object) {
            if(Object.prototype.hasOwnProperty.call(object, prop)) {
                return false;
            }
        }
        return JSON.stringify(object) === JSON.stringify({});
    }
}

export {
    isDOMElement,
    isEmptyObject,
}
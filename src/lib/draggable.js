// From: https://www.w3schools.com/howto/howto_js_draggable.asp
export function draggable(id, startX = 0, startY = 0) {
    dragElement(document.getElementById(id)); // makes element draggable

    function dragElement(element) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

        // TODO: makes these responsive ??
        element.style.top = startY + 'px';
        element.style.left = startX + 'px';

        // if present, move div from header. otherwise, move div from anywhere inside.
        var headerId = document.getElementById(element.id + '-header')
        headerId ? headerId.onmousedown = dragMouseDown : element.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e = e || window.addEventListener();
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.addEventListener();
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            element.style.top = (element.offsetTop - pos2) + 'px';
            element.style.left = (element.offsetLeft - pos1) + 'px';
        }

        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
}
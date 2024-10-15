// From: https://www.w3schools.com/howto/howto_js_draggable.asp
export function draggable(id) {
    dragElement(document.getElementById(id)); // makes element draggable

    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

        // if present, move div from header. otherwise, move div from anywhere inside.
        var headerId = document.getElementById(elmnt.id + '-header')
        headerId ? headerId.onmousedown = dragMouseDown : elmnt.onmousedown = dragMouseDown;

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
            elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
            elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
        }

        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
}
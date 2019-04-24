let value = prompt('Type a number', 0);
switch (value >= 0) {
    case true:
        if (value == 0) {
            alert(0);
        } else {
            alert(1);
        }
        break;
    case  false:
        alert(-1);
        break;
}
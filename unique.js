
uniqueInOrder = (iterable) => {
    empArr = [];
    for (var i = 0; i < iterable.length; i++) {
        if (iterable[i + 1] !== iterable[i]) {
            empArr.push(iterable[i]);
        }
    } return empArr

}
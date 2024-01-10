function addAndRemoveElements(input) {
    let newArr = [];
    for (let i = 0; i < input.length; i++) {
        let command = input[i];
        switch (command) {
            case "add": {
                newArr.push(i + 1);
                break;
            }
            case "remove": {

                newArr.pop();
                break;
            }
        }
    }
    if (newArr.length === 0) {
        console.log("Empty");
    } else {
        for (const el of newArr) {
            console.log(el);
        }
    }
}
addAndRemoveElements(['add',
    'add',
    'add',
    'add']);
addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']
);
addAndRemoveElements(['remove',
    'remove',
    'remove']
);
function sortAnArrayBy2Criteria(input) {

    let sorted = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
    for (const el of sorted) {
        console.log(el);
    }

}
sortAnArrayBy2Criteria(['alpha',
    'beta', 'gamma'])
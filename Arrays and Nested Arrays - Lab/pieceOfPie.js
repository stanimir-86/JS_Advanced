function pieceOfPie(arr, startSection, endSection) {
    let stratIndex = arr.indexOf(startSection);
    let endIndex = arr.indexOf(endSection);
    let newArr = arr.slice(stratIndex, endIndex + 1);
    return newArr;
}
pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie');
pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie')
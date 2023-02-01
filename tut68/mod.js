console.log('This is module');
function average(arr) {
    let sum = 0;
    arr.forEach(el => {
        sum += el;
    });
    return sum/(arr.length);
}
module.exports = {
    avg:average,
    name:'Harry',
    repo:'GitHub'
}
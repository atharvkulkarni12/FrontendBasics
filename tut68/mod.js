console.log('This is module');
let sum=0;
function average(arr) {
    arr.forEach(element => {
        sum+=element;
    });
    return (sum/arr.length);
}

module.exports = {
    avg: average,
    name: 'Atharv'
};
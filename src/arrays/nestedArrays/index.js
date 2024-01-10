function flattenArrays(arr) {
    let newArr = [];

    loop(arr);

    function loop(parameter) {
        for (let i = 0; i < parameter.length; i++){
            if(Array.isArray(parameter[i])){
                loop(parameter[i]);
            } else {
                newArr.push(parameter[i]);
            }
        }
    }

    return newArr;
}

const arr = [1, [2, 3], [4, [5, 6, [7, 8, [9]]]]];
console.log(flattenArrays(arr));
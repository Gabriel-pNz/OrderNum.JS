let nums = [9, 3, 10, 33, 8, 43, 2];
let aux = 0;

function ordenar (nums) {

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length;j++) {
            if (nums[i] > nums[i + j]) {
                aux = nums[i]
                nums[i] = nums[j+i]
                nums[j+i] = aux
            }
        }
    }
    return nums
}

console.log(ordenar(nums))


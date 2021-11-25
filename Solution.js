
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

    if (nums.length < 3) {
        return nums.length;
    }

    //tail = 0, add first unique value.
    let tail = 0;
    let head = 1;
    let sizeNums = nums.length;

    while (head < sizeNums) {

        //add a duplicate value, if there is such.
        if (nums[tail] === nums[head]) {
            nums[++tail] = nums[head++];
        }

        //jump over all values that occur more than twice.
        while (head < sizeNums && nums[tail] === nums[head]) {
            head++;
        }

        //add a unique value
        if (head < sizeNums) {
            nums[++tail] = nums[head++];
        }
    }
    return tail + 1;
};

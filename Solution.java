
public class Solution {

    public int removeDuplicates(int[] nums) {

        if (nums.length < 3) {
            return nums.length;
        }

        //tail = 0, add first unique value.
        int tail = 0;
        int head = 1;
        int sizeNums = nums.length;

        while (head < sizeNums) {

            //add a duplicate value, if there is such.
            if (nums[tail] == nums[head]) {
                nums[++tail] = nums[head++];
            }

            //jump over all values that occur more than twice.
            while (head < sizeNums && nums[tail] == nums[head]) {
                head++;
            }

            //add a unique value
            if (head < sizeNums) {
                nums[++tail] = nums[head++];
            }
        }

        return tail + 1;
    }
}

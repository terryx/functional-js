const bubble = (nums) => {
  let done;

  do {
    done = true;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
        const temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        done = false
      }
    }

  } while(!done);

  return nums;
}

module.exports = bubble

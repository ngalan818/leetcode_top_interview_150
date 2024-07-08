/* A very bad solution: vector.erase() is O(N), so overall complexity is O(N^2)*/

class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        for (int i = 0; i < nums.size(); i++) {
            if (i + 1 < nums.size() && nums.at(i) == nums.at(i + 1)) {
                nums.erase(nums.begin() + i);
                i--;
            }
        }
        return nums.size();
    }
};
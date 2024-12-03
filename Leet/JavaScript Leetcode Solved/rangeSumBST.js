
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let sum = 0;
    /**@param {TreeNode} r */
    function traverse(r)
    {
        if(!r) return;
        if(r.val >= low && r.val <= high)
        {
            sum += r.val;
        }
        traverse(r.left);

        if(r.right)
        {
            traverse(r.right);
        }
        return;
    };

    traverse(root);

    return sum;
};

const rightNode = new TreeNode(27, new TreeNode(24, new TreeNode(21, null, null), null), new TreeNode(30, null, null))
const leftNode = new TreeNode(9, new TreeNode(6, new TreeNode(3, null, null), null), new TreeNode(15, new TreeNode(12, null, null), null))
const node = new TreeNode(18, leftNode, rightNode)
console.log(rangeSumBST(node, 7, 15))
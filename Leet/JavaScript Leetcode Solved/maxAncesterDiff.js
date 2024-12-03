
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function(root) 
{
    let max = 0;
    /**@param {TreeNode} r */
    function dfs(r)
    {
       //NOT COMPLETE 
    }

    dfs(root);
    return max;
};

const node = new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(6, new TreeNode(4), new TreeNode(7))), new TreeNode(10, null, new TreeNode(14, new TreeNode(13), null)));

console.log(maxAncestorDiff(node));
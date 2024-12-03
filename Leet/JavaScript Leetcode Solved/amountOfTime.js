
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function(root, start) 
{
    let max = 0;
    function bfs(r)
    {
        if(!r) return 0;


        let left = bfs(r.left);
        let right = bfs(r.right);

        if(r.val === start)
        {
            max = Math.max(left, right);
            return -1;
        }
        else if(left >= 0 && right >= 0)
        {
            return Math.max(left, right) + 1;
        }
        else
        {
            max = Math.max(max, Math.abs(left - right));
            return Math.min(left,right)-1;
        }
    }

    bfs(root);

    return max;
};


const node = new TreeNode(1, new TreeNode(5, null, new TreeNode(4, new TreeNode(9), new TreeNode(2))), new TreeNode(3, new TreeNode(10), new TreeNode(6)));
console.log(amountOfTime(node, 3));
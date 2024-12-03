function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var maxDepth = function(root) 
{
    let sum = 1;
    let max = 1;
    function dfs(r)
    {
        if(!r.left)
        {
            if(sum >= max) max = sum;
            sum--;
            return;
        };

        sum++;
        dfs(r.left);
        
        if(r.right)
        {
            sum++;
            dfs(r.right);
        }
    }

    dfs(root);
    return max;
};

const node = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));

console.log(maxDepth(node));
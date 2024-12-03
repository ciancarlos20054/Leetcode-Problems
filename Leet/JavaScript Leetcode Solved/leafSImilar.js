function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) 
{
    let leaf = [];
    function dfs(r1)
    {
        if(!r1) return;

        if(!r1.left && !r1.right)
        {
            leaf.push(r1.val);
        }
        dfs(r1.left);

        if(r1.right)
        {
            dfs(r1.right);
        }
    }
    dfs(root1);
    const root1Leaf = [...leaf];
    leaf = [];
    dfs(root2);
    const root2Leaf = [...leaf];

    if(root1Leaf.length != root2Leaf.length) return false;
    for(let i = 0; i < root1Leaf.length; i++)
    {
        if(root1Leaf[i] != root2Leaf[i]) return false;
    }

    return true;
};

const node1 = new TreeNode(3, new TreeNode(5, new TreeNode(6), new TreeNode(2, new TreeNode(7), new TreeNode(4))), new TreeNode(1, new TreeNode(9), new TreeNode(8)));
const node2 = new TreeNode(3, new TreeNode(5, new TreeNode(6), new TreeNode(7)), new TreeNode(1, new TreeNode(4), new TreeNode(2, new TreeNode(9), new TreeNode(8))));

console.log(leafSimilar(node1, node2));
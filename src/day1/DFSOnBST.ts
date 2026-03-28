function traverse(
    node: BinaryNode<number> | null,
    needle: number,
): boolean | undefined {
    if (node === null) return;

    if (node.value === needle) return true;

    if (node.value > needle) return traverse(node.left, needle);
    if (node.value < needle) return traverse(node.right, needle);
    return false;
}
export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return traverse(head, needle) ?? false;
}


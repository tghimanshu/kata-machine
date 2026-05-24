// "test": "jest DFSOnBST LRU LinearSearchList BinarySearchList TwoCrystalBalls BubbleSort SinglyLinkedList DoublyLinkedList Queue Stack ArrayList MazeSolver QuickSort BTPreOrder BTInOrder BTPostOrder BTBFS CompareBinaryTrees DFSOnBST DFSGraphList Trie BFSGraphMatrix Map MinHeap RingBuffer",
export default function merge_sort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    return merge(merge_sort(arr.slice(0, mid)), merge_sort(arr.slice(mid)));
}

function merge(left: number[], right: number[]) {
    let result: number[] = [];
    let i = 0,
        j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else if (left[i] > right[j]) {
            result.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        result.push(left[i]);
        i++;
    }
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

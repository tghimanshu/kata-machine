import merge_sort from "@code/MergeSort";

test("merge-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];
    const arr2 = merge_sort(arr);
    expect(arr2).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

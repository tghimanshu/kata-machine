export default function bubble_sort(arr: number[]): void {
    // for(let i = 0; i < arr.length-1;++i){
    //     for (let j = i; j< arr.length; ++j) {
    //         if (arr[i] > arr[j]) {
    //             let temp = arr[i];
    //             arr[i] = arr[j];
    //             arr[j] = temp;
    //         }
    //     }
    // }
    for (let i = 0; i < arr.length - 1; ++i) {
        for (let j = 0; j < arr.length - i - 1; ++j) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

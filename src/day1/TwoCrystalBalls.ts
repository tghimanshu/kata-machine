export default function two_crystal_balls(breaks: boolean[]): number {
    // ThePrimeagen Version (Frontend Masters)
    // let steps = Math.floor(Math.sqrt(breaks.length));
    //
    // let first = -1;
    // for (let i = 0; i <= breaks.length; i+=steps) {
    //     if (breaks[i]) {
    //         first = i;
    //         break
    //     }
    // }
    // // if (first === -1) return -1;
    // let back = first - steps;
    // for (let i = back;i <= first; ++i) {
    //     if (breaks[i]) {
    //         return i;
    //     }
    // }
    //
    // return -1;
    //
    // My Version
    let step = Math.floor(Math.sqrt(breaks.length));
    let high = -1;
    for (let i = 0; i <= breaks.length; i += step) {
        if (breaks[i]) {
            high = i;
            break;
        }
    }
    if (high === -1) return -1;

    for (let i = high - step; i <= high; ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;

    // Binary Search won't work cause we have only 2 balls
    // So, After first all we just have to traverse from start to mid which is basically N/2 or N
    // let low = 0;
    // let high = breaks.length - 1;
    //
    // while (low < high) {
    //     const mid = Math.floor((high + low) / 2);
    //
    //     if (breaks[mid]) high = mid;
    //     else low = mid + 1;
    // }
    //
    // return breaks[low] ? low : -1;
}

// two_crystal_balls([false, false, false, true, true, true]);

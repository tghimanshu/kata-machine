export default function bs_list(haystack: number[], needle: number): boolean {
    // Primeogen Version (Frontend Masters)
    // let left = 0;
    // let right = haystack.length;
    //
    // do {
    //     const mid = Math.floor((left + right) / 2);
    //
    //     if (haystack[mid] === needle) return true;
    //     // right inclusive
    //     else if (haystack[mid] > needle) right = mid;
    //     // left exclusive
    //     else left = mid + 1;
    // } while (left < right);
    //
    // return false;
    // Self Version
    let low = 0;
    let high = haystack.length - 1;

    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2);

        if (haystack[mid] === needle) {
            return true;
        } else if (haystack[mid] < needle) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
}

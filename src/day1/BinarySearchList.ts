export default function bs_list(haystack: number[], needle: number): boolean {
    let left = 0;
    let right = haystack.length;
        
    do {
        let mid = Math.floor((left + right) / 2);
        if (haystack[mid] === needle) return true;

        // Note: Right Exclusive
        if (haystack[mid] > needle) right = mid;
        // Note: Left Inclusive
        if (haystack[mid] < needle) left = mid+1;
    } while (left < right);

    return false;
}

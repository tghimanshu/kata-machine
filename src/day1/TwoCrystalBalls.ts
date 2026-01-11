export default function two_crystal_balls(breaks: boolean[]): number {
    let steps = Math.floor(Math.sqrt(breaks.length));

    let first = -1;
    for (let i = 0; i <= breaks.length; i+=steps) {
        if (breaks[i]) {
            first = i;
            break
        }
    }
    // if (first === -1) return -1;
    let back = first - steps;
    for (let i = back;i <= first; ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}

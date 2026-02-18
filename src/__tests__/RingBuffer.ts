import RingBuffer from "@code/RingBuffer";

test("RingBuffer", function() {
    const buffer = new RingBuffer<number>();

    buffer.push(5);
    console.log(buffer);
    expect(buffer.pop()).toEqual(5);
    console.log(buffer);
    expect(buffer.pop()).toEqual(undefined);
    console.log(buffer);

    buffer.push(42);
    console.log(buffer);
    buffer.push(9);
    console.log(buffer);
    console.log(buffer);
    console.log(buffer);
    expect(buffer.pop()).toEqual(42);
    console.log(buffer);
    expect(buffer.pop()).toEqual(9);
    console.log(buffer);
    expect(buffer.pop()).toEqual(undefined);
    console.log(buffer);

    buffer.push(42);
    console.log(buffer);
    buffer.push(9);
    console.log(buffer);
    buffer.push(12);
    console.log(buffer);
    expect(buffer.get(2)).toEqual(12);
    console.log(buffer);
    expect(buffer.get(1)).toEqual(9);
    console.log(buffer);
    expect(buffer.get(0)).toEqual(42);
    console.log(buffer);
});

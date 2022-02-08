function reflectString(input: string): string {
    let reflectedWord = '';
    const chars:string[] = input.split('');
    const reflectionLetters = {
    a: 'z', b: 'y', c: 'x', d: 'w', e: 'v', f: 'u', g: 't', h: 's', i: 'r', j: 'q', k: 'p', l: 'o', m: 'n', n: 'm', o: 'l', p: 'k', q: 'j', r: 'i', s: 'h', t: 'g', u: 'f', v: 'e', w: 'd', x: 'c',
    y: 'b', z: 'a' }
    chars.forEach((char) => {
    reflectedWord += reflectionLetters[char];

    });

    return reflectedWord;
}
console.log(reflectString("name"));
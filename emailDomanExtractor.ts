function findEmailDomain(address: string): string {
    const lastAtIndex = address.lastIndexOf('@');
    return address.slice(lastAtIndex + 1, address.length);
}
console.log(findEmailDomain('beehive@gmail.com'));
console.log(findEmailDomain('+_)(*&^%$#@!@hotmail.org'));
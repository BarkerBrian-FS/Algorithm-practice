"use strict";

function isAlphaNumeric(c) {
    return /^[a-zA-Z0-9]*$/.test(c);
}

function isPalindrome(s) {
    const arr = s.split("").filter((c) => isAlphaNumeric(c));
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        if (arr[l].toLowerCase() !== arr[r].toLowerCase()) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}

function* main() {
    const s = yield;
    const res = isPalindrome(s);
    console.log(res);
}

class EOFError extends Error {}
{
    const gen = main();
    const next = (line) => gen.next(line).done && process.exit();
    let buf = "";
    next();
    process.stdin.setEncoding("utf8");
    process.stdin.on("data", (data) => {
        const lines = (buf + data).split("\n");
        buf = lines.pop();
        lines.forEach(next);
    });
    process.stdin.on("end", () => {
        buf && next(buf);
        gen.throw(new EOFError());
    });
}


//Palindrome Partitioning

function isPalindrome(word){
    let l = 0;
    let r = word.length-1

    while(l < r){
        if(word.charAt(l) !== word.charAt(r)) return false;
        l++;
        r--
    }
    return true
}

// Interview preferred mathematical solution number palidrome

function numPalidrome(x){
    if(x < 0 || (x % 10 === 0 && !== 0)) return false;

    let reversedHalf = 0;

    while(x > reversedHalf){
        reversedHalf = reversedHalf * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}
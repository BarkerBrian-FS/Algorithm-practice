function isAlphaNumeric(c) {
    return /^[a-zA-Z0-9]*$/.test(c);
}

function isPalindrome(s) {
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
        // Note 1, 2
        while (l < r && !isAlphaNumeric(s.charAt(l))) {
            l++;
        }
        while (l < r && !isAlphaNumeric(s.charAt(r))) {
            r--;
        }
        // ignore case
        if (s.charAt(l).toLowerCase() !== s.charAt(r).toLowerCase()) {
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

//two pointers sliding window 
function longestSubStringWithouRepeat(s){
    let longest = 0;
    let window = new Set();
    let l = 0;
    for(let right = 0; righ<s.length; ++right){
        while(window.has(s[right])){
            window.delete(s[l])
            ++l
        }
        window.add(s[right])
        longest = Math.max(longest, right-l+1)
    }
    return longest
}
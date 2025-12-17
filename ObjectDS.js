//unordered collection of key value pairs key must be a string or symbol
// no loops allowed

const obj = {
    name: 'Bruce',
    age: 25,
    'key-three': true,
    sayMyName: function(){
        console.log(this.name)
    }
}
obj.hobby = 'football'
delete obj.hobby


console.log(obj.name)
console.log(obj['age'])
console.log(obj['key-three'])

//Object.keys(), .values(), entries()


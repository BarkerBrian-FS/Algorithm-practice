class MinStack{
    constructor(){
        this.mainStack = [];
        this.minStack = [];
    }

    push(val){
        this.mainStack.push(val);
        //push onto minStack if empty or new val <= current min 
        if(this.minStack.length === 0 || val < this.getMin()){
            this.minStack.push(val)
        }
    }

    pop(){
        const val = this.mainStack.pop();
        if(val === this.getMin()){
            this.minStack.pop();
        }
    }

    top(){
        return this.mainStack[this.mainStack.length - 1];
    }

    getMin(){
        return this.minStack[this.minStack.length - 1];
    }
}
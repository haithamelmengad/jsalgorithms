class Stack {
  constructor(){
    this.stack = [];
    this.length = this.stack.length;
  }
  
  pop(){
      let popped = this.stack.slice(0,1);
      this.stack = this.stack.slice(1,this.stack.length);
      this.length = this.stack.length;
      return popped;
  }
  
  peek(){
      return this.stack[0];
  }
  
  push(x){
      this.stack.splice(0, 0, x);
      this.length = this.stack.length;
  }
  
  
};


class MyQueue {

    constructor(){
      this.enqueueStack = new Stack();
      this.dequeueStack = new Stack();
    }
    
    
    enqueue(x){
      this.enqueueStack.push(x);
    }
    
    shift(){
      if(!this.dequeueStack.length){
        while(this.enqueueStack.length>0){
            this.dequeueStack.push(this.enqueueStack.pop());
        }
      }
    }

    peek(){
      this.shift();
      return this.dequeueStack.peek()
    }
  
    dequeue(){
      this.shift();
      return this.dequeueStack.pop();
    }
}
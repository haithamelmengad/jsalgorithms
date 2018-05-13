var _ = require('underscore');

class Node {
  constructor(data){
    this.data = data;
    this.adjacent = [];
    this.visited = false;
  }
  
  getAdjacent(){
    return this.adjacent;
  }
}

class Queue {
  constructor(){
    this.queue =[];
    this.length = this.queue.length;
  }
  
  enqueue(x){
    this.queue.push(x);
    this.length++;
  }
  
  dequeue(){
    this.length--;
    return this.queue.shift();
  
  }
}
  
class Graph {
  constructor(){
    this.vertices = [];
  }
  
  addVertex(v){
    if(!(this.vertices.indexOf(v)===-1)){
      this.vertices.push(v);
    }
  }
  
  addEdge(a,b){
    this.addVertex(a);
    this.addVertex(b);
    a.adjacent.push(b);
  }
  
}

function isConnected(g, start, end){
  let queue = new Queue();
  start.visited = true;
  queue.enqueue(start);
  
  while(queue.length>0){
    let v = queue.dequeue();
    for(let n of v.adjacent){
      console.log(n);
      if(!n.visited){
        n.visited = true;
        if(n === end){
          return true;
        }
        queue.enqueue(n);
      }
    }
      
  }
  return false;
}

let world = new Graph();
let andromeda = new Node('Andromeda');
let milkyway = new Node('Milky Way');
let earth = new Node('Earth');
let sun = new Node('Sun');
world.addEdge(andromeda, milkyway);
world.addEdge(milkyway, sun);
world.addVertex(earth);
console.log(isConnected(world, andromeda, milkyway));
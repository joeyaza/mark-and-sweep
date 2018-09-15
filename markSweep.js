
let heap = [];

root = () => {
	
	return heap[0];

}

let a = {name: 'a'};
heap.push(a);

let b = {name: 'b'};
heap.push(b);
a.b = b;

let c = {name: 'c'};
heap.push(c);
a.c = c;

delete a.c;

let d = {name: 'd'};
heap.push(d);
b.d = d;

mark = () => {
	
	let todo = [root()];

	while (todo.length) {
	 
		let o = todo.pop();
	
		if (!o.__markBit__) {

  		o.__markBit__ = 1;
  		
  		for (let item in o) {
  		  
    		  if (typeof o[item] == 'object') {
    		
    		    todo.push(o[item]);
    		    
    		  }
    		  
  		}
		
		}
		
	}
	
}


sweep = () => {

  heap = heap.filter( (o) => {

    if (o.__markBit__ == 1) {

      o.__markBit__ = 0;

      return true;

    } else {

      return false;

    }

  });

}

console.log('Heap before GC>>>>>> \n', heap);
console.log("--------------------------------");
console.log("--------------------------------");
mark();
sweep();

console.log('Heap after GC>>>>>> \n', heap);

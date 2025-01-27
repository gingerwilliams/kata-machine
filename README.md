## What is the Big O?
Always ask this question before you proceed.

### Important Concepts
1. Growth is with respect to the input
2. Constants are dropped
3. Worst case is usually the way we measure

## Linear Search
search(arr, v)
a[0, ....n]

Asky Character
E = "E" 

Worst Case: we go from 0 to n and never find "E"

If our input goes from one to two we have to search double the space. 
from two to four, double again that space. And it keeps growing equally with the array
O(n) 
As your input grows so does the time it takes equivalently. if it grows by 10 you get 10 cycles of this loop

```
npx jest Linear
```

## Binary Search
Classic off by one problem that ever exitsts
The Basis for other algorithms we will encounter

### Important Concepts
**Is it ordered?** If so you have advantages you can take with that data
Lets say it is. How can we search this array?

ordered array (ordered/sorted numbers)
[0, ....n]

[0, ..., xi = V?, ...n]
we can jump 10% of n to Xi are you equal to my value? No?
lets jump 10 more. Xi are you equal to my value? No? But youre now officially larger than V?
I better walk back 10% and then linear seach my way through that.


Worst Case: keep jumping 10% and never find it
10 operations of jumping plus .1n
(10 + 1n) ignore the constanst
O(n)

Instead of jumping 10%, Jump 50%, Xi are you equal to my value?
If it is the value? yay done.
Else we only have to check one half of the array
Half it again

N/2
N/4
N/8
N/16
(N/2^k) = 1
N = 2^k

logN amount of halving

Log 4096 = 12 (halfed 12 times)

### Important Concepts
**Another BigO trick** If the input halves at each step, its likely O(LogN) of O(NlogN)

```
search(arr, needle, lo, hi)
```

loop until a condition happens
when lo and hi become each other
```
[0, ....n]
```

midpoint = lo + (hi - lo)/2 Floor of this

lo plus is to adjest where we are. offset

### Important Concepts
**[lo, hi )** lo is always inclusive, hi is always exclusive

Value of the midpoint
```
V = arr[midpoint]
```
condition 1
```
if arr[midpoint] === needle
    return true;
```

condition 2
```
else if arr[midpoint] > midpoint
    adjust the low
    low = midpoint + 1
```

else 
```
    hi = midpoint

```

exit condition
```
    do while lo < hi
    return false
```


https://frontendmasters.com/courses/algorithms/pseudo-code-binary-search/
https://www.geeksforgeeks.org/binary-search-in-javascript/







## Naming
### Lig-Machine
Lengthy Instrumentation Generating Massive Anticompetitive Computational Help for Intermediate Coders // n9

### Ligmata
Literal Improvement Gaining Master and Tutelage on Algorithms
Let's Intelligently Generate Multiple Algorithm Training Assessments // permdaddy

### Sugma Nuts
Studious Users Get Major Abilities. New Useful Training for Students

### Ligma Farts
Learn Intermediate Groundbreaking Massive Algorithms. Free Algorithm Research & Training System


### If you have a suggestion
make an issue and we will come up with the potential name.

### WARNING
I have just started to add algorithms, so the number of supported algorithms is
limited at the moment, but will grow fairly quick.

### WARNING
OUT OF DATE.  We have quite a few more.  need to update
### Supported Algorithm
* Insertion sort
* Merge sort
* QuickSort
* Prim's MST (Adjacency List)
* Dijkstra's Shortest Path (Adjacency List)

### Supported Data Structures
* Singly linked list
* Doubly linked list
* Queue
* Stack
* Graph with Adjacency List
* Graph with Adjacency Matrix (untested)

### How It Works

Make sure you have [Node.js](https://nodejs.org/en/) and yarn installed: `npm install --global yarn`

clone the repo and install the dependencies

```bash
yarn install
```

edit the `ligma.config.js` file
```javascript
module.exports = {
    dsa: [
        "InsertionSort",
        "MergeSort",
        "Queue",
        "Stack",
        "QuickSort",
        "DijkstraList",
        "PrimsList",
    ],
}
```

create a day of katas, this will use the list in the `ligma.config.js`.
```bash
yarn generate
```

this will progressively create folders named

```
src/day1
src/day2
...
```

`yarn generate` will also update the `tsconfig.json` and `jest.config` to point
the latest `day` folder via tspaths.  This allows us to avoid updating anything
for testing each day.

#### Testing
```
yarn test
```

I have yet to create a testing strategy for next sets of algorithms, but we
will get there when i cross that bridge.

### Help wanted
A simple way to specify test, thinking something like `tests.json` and `cat
test.json 2> /dev/null` to specify the tests to run.  tests.json wouldn't be
committed.

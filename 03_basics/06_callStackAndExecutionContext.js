// EXECUTION CONTEXT -> how javascript will run and exevute the file you created

// JS runs programs in 2 phases

// First thing that is created is Global Execution Context
// and a variable is referred to globa EC like this.
// the value of this in browser is window Object
// Sometimes react code doesnt work as we might have rendered at server side 
// and we dont have access to window object of server side(obtained through global this)

// JS is single-threaded and everything in JS is a Process.

// Second is Functional Execution Context(or Function EC)

// Another EC used in mongoose is Eval EC.(Property of Global Object)

// JS runs programs in 2 phases
// 1st Phase -> Memory Creation Phase / Memory Phase / Creation Phase
//              variables and other declared things get allocated space
// 2nd Phase -> Execution Phase
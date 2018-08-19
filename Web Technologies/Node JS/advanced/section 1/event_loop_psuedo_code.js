//life cycle of node application

//node myFile.js

//when ever a program has tasks, some sort of array keeps record of the these tasks 
//like bookkeeping
const pendingTimers = [];   // check one: any pending functions with setTimeout, setInterval, setImmediate?
const pendingOSTasks = [];      // check two: any pending OS tasks? (like http server listening on port)
const pendingOperation = [];    // check three: any pending long running operations still in the program? (Like fuction call with FS Module)

//new timers, tasks, operations are recorded from myFile running into array get thier items
myFile.runContents();

//helper function
function shouldContinue(){
    //if any array has items in it, shouldContinue will return true and event loop will go 1 more tick
    return pendingTimers.length || pendingOSTasks.length || pendingOperation.length;
}

// entire body executes in one 'tick' i.e this 1 while loop in 1 tick
// this works as event loop
while(shouldContinue()) {   //a check to decide whether go for another event  loop
    // 1) node looks at pendingTimers and sees which functions are
    // passed to setTimeout, setInterval
    // if any timer is expired node calls the relevent callback 

    // 2) Node looks at pendingOSTasks (like a network request is come) 
    // and pendingOperations (like file is fetched from FS module)
    // and if any of these tasks are complete then calls relevent callbacks

    // 3) Node pauses the execution and seats idle 
    // rather then just continue the event loop as fast as possible and go on with next step
    // wait till new tasks or events occur and 
    // Continue when...
    // - a timer is about to complete
    // - a new pendingOSTask is done
    // - a new pendingOperation is done

    // 4) look at pendingTimers. looks at any functions passed to setImmediate 
    // and calls the relevent callbacks 

    // 5) Handle any 'close' events (running clean up code)
    // clear or termindate the running listners, servers
    // clear dangling lose ends (minor unresolved problems)
}

//exit back to terminal
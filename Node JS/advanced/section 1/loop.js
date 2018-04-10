//node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperation = [];

myFile.runContents();

//helper function
function shouldContinue(){
    // check one: any pending setTimeout, setInterval, setImmediate?
    // check two: Any pending OS tasks? (like server listening to port)
    // check three: any pending long running operations? (Like FS Module)
    return pendingTimers.length || pendingOSTasks.length || pendingOperation.length;
}

// entire body executes in one 'tick'
while(shouldContinue()) {
    // 1) node looks at pendingTimers and sees if any functions
    // are ready to be called. i.e. setTimeout, setInterval

    // 2) Node looks at pendingOSTasks and pendingOperations
    // ands calls relevent callbacks

    // 3) Node pauses the execution and seats idle and Continue when...
    // - a new pendingOSTask is done
    // - a new pendingOperation is done
    // - a timer is about to complete

    // 4) look at pendingTimers. Call any setImmediate

    // 5) Handle any 'close' events (running clean up code)
}

//exit back to terminal
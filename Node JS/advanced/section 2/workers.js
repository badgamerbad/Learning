const express = require('express');
const app = express();

const Worker = require('webworker-threads').Worker;

app.get('/', (req, res) => {
    const worker = new Worker(function(){
        // defines the object that represent the thread
        this.onmessage = function(){
            let counter = 0;
            while (counter < 1e9) {
                counter++;
            }
            postMessage(counter);
        }
    });

    //worker interface
    worker.onmessage = function(counter){
        console.log(counter);
    }

    //worker interface
    worker.postMessage();
})



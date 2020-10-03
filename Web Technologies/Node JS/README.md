
# NODE JS
Debugging

    Joyent's Guide
    Debugger
    Node Inspector
    Visual Studio Code
    Cloud9
    Brackets

Profiling

    node --prof ./app.js
    node --prof-process ./the-generated-log-file

Heapdumps

    node-heapdump with Chrome Developer Tools

Flamegraphs

    0x
    jam3/devtool then Chrome Developer Tools Flame Charts
    Dtrace and StackVis — Only supported on SmartOS
    clinicjs

Tracing

    Interactive Stack Traces with TraceGL

Logging - Libraries that output debugging information

    Caterpillar
    Tracer
    scribbles

Libraries that enhance stack trace information

    Longjohn

Benchmarking

    Apache Bench: ab -n 100000 -c 1 http://127.0.0.1:9778/
    wrk

Other

    Trace
    Vantage
    Bugger
    Google Tracing Framework
    Paul Irish's Guide

Legacy These use to work but are no longer maintained or no longer applicable to modern node versions.

    https://github.com/bnoordhuis/node-profiler - replaced by built-in debugging
    https://github.com/c4milo/node-webkit-agent - replaced by node inspector
    https://nodetime.com/ - defunct


Info Taken from [here.](https://stackoverflow.com/a/16512303/5720826)
/* ::::::::::::::::::::::::::::::::::::::::::: {INDEX} ::::::::::::::::::::::::::::::::::::::::::::
# GAME VERSION: 0.00.002
- FILE VERSION: 1.00.002
- INFO:
    ...info
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
import ShowIO from './engine/ShowIO.js';
import Logger from './assets/Logger.js'

window.L = new Logger(1);

L.info("'Index.js' is loading...");

var MyShow = new ShowIO('FPS', [1200, 600]);

MyShow.setup();
MyShow.run();
     
L.success("'Index.js' loaded!");
L.warn("Test warning");
L.error("Test error");
L.event("Event dispatched");
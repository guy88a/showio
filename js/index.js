/* ::::::::::::::::::::::::::::::::::::::::::: {INDEX} ::::::::::::::::::::::::::::::::::::::::::::
# GAME VERSION: 0.00.001
- FILE VERSION: 1.00.000
- INFO:
    ...info
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
import ShowIO from './engine/ShowIO.js';
import Logger from './assets/Logger.js'

var _ = new Logger(1);

_.info("'Index.js' is loading");
_.log("Hello Show!");

window.ShowIO = window.ShowIO 
                || typeof ShowIO === 'function' && ShowIO
                || function(){ return { message: 'no ShowIO function available' }; };
     
_.success("'Index.js' loaded");
/* ::::::::::::::::::::::::::::::::::::::::::: {INDEX} ::::::::::::::::::::::::::::::::::::::::::::
# GAME VERSION: 0.00.001
- FILE VERSION: 1.00.000
- INFO:
    ...info
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
import ShowIO from './engine/ShowIO.js';
import Logger from './assets/Logger.js'

window._ = new Logger(1);

_.info("'Index.js' is loading...");

window.ShowIO = window.ShowIO 
                || typeof ShowIO === 'function' && ShowIO()
                || function(){ return { message: 'no ShowIO function available' }; };
     
_.success("'Index.js' loaded!");
_.warn("'Index.js' loaded warning test!");
_.error("error test");
_.warn("warning test!");
/* :::::::::::::::::::::::::::::::::::::::::: {LOGGER} ::::::::::::::::::::::::::::::::::::::::::::
# GAME VERSION: 0.00.002
- FILE VERSION: 1.00.002
- INFO:
    ...info
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

export default function Logger(isTest = 0, forceTrace = 0) {

    // ========================================= STYLES ===========================================
    const STYLE_TITLE = 'padding: 1px 3px 1px 5px; font-weight: 700; color: #f2f2f2; border-radius: 3px 0 0 3px';
    const STYLE_MESSAGE = 'padding: 1px 5px 1px 3px; color: #222; background-color: #e2e2e2; border-radius: 0 3px 3px 0';
    const STYLE_LINK = 'padding: 1px 0px 1px 3px; color: #222; text-decoration: underline; background-color: #e2e2e2;';

    // ======================================= FUNCTIONS ==========================================
    function log(message = 'Test Logger Message') {

        let consoleMethod = forceTrace === 2 ? console.trace : console.log;
        let titleBackgroundColor = '#555555';

        switch(this) {
            case 'info':
                titleBackgroundColor = '#318af9';
                consoleMethod = forceTrace === 1 ? console.trace : consoleMethod;
                break;
            case 'success':
                titleBackgroundColor = '#12ab6b';
                consoleMethod = forceTrace === 1 ? console.trace : consoleMethod;
                break;
            case 'warn':
                titleBackgroundColor = '#e1931e';
                consoleMethod = console.warn;
                break;
            case 'error':
                titleBackgroundColor = '#de332f';
                consoleMethod = console.error;
                break;
            default:
                titleBackgroundColor = '#555555';
        }

        if(isTest) {
            let [link, messageRest] = extractMessageLink(message);
            return consoleMethod(`%cShowIO:%c${link}%c${messageRest}`, `${STYLE_TITLE}; background-color: ${titleBackgroundColor}`, `${STYLE_LINK}`, `${STYLE_MESSAGE};`);
        }
        
        console.log(`%cShowIO:%c${message}`, `${STYLE_TITLE}; background-color: ${titleBackgroundColor}`, `${STYLE_MESSAGE};`);
    }

    function extractMessageLink(str){
        if(typeof str === 'string') {
            const matches = str.match(/'(.*?)'/);
            const hasMatched = matches?.length > 0 ? 1 : 0;
            const strMessage = hasMatched ? str.replace(`${matches[0]}`, '') : str;
            const strLink = hasMatched ? matches[1] : '';
            return [strLink, strMessage];
        }
        return ['',`Stringified: ${new String(str)}`];
    }

    // ========================================= RETURN ===========================================
    return {
        log: log.bind('log'),
        info: log.bind('info'),
        success: log.bind('success'),
        warn: log.bind('warn'),
        error: log.bind('error'),
    }
}
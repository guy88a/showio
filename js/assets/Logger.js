/* :::::::::::::::::::::::::::::::::::::::::::: {LOG} :::::::::::::::::::::::::::::::::::::::::::::
# GAME VERSION: 0.00.001
- FILE VERSION: 1.00.000
- INFO:
    ...info
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

export default function Logger(isTest = 0) {

    const STYLE_TITLE = 'padding: 1px 3px 1px 5px; font-weight: 700;; border-radius: 3px 0 0 3px';
    const STYLE_MESSAGE = 'padding: 1px 5px 1px 3px; color: #222; background-color: #e2e2e2; border-radius: 0 3px 3px 0';
    const STYLE_LINK = 'padding: 1px 0px 1px 3px; color: #222; text-decoration: underline; background-color: #e2e2e2;';

    function log(message = 'Test Logger Message') {
        if(isTest) {
            let [link, messageRest] = extractFirstText(message);
            console.log(`%cShowIO:%c${link}%c${messageRest}`, `${STYLE_TITLE}; background-color: ${this || '#e2e2e2'}`, `${STYLE_LINK}`, `${STYLE_MESSAGE};`);
            return;
        }
        console.log(`%cShowIO:%c${message}`, `${STYLE_TITLE}; background-color: ${this || '#e2e2e2'}`, `${STYLE_MESSAGE};`);
    }

    function getPath(message) {
        let doc = new DOMParser().parseFromString(message, 'text/html');
        return [ ...doc.querySelector('a').map( function(a){ return a.textContent; } ) ];
    }

    function extractFirstText(str){
        const matches = str.match(/'(.*?)'/);
        const hasMatched = matches?.length > 0 ? 1 : 0;
        const strMessage = hasMatched ? str.replace(`${matches[0]}`, '') : str;
        const strLink = hasMatched ? matches[1] : '';
        return [strLink, strMessage];
    }

    return {
        log: log.bind('#555'),
        info: log.bind('#318af9'),
        success: log.bind('#12ab6b'),
        warn: log.bind('#e1931e'),
        error: log.bind('#de332f'),
    }
}
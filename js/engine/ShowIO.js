/* :::::::::::::::::::::::::::::::::::::::::: {SHOW IO} :::::::::::::::::::::::::::::::::::::::::::
# GAME VERSION: 0.00.001
- FILE VERSION: 1.00.001
- INFO:
    ...info
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

/**
 * @param {Array}  dimensions           | default shows dimensions (width, height)
 * @param {Number} mobile               | adjust for mobile if value is 1
 * @param {Function} defalutConfigs     | general configurations
 * @param {Array}  defaultShowsArray    | array of shows configured ahead
 * @param {Array}  classicShowsArray    | array of another framework's games instances
 * 
 * @returns {Object}            | ShowIO's API
 */
export default function ShowIO(
    dimensions  = [1920, 1080],
    mobile      = 0,
    defalutConfigs = {},
    defaultShowsArray = [],
    classicShowsArray = [], //TODO: Implement
){
    
    // =================================== MAIN CONFIGURATIONS ====================================
    let configurations = defalutConfigs || {};

    let activeShow = function(id = 0){};

    let allShows = [...defaultShowsArray];

    let showsManager = function(shows = []){};

    // ======================================= MAIN METHODS =======================================
    function prepareShow() {
        //TODO: Implement
    }

    /**
     * Play Show
     *  plays current active show
     * @param {Number} frameId  | if exists, return to a saved show's frame
     */
    function playShow(frameId = 0) {
        return this.activeShow.play(frameId);
    }

    function cutCurrentShow() {
        //TODO: Implement
    }

    function endShow(rameId = 0) {
        //TODO: Implement
    }

    /**
     * Create New Show
     *  ganerate a new game show
     * @param {String} name     | name of new show
     */
    function createNewShow(name = 'New Show') {
        return allShows.push(function(){});
    }

    _.log("Hello Show!");
    
    // ========================================== RETURN ==========================================
    return {
        prepare: prepareShow,
        run: playShow,
        cut: cutCurrentShow,
        end: endShow,

        produceNewShow: createNewShow,
    }

}
/* ShowIO Ends */

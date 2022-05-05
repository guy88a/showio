/* :::::::::::::::::::::::::::::::::::::::::: {SHOW IO} :::::::::::::::::::::::::::::::::::::::::::
# GAME VERSION: 0.00.001
- FILE VERSION: 1.00.000
- INFO:
    ...info
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

/**
 * @param {Array}  dimensions   | default shows dimensions (width, height)
 * @param {Number} mobile       | adjust for mobile if value is 1
 * 
 * @returns {Object}            | ShowIO's API
 */
export default function ShowIO(
    dimensions  = [1920, 1080],
    mobile      = 0
){
    
    // =================================== MAIN CONFIGURATIONS ====================================
    let activeShow = function(){};
    this.activeShow = activeShow;

    let allShows = [];
    this.allShows = allShows;

    let showManager = function(){};
    this.showManager = showManager;

    // ======================================= MAIN METHODS =======================================
    /**
     * Play Show
     *  plays current active show
     * @param {Number} frameId  | if exists, return to a saved show's frame
     */
    function playShow(frameId = 0) {
        return this.activeShow.play(frameId);
    }

    /**
     * Create New Show
     *  ganerate a new game show
     * @param {String} name     | name of new show
     */
    function createNewShow(name = 'New Show') {
        return allShows.push(function(){});
    }
    
    // ========================================== RETURN ==========================================
    return {
        run: playShow,
        createNewShow: createNewShow,
    }

}
/* ShowIO Ends */

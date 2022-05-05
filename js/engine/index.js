/* :::::::::::::::::::::::::::::::::::::::::: {SHOW IO} :::::::::::::::::::::::::::::::::::::::::::
# GAME VERSION: 0.00.001
- FILE VERSION: 1.00.000
- INFO:
    ...info
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

/**
 * @param {Array}  dimensions   | game dimensions (width, height)
 * @param {Number} genre        | game genre/type: 1 - FPS
 * @param {Object} settings     | additional settings and configurations
 * 
 * @returns {Object}        | ShowIO's API
 */
export default function ShowIO(
    dimensions = [800, 600],
    genre = 1,
    settings = {}
){

    // =================================== MAIN CONFIGURATIONS ====================================
    let activeShow = {}
    this.activeShow = activeShow;

    let allShows = []
    this.allShows = allShows;

    let showManager = function() {};
    this.showManager = showManager;

    // ======================================= MAIN METHODS =======================================
    /**
     * Create New Show
     *  ganerate a new game show
     */
    function createNewShow() {
        return allShows.push({});
    }
    
    // ========================================== RETURN ==========================================
    return {
        createNewGame: createNewGame,
    }
}
/* ShowIO Ends */
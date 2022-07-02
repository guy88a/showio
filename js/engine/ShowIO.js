/* :::::::::::::::::::::::::::::::::::::::::: {SHOW IO} :::::::::::::::::::::::::::::::::::::::::::
# GAME VERSION: 0.00.004
- FILE VERSION: 1.01.002
- INFO:
    Game (Show) constructor.
    Creates a new game instance with user's properties.
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

import scenesManager from './components/scenesManager/index.js';

class ShowIO {
    /**
     * SHOWIO - MAIN GAME OBJECT
     * @param {String} _genre ............. GAME TYPE
     * @param {Array} _dimensions ......... VIEW DIMENSIONS
     * @param {Number} _mobile ............ IS MOBILE?
     * @param {Object} _configurations .... GAME CONFIGURATIONS
     * @param {Object} _controls .......... GAME CTONTROLS
     * @param {Array} _scenes ............. GAME SCENES
     * @param {Array} _assets ............. GAME ASSETS
     */
    constructor(
        _genre          = 'FPS',
        _dimensions     = [1920, 1080],
        _mobile         = 0,
        _configurations = function(){},
        _controls       = function(){},
        _scenes         = [],
        _assets         = [],
        ) {
        // ======================================= SETTINGS =======================================
        // # GANRE: Game type. determines base physicss, rules, controls, etc...
        this.#genre          = '';
        // # DIMENSIONS: Base game width and height.
        this.#dimensions     = _dimensions;
        // # MOBILE: 0 - False, 1 - Supported, 2 - Mobile only.
        this.#mobile         = _mobile;
        // # FRAME: Scene name, Frame ID.
        this.#frame          = ['', 0];
        // # CONFIGURATIONS: Game configurations - events, physics, rules, base controls, audio, graphics, etc...
        this.#configurations = _configurations;
        // # CONTROLS: User's game controls.
        this.#controls       = _controls;
        // # SCENES: Game scenes. handled via 'scenesManager'.
        this.#scenes         = _scenes;
        // # ASSETS: Game assets.
        this.#assets         = _assets;

        // ======================================= MANAGERS =======================================
        // # SCENES MANAGER: Handle and maintain all game's scenes and renderers.
        this.#scenesManager      = function(){};
        // # INTERACTIVE MANAGER: Handle user interaction events.
        this.#interactiveManager = function(){};
        // # EVENTS_MANAGER: Handle general game events.
        this.#eventsManager      = function(){};
    }
    
    /**
     * :::: Private Properties Setup :::::::::::::::::
     */
    #genre;
    #dimensions;
    #mobile;
    #frame;
    #configurations;
    #controls;
    #scenes;
    #assets;
    #scenesManager;
    #interactiveManager;
    #eventsManager;

    /**
     * :::: Show Directions ::::::::::::::::::::::::::
     */
    setup() {
        this.#scenesManager = new scenesManager(this.#scenes);
    }
    run(sceneName = 'defalur', sceneID = 0) {
        this.#scenesManager.runNextScene();
    }
    cut() {

    }
    end() {

    }
}

export default ShowIO;
/* ShowIO Ends */
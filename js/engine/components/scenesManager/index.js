/* :::::::::::::::::::::::::::::::::::::: {SCENES MANAGER} ::::::::::::::::::::::::::::::::::::::::
# GAME VERSION: 0.00.004
- FILE VERSION: 1.00.000
- INFO:
    ...info
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

import scenesGenerator from './@scenesGenerator.js';
import projector from '../../tools/projector/projector.js';

/**
 * SCENES MANAGER - SCENES RENDERING
 * @param {Array} _scenes ................. USER'S SCEMES DATA
 * @param {Object} _game .................. GAME REFERENCE
 * @returns 
 */
export default function scenesManager(
    _scenes = [],
    _game = function(){},
) {
    
    // # SCENES: Game scenes. generated via '@scenesGenerator';
    this.scenes = scenesGenerator(_scenes);

    var proj = new projector('2d', 'showio-screen', 'showio-off-screen');
    proj.on();
    proj.project();
    
    return {
        createNewScene: function(){},
        runCurrentScene: function(){
            L.success("current scene is running");
        },
        runSceneByName: function(sceneName){
            L.success("scene by name is running");
        },
        runNextScene: function(){
            L.success("next scene is running");
        },
        cutScene: function(){},
    }
}
/* ::::::::::::::::::::::::::::::::::::::::: {PROJECTOR} ::::::::::::::::::::::::::::::::::::::::::
# GAME VERSION: 0.00.004
- FILE VERSION: 1.00.000
- INFO:
    ...info
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

import { isDOMElement, isEmptyObject } from '../../utils/typecheck.js';

/**
 * SCENES MANAGER - SCENES RENDERING
 * @param {Array} _type ................... CONTEXT TYPE
 * @param {String} _screenID .............. CANVAS ID
 * @param {String} _offscreenID ........... OFF-CANVAS ID
 * @returns {Object}
 */
 export default function projector(
    _type = '2d',
    _screenID = 'screen',
    _offscreenID = 'offscreen',
) {

    this.type = _type;
    this.screen = document.getElementById(_screenID);
    this.offscreen = document.getElementById(_offscreenID);
    this.ctx = this.screen?.getContext(this.type) || {};
    this.octx = this.offscreen?.getContext(this.type) || {};

    var draw = function(){};
    var offdraw = function(){};

    function powerOn() {
        if(isEmptyObject(this.ctx)) {
            if(!isDOMElement(this.screen)) {
                L.error('no canvas elemnent');
            }
        }
        draw = this.ctx.drawImage;
        offdraw = this.octx.drawImage;
        L.success('projector turned on');
    }

    function powerOff() {

    }

    /**
     * Game loop
     * @param {Timestamp} timestamp 
     */
    function slide(timestamp) {

    }

    /**
     * State update
     * @param {Number} delta 
     */
    function setFrame(delta) {

    }

    /**
     * Game draw
     */
    function project() {
        function drawDemo(_ctx) {
            _ctx.beginPath();
            _ctx.lineWidth = 6;
            _ctx.strokeStyle = '#de332f';
            _ctx.rect(150, 50, 290, 140);
            _ctx.stroke();
        }
        drawDemo(this.ctx);
    }

    function preProject() {

    }

    return {
        on: powerOn.bind(this),
        project: project.bind(this),
    };
}
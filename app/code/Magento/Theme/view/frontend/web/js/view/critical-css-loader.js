/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
define([
    'rjsResolver'
], function (resolver) {
    'use strict';

    /**
     * Removes provided loader element from DOM.
     *
     * @param {HTMLElement} $loader - Loader DOM element.
     */
    function hideLoader($loader) {
        document.addEventListener('criticalCssLoaded', function (e) {
            $loader.parentNode.removeChild($loader);
        }, false);
    }

    /**
     * Initializes assets loading process listener.
     *
     * @param {Object} config - Optional configuration
     * @param {HTMLElement} $loader - Loader DOM element.
     */
    function init(config, $loader) {
        resolver(hideLoader.bind(null, $loader));
    }

    return init;
});

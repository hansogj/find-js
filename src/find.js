"use strict";
exports.__esModule = true;
exports["default"] = (function (selector, root) {
    if (root === void 0) { root = window.document; }
    return Array.from(root.querySelectorAll(selector));
});

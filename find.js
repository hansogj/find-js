require("array-from");

const find = function(selector, root ) {
    return Array.from((root||window.document).querySelectorAll(selector))
  }
module.exports = find;

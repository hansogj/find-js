require("array-from");

const find = (selector, root) => Array.from((root || window.document).querySelectorAll(selector))
module.exports = find;

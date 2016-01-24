require("array-from");

module.exports = function(root, selector) {
  return Array.from(root.querySelectorAll(selector))
}

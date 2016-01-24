require("array-from");


module.exports.find = function(root, selector) {
  return Array.from(root.querySelectorAll(selector))
}

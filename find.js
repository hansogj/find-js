require("array-from");


module.export.find = function(root, selector) {
  return Array.from(root.querySelectorAll(selector))
}

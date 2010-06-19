
Object.defineProperty(Object.prototype, "extend", {value: function (props) {
  var defs = {}, key;
  for (key in props) {
    if (props.hasOwnProperty(key)) {
      defs[key] = {value: props[key], enumerable: true, writable: true};
    }
  }
  return Object.create(this, defs);
}});
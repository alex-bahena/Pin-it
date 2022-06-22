var phPool = [];
var phElem = document.createElement('div');



var grid = new Muuri(".grid", {
    dragEnabled: true,
    createElement(item) {
        return phPool.pop() || phElem.cloneNode();
      },
      onCreate(item, element) {
        // If you want to do something after the
        // placeholder is fully created, here's
        // the place to do it.
      },
      onRemove(item, element) {
        phPool.push(element);
      },

  });
  
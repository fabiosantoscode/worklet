'use strict'

var header = 'var paintfn = function() {}; paintfn.prototype.paint ='
var footer = id => '\nregisterPaint(' + JSON.stringify(id) + ', paintfn)'

var counter = 0

exports.registerPaint = function(targetElement, paintCb) {
  var id = 'worklet' + (++counter)
  var source = 'data:text/javascript,' + escape(header) + escape(paintCb) + escape(footer(id))

  CSS.paintWorklet.addModule(source)

  targetElement.style.backgroundImage = 'paint(' + id + ')'
}

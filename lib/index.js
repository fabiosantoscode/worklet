'use strict'
/* global CSS:false */

var header = 'var paintfn = function() {}; paintfn.prototype.paint = '
var footer = function (id) {
  return '\nregisterPaint(' + JSON.stringify(id) + ', paintfn)'
}

var counter = 0

exports.registerPaint = function (targetElement, paintCb) {
  var id = 'worklet' + (++counter)
  var source = 'data:text/javascript,' + escape(header + paintCb + footer(id))

  if (typeof CSS !== 'undefined' && CSS.paintWorklet) { CSS.paintWorklet.addModule(source) }

  targetElement.style.backgroundImage = 'paint(' + id + ')'
}

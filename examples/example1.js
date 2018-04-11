
var worklet = require('..')
var element = document.createElement('div')

element.style.width = '300px'
element.style.height = '300px'

document.body.appendChild(element)

worklet.registerPaint(element, function (ctx, dimensions, styleMap) {
  console.log(dimensions)
  this.ent = this.ent || [
    [Math.random(), Math.random()],
    [Math.random(), Math.random()],
    [Math.random(), Math.random()],
    [Math.random(), Math.random()],
    [Math.random(), Math.random()],
    [Math.random(), Math.random()],
    [Math.random(), Math.random()],
    [Math.random(), Math.random()],
    [Math.random(), Math.random()],
    [Math.random(), Math.random()],
    [Math.random(), Math.random()],
    [Math.random(), Math.random()],
    [Math.random(), Math.random()],
    [Math.random(), Math.random()],
  ]
  var width = dimensions.width
  var height = dimensions.height
  this.ent.forEach(function (pos) {
    var x = pos[0]
    var y = pos[1]
    ctx.fillRect(x * width, y * height, x + 10, y + 10)
  })
})





## Example

```
const worklet = require('worklet')
const element = document.getElementById('target')

worklet.registerPaint(element, (ctx, dimensions) => {
    ctx.drawRect(0, 0, 10, 10)
})
```

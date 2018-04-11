
# Worklet

Use the CSS "houdini" API today with this easy wrapper!

## Example

```javascript
const worklet = require('worklet')
const element = document.getElementById('target')

worklet.registerPaint(element, (ctx, dimensions) => {
    ctx.fillRect(0, 0, 10, 10)
})
```

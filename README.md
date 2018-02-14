### About:

It gets sum height of elements. 

### Example:
```html
<div class="elem" style="height: 100px"></div>
<div class="elem" style="height: 200px"></div>
<div class="elem" style="height: 50px"></div>
<div class="elem" style="height: 150px"></div>
```

```javascript
import {
  nodeListToArrayElement,
  getClientHeightSumElements,
  getOffsetHeightSumElements,
  getScrollHeightSumElements
} from 'height-sum-elements'

const nodeList = document.getElementsByClassName('elem')
const elements = nodeListToArrayElement(nodeList)
getClientHeightSumElements(elements) //600
getOffsetHeightSumElements(elements) //600
getScrollHeightSumElements(elements) //600
```

import { isNode } from '../utils/index.js';

export default !isNode
    ? require('./browser/index.js').default
    : function () {
          throw new Error("[rempl] createSundbox() doesn't supported on node.js");
      };

/* global numeral */

import { helper } from '@ember/component/helper';

export function numeralFormat(params) {
  let [value, format] = params;
  return numeral (value).format (format);
}

export default helper(numeralFormat);

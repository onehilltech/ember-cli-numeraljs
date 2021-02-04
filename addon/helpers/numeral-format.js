import { helper } from '@ember/component/helper';

import numeral from 'numeral';

export function numeralFormat(params) {
  let [value, format] = params;
  return numeral (value).format (format);
}

export default helper(numeralFormat);

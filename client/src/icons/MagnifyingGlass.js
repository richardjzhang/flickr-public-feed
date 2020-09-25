// @flow strict
import * as React from 'react';

import magnifyingGlass from './assets/magnifying_glass.svg';

export default function MagnifyingGlass({ size = 20 }: { size: number }) {
  return (
    <img
      src={magnifyingGlass}
      height={size}
      width={size}
      alt="Magnifying glass"
    />
  );
}

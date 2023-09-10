import { useState } from 'react';

function useIncrement(defVal = null) {
  const [state, setState] = useState(defVal);
  return [state, setState];
}

export default useIncrement;

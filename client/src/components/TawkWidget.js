import React, { useEffect } from 'react';
import { initializeTawk, associateTawkVisitor } from '../services/tawkService';

function TawkWidget() {
  useEffect(() => {
    initializeTawk();
  }, []);

  return null;
}

export default TawkWidget;

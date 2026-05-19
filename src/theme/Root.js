import React from 'react';
import { AudienceProvider } from '@site/src/context/AudienceContext';

export default function Root({ children }) {
  return <AudienceProvider>{children}</AudienceProvider>;
}

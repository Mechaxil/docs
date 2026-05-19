import React from 'react';
import Link from '@theme-original/DocSidebarItem/Link';
import { useAudience } from '@site/src/context/AudienceContext';

function getItemAudiences(item) {
  const audiences = item?.customProps?.audiences;
  if (!audiences) {
    return null;
  }
  return Array.isArray(audiences) ? audiences : [audiences];
}

export default function DocSidebarItemLink(props) {
  const { audience } = useAudience();
  const itemAudiences = getItemAudiences(props.item);

  if (itemAudiences && !itemAudiences.includes(audience)) {
    return null;
  }

  return <Link {...props} />;
}

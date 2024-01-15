import React from 'react';

export interface ActiveLabelProps {
  children: React.ReactNode;
}

export default function StatusLabel({ children }: ActiveLabelProps) {
  return <span>{children}</span>;
}

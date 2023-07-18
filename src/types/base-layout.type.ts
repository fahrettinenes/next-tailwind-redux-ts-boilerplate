import React from 'react';

export interface BaseLayout {
  children?: React.ReactNode;
}

export interface BaseProps {
  children?: React.ReactNode;
  [key: string]: any;
}
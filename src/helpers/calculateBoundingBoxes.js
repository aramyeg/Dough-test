import React from 'react';

const calculateBoundingBoxes = children => {
  const boundingBoxes = {};

  React.Children.forEach(children, child => {
    const domNode = child.ref.current;
    boundingBoxes[child.key] = domNode?.getBoundingClientRect();
  });

  return boundingBoxes;
};

export default calculateBoundingBoxes;
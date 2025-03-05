function opacity(alpha?: number = 1): Object {
  return `
    opacity: ${alpha};
    -moz-opacity: ${alpha};
    -khtml-opacity: ${alpha};
    filter: alpha(opacity =${alpha} * 100);
  `
}

export default opacity;
function translate(x?: number = '100', y?: number = '100'): Object {
  return `
    -ms-transform: translate(${x}, ${y});
    -webkit-transform: translate(${x}, ${y});
    transform: translate(${x}, ${y});
  `
}

export default translate;

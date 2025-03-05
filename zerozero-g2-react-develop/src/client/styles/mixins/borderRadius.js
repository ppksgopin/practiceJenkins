function borderRadius(size?: string = '100%'): Object {
  return `
    border-radius: ${size};
    -moz-border-radius: ${size};
    -webkit-border-radius: ${size};
  `
}

export default borderRadius

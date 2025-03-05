
function textShadow(args: string = "none"): Object {
  return `
    -webkit-text-shadow: ${args};
    -moz-text-shadow: ${args};
    text-shadow: ${args};
  `
}

export default textShadow;
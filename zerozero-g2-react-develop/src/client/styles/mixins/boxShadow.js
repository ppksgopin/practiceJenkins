
function boxShadow(args: string = "none"): Object {
  return `
    -webkit-box-shadow: ${args};
    -moz-box-shadow: ${args};
    box-shadow: ${args};
  `
}

export default boxShadow;

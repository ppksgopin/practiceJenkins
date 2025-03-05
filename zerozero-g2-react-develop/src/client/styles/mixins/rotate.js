function rotate(degree: number = 0): Object {
  return `
    -ms-transform: rotate(${degree});
    -webkit-transform: rotate(${degree});
    transform: rotate(${degree});
  `
}

export default rotate;

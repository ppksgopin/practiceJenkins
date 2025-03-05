function transition(type?: string = 'all', speed?: string = '.5s'): Object {
  return `
    -webkit-transition: ${type} ${speed};
    transition: ${type} ${speed};
    -webkit-transition-timing-function: 'ease';
    transition-timing-function: 'ease';
  `
}

export default transition;

import React, {Component} from 'react';

export default class CoverImage extends Component {
  constructor(props) {
    super(props);
    this.imageResize = this.imageResize.bind(this);
  }

  imageResize(e) {
    let tar = this.refs.targetImg;
    if (!tar) {
      return;
    }
    let pw = tar && tar.parentElement.offsetWidth;
    let ph = tar && tar.parentElement.offsetHeight;
    let tw = tar && tar.offsetWidth;
    let th = tar && tar.offsetHeight;
    let ratio = pw / ph;
    if (tw / th > ratio) {
      tar.style.height = ph + "px";
      tar.style.width = ph * (tw / th) + "px";
      let mar_w = (pw - ph * (tw / th)) / 2;
      tar.style.margin = "0 0 0 " + mar_w + "px";
    } else {
      tar.style.width = pw + "px";
      tar.style.height = pw * (th / tw) + "px";
      let mar_h = (ph - pw * (th / tw)) / 2;
      tar.style.margin = mar_h + "px 0 0 0";
    }
  }
  componentDidMount() {
    if (this.refs.targetImg) {
      window.addEventListener("resize", this.imageResize);
    }
  }

  render() {
    const {src, className} = this.props;
    //console.log("src :" , src) ;
    return (<img ref="targetImg" src={src} className={className} onLoad={(e) => this.imageResize(e)}/>)
  }
}

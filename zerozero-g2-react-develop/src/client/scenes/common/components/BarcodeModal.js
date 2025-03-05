import React, {Component} from 'react';
import Barcode from 'react-barcode';
import styled,{css} from 'styled-components';
import theme from '../../../styles/theme';

const Container = styled.div `
  background:#fff;
  position:fixed;
  z-index:9999999;
  top:0;
  left:0;
  width:100vw;
  height:100vh;
  overflow:hidden;

  .modal-close{
    position:absolute;
    z-index:2;
    width:50px;
    height:50px;
    top:10px;
    right:10px;
    text-align:center;
    &::before{
      content:"\f00d";
      font-family:"fontawesome";
      line-height:50px;
      font-size:30px;
      color:${theme.colors.gray};
    }
  }
  .barcodes{
    animation-name:rotateIn;
    animation-duration:.5s;
    animation-fill-mode:both;
    position:absolute;
    z-index:1;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%) rotate(0deg) ;

    svg{
      max-width:100vw;
    }
  }

  @keyframes rotateIn{
      from{
          transform: translate(-50%, -50%) rotate(0deg) ;
      }
      to{
          transform: translate(-50%, -50%) rotate(90deg) ;
      }
  }
  
`
export default class BarcodeModal extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  toggleBarcodeModal() {
      this.setState({barcodeModalisOpen: !this.state.barcodeModalisOpen});
  }

  render() {
    const { onRequestClose,bc1, bc2,bc3 } = this.props;
    return (
      <Container>
        <div className="modal-close" onClick={onRequestClose} />
        <div className="barcodes">
          {
                bc1 &&
                    <div>
                        <Barcode
                            value={bc1}
                            displayValue={true}
                            height={45}
                        />
                    </div>
            }
            {
                bc2 &&
                    <div>
                        <Barcode
                            value={bc2}
                            displayValue={false}
                            height={45}
                        />
                    </div>
            }
            {
                bc3 &&
                    <div>
                        <Barcode
                            value={bc3}
                            displayValue={false}
                            height={45}
                        />
                    </div>
            }
        </div>
      </Container>
    )
  }
}

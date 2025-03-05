import React, { PropTypes, Component } from 'react';
//import './index.css';

export default class Loading extends Component {
    constructor(props){
        super(props);
    }

    renderChildrenComponent(children) {
        return children ? children : null;
    }

    render() {
        const DefaultSpinner = () => <div className="kart-loader">
										<div className="sheath">
											<div className="segment"></div>
										</div>
										<div className="sheath">
											<div className="segment"></div>
										</div>
										<div className="sheath">
											<div className="segment"></div>
										</div>
										<div className="sheath">
											<div className="segment"></div>
										</div>
										<div className="sheath">
											<div className="segment"></div>
										</div>
										<div className="sheath">
											<div className="segment"></div>
										</div>
										<div className="sheath">
											<div className="segment"></div>
										</div>
										<div className="sheath">
											<div className="segment"></div>
										</div>
										<div className="sheath">
											<div className="segment"></div>
										</div>
										<div className="sheath">
											<div className="segment"></div>
										</div>
										<div className="sheath">
											<div className="segment"></div>
										</div>
										<div className="sheath">
											<div className="segment"></div>
										</div>
									</div> ;
        const {
            isLoading,
            loadingClassName,
            children,
            message
        } = this.props;

        return isLoading ?
            <div className={loadingClassName}>
				{DefaultSpinner()}
                <div className="spinnerMessage"><h2>{message}</h2></div>
            </div>
         : this.renderChildrenComponent(children);
    }
}

Loading.defaultProps = {
    isLoading: false,
    loadingClassName: 'loading'
};

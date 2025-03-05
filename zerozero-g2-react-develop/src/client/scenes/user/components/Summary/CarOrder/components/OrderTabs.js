import React, {Component} from 'react';

class OrderTabs extends Component {
    onTabClick() {
        const {onTabChange, orderType} = this.props;

        if (onTabChange) {
            onTabChange(orderType);
        }
    }

    render() {
        const {className, name} = this.props;
        return (
            <a onClick={this.onTabClick.bind(this)} className={className} href="#">{name}</a>
        )
    }
}

export default OrderTabs;

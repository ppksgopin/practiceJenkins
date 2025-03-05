import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { ExchangeItemIntroRoute } from '../../../../commons/routePaths';

import CoverImage from '../../../common/components/CoverImage';

export default class ItemSimple extends Component {

    render() {

        const {
            itemId,
            coverImageClassName='thumb',
            imageURL='https://unsplash.it/400/400/?random&v=1',
            infoClassName='info',
            name='Häagen-Dazs 感恩節外賣雪糕火鍋限定優惠',
            subtitle='簡短只有一行的商品副標',
            coins=800,
            priceClassName='price'
        } = this.props;

        return (
            <li>
                <Link to={ExchangeItemIntroRoute(itemId)}>
                    <div className={coverImageClassName}>
                        <div>
                            <CoverImage src={imageURL}/>
                        </div>
                    </div>
                    <div className={infoClassName}>
                        <h3>{name}</h3>
                        <p>{subtitle}</p>
                        <div className={priceClassName}>{coins}</div>
                    </div>
                </Link>
            </li>
        )
    }
}
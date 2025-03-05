import React from "react";
import {toDate} from "../../../../utils/dateTimeConverter";
import shortid from 'shortid'

const Record = (prop) => {
    return (
        <li key={shortid.generate()}>
            { prop.recordType === 'd'
                ? <div className="type">扣點－</div>
                : <div className="type">積點＋</div>
            }
            <div className="date">{toDate(prop.date)}</div>
            <div className="name">{prop.eventName}</div>
            <div className="balance">{prop.zcoins}</div>
        </li>
    );
}

export default Record;
import React from 'react';
import { Field } from "redux-form/immutable";
import LabelTextInput from "../../common/components/LabelTextInput2";

export default class CompanyInfo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { fetchCompanyProfile, companyName } = this.props;
        // console.log('companyName:', companyName);
        return (
            <div>
                <Field
                    name="unifiedCode"
                    label="* 統一編號"
                    component={LabelTextInput}
                    onChange={e => {
                        fetchCompanyProfile(e.target.value);
                    }}
                />
                <Field
                    name="companyName"
                    label="公司名稱"
                    component={LabelTextInput}
                />
                <div className="multi_col">
                    <Field
                        name="officePhone"
                        label="公司電話"
                        component={LabelTextInput}
                    />
                    <Field
                        name="officePhoneExt"
                        label="分機"
                        component={LabelTextInput}
                    />
                </div>
            </div>
        )

    }
}

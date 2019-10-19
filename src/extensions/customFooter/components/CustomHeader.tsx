import * as React from 'react';
import { CommandButton } from 'office-ui-fabric-react/lib/Button';
import './CustomHeader.css';

export default class CustomHeader extends React.Component<{}, {}> {
    public render(): React.ReactElement<{}> {
        return (
                    <div className="col-md-12 HeaderContainer" style={{backgroundColor:'#000000',width:'100%',minHeight:'30px'}}>
                        <div className="col-md-2">
                           <button className="CustomButton"><a href="/SitePages/dashboard.aspx">Supplier Dashboard</a></button>
                        </div>
                        <div className="col-md-2">
                            <button className="CustomButton"><a href="/SitePages/Google-Charts-Page.aspx">Contract Dashboard</a></button>
                        </div>
                        <div className="col-md-2">
                            <button className="CustomButton"><a href="/SitePages/feeds.aspx">Feeds</a></button>
                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
        );
    }
}
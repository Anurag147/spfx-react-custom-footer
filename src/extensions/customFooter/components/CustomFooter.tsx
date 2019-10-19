import * as React from 'react';
import { CommandButton } from 'office-ui-fabric-react/lib/Button';
export default class CustomFooter extends React.Component<{}, {}> {
    public render(): React.ReactElement<{}> {
        return (
                    <div className="col-md-12" style={{backgroundColor:'#000000',width:'100%',height:'50px'}}>
                        <div className="col-md-4">
                            <CommandButton 
                                data-automation="CopyRight"
                                href={`#`} style={{color:'white'}}>&copy; 2019, Asthana Inc. London, United Kingdom</CommandButton>
                        </div>
                        <div className="col-md-2">
                        <CommandButton 
                                data-automation="CRM"
                                iconProps={ { iconName: 'People' } }
                                href={`#`} style={{color:'white'}}>Search User</CommandButton>
                        </div>
                        <div className="col-md-2">
                        <CommandButton 
                                data-automation="SearchCenter"
                                iconProps={ { iconName: 'Search' } }
                                href={`#`} style={{color:'white'}}>Search Center</CommandButton>
                        </div>
                        <div className="col-md-2">
                            <CommandButton 
                                data-automation="Privacy"
                                iconProps={ { iconName: 'Lock' } }
                                href={`#`} style={{color:'white'}}>Privacy Policy</CommandButton>
                        </div>
                        <div className="col-md-2">
                        </div>
                    </div>
        );
    }
}
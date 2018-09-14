import React from 'react';
import {connect} from 'react-redux';
import mapStateToProps from '../../stateMapper';

const Peers = ({companyInfo:{peers}})=> {
    
    
        const peersData = peers.join(", ");
        
        return (
            <span>{peersData}</span>
        );
    
}




export default connect(mapStateToProps)(Peers);

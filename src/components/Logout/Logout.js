import React from 'react';
import { connect } from 'react-redux';
import { onSignOut } from '../../store/actions/auth';
import Button from '../ui/Button/Button';

const Logout = ({ onSignOut }) => (
    <Button value='Logout' click={onSignOut}/>
);

export default connect(null, { onSignOut })(Logout);
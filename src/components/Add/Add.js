import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import AddButton from './AddButton/AddButton';
import Modal from '../Modal/Modal';
import NewItemForm from '../NewItemForm/NewItemForm';

const Add = () => {
    const [open, setOpen] = useState(false);
    
    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <>
            <AddButton icon='plus' 
                       click={handleClick} 
                       isOpen={open} />
            <CSSTransition in={open}
                           timeout={100}
                           classNames='appear'
                           appear
                           unmountOnExit>
                <Modal close={handleClick} isOpen={open}>
                    <NewItemForm />
                </Modal>
            </CSSTransition>
        </>
    );
};

export default Add;
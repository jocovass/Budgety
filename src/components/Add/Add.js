import React, { useState } from 'react';
import AddButton from './AddButton/AddButton';
import Modal from '../Modal/Modal';
import AddNewItemForm from '../AddNewItemForm/AddNewItemForm';

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
            { open ?
                (<Modal click={handleClick}>
                    <AddNewItemForm />
                </Modal>)
                : null }
        </>
    );
};

export default Add;

// {({ open, handleClick}) => (
//     <>
//         <AddButton icon="plus" 
//         click={handleClick} 
//         isOpen={open} />
//         {open ? <LoginForm value="AddNewItem"/> : null}
//     </>
// )}
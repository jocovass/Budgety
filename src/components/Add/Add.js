import React, { useState } from 'react';
import AddButton from './AddButton/AddButton';

const Add = () => {
    const [open, setOpen] = useState(false);
    
    const handleClick = () => {
        setOpen(!open);
    }
    
    return (
            <AddButton icon="plus" 
                       click={handleClick} 
                       isOpen={open} />
    );
};

export default Add;
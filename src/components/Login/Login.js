import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Button from '../ui/Button/Button';
import Modal from '../Modal/Modal';
import Forms from '../Forms/Forms';

const Login = () => {
   const [open, setOpen] = useState(false);

   const handleClick = () => {
      setOpen(!open);
   }

   return (
      <>
         <Button value="Login"
                 click={handleClick} />
         <CSSTransition timeout={100}
                            classNames="appear"
                            in={open}
                            appear 
                            unmountOnExit >
                <Modal close={handleClick} isOpen={open}>
                     <Forms />
                </Modal>
        </CSSTransition>
      </>
   );  
};

export default Login;
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Button from '../ui/Button/Button';
import Modal from '../Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';

const Login = () => {
   const [open, setOpen] = useState(false);

   const handleClick = () => {
      setOpen(!open);
   }

   return (
      <>
         <Button value="Log in"
                 click={handleClick} />
         <CSSTransition timeout={100}
                            classNames="appear"
                            in={open}
                            appear 
                            unmountOnExit >
                <Modal click={handleClick} isOpen={open}>
                        <LoginForm />
                </Modal>
        </CSSTransition>
      </>
   );  
};

export default Login;
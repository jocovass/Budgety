import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import asyncComp from '../../containers/hoc/asyncComp/asyncComp';
import Button from '../ui/Button/Button';
import Modal from '../Modal/Modal';
const Forms = asyncComp(() => {
   return import(/* webpackPrefetch: true */'../Forms/Forms');
})

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
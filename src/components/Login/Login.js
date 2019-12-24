import React, { useState } from 'react';
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
         { open ?
                (<Modal click={handleClick}>
                    <LoginForm />
                </Modal>)
                : null }
      </>
   );  
};

export default Login;
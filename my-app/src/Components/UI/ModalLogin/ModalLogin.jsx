import React, { useState } from 'react';
import { useAuth } from '../../../hook/useAuth';
import cl from '../ModalLogin/ModalLogin.module.css';

function ModalLogin() {
   const [visibleLogin, setVisibleLogin] = useState(false);
   const classes = [cl.modalLogin];
   const { number } = useAuth();
   if (visibleLogin === false && number === -1) {
      classes.push(cl.active)
   }

   return (
      <div className={classes.join(' ')}>
         <div className={cl.modalLogin__content}>
            <h2>Доступ вам ограничен!!!</h2>
         </div>
      </div>
   )
}

export default ModalLogin;
import React from 'react'
import cl from './Modal.module.css'

function Modal({ children, visible, setVisible }) {
   const classes = [cl.modal]
   if (visible) {
      classes.push(cl.active)
   }

   return (
      <div className={classes.join(' ')} onClick={() => setVisible(false)}>
         <div className={cl.modal__content} onClick={(e) => e.stopPropagation()}>
            {children}
         </div>
      </div>
   )
}

export default Modal;
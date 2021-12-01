import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReactToastify = () => {

    const CustomeToast = ({closeToast}) => {
        return(<>
            <div style={{backgroundColor:'yellow', color:'blue'}}>
                Nidhi
            </div>
            <buttom style={{backgroundColor:'Red', color:'blue'}} onClick={closeToast}>Close</buttom>
        </>)
    }

    const notify = () => {
        //deafault:TOP_LEFT, autoClose: 5000/5sec
        //toast("Wow so easy!"); 
        toast("Wow so easy!", {position: toast.POSITION.TOP_LEFT, autoClose: 8000});
        toast.success("success", {position: toast.POSITION.TOP_CENTER, autoClose: 7000});
        toast.info("info", {position: toast.POSITION.TOP_RIGHT, autoClose: 5000});
        toast.warning("warning", {position: toast.POSITION.BOTTOM_LEFT, autoClose: 4000});
        toast.error("error", {position: toast.POSITION.BOTTOM_CENTER, autoClose: 3000});
        toast(<CustomeToast/>, {position: toast.POSITION.BOTTOM_RIGHT, autoClose: false});
    }
    
    return (
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    );
  }

export default ReactToastify

// import { useState, useEffect } from "react";
import { useState } from "react";
// import toast, { Toaster } from 'react-hot-toast';
// import { putProduct } from "../service/putProducts";

const FormEdit = ({ fetchUrl }) => {

  // @fix: min date today in initialState
  // @fix: required fields

  const [productState, setProduct] = useState(null)

  // placeholder
  // id
  // fields from single product

  return (
    <form  method="post" className="form__container" onSubmit={(e) => handleSubmit(e)}>
      {/* <div><Toaster/></div> */}

      <h2>form</h2>

      <span>aca iria el form....</span> 

    </form>
  );
};

export default FormEdit;

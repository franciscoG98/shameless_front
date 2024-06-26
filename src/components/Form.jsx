import { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { postProducts } from "../service/postProduct";

const Form = ({ fields, fetchUrl }) => {

  const initialState = fields.reduce((acc, curr) => {
    acc[curr.id] = '';
    return acc;
  }, {});

  // @fix: min date today in initialState
  // @fix: required fields

  const [productState, setProductState] = useState(initialState)

  useEffect(() => {}, [productState]);

  const handleSubmit = (e) => {
    e.preventDefault();

    postProducts(fetchUrl, productState)
    .then(res => {
      if(res.ok) {
        setProductState(initialState)
        toast.success('Formulario enviado exitosamente!')
      } else {
        console.log('Hay un error')
        toast.error("Oh no! ocurrió un error :(")
      }
    })
    .catch((err) => {
      console.log('Error: ', err)
      toast.error("Oh no! ocurrió un error :(")
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductState({ ...productState, [name]: value });
  };

  return (
    <form  method="post" className="form__container" onSubmit={(e) => handleSubmit(e)}>
      <div><Toaster/></div>

      {fields.map((field, idx) => (
        <fieldset className="form__fieldset" key={idx}>
          <label htmlFor={field.id}>{field.label}</label>

          {(() => {
            switch (field.inputType) {
              case "textarea":
                return (
                  <textarea
                    className="form__input"
                    type={field.inputType}
                    name={field.id}
                    id={field.id}
                    rows={field.rows}
                    onChange={(e) => handleChange(e)}
                    required={true}
                    value={productState[field.id]}
                  ></textarea>
                );
              case "number":
                return (
                  <input
                    className="form__input"
                    type={field.inputType}
                    name={field.id}
                    id={field.id}
                    onChange={(e) => handleChange(e)}
                    required={true}
                    value={productState[field.id]}
                    min={field.numbMin}
                    max={field.numbMax}
                  />
                );
              case "select":
                return (
                  <select
                    className="form__input"
                    name={field.id}
                    id={field.id}
                    onChange={(e) => handleChange(e)}
                    required={true}
                    value={productState[field.id]}
                  >
                    <option value="" default>Elija una posición</option>
                    {
                      field.options.map((i, idx) => (
                        <option key={idx} value={i.value}>{i.label}</option>
                      ))
                    }
                  </select>
                );
              default:
                return (
                  <input
                    className="form__input"
                    type={field.inputType}
                    name={field.id}
                    id={field.id}
                    onChange={(e) => handleChange(e)}
                    required={true}
                    value={productState[field.id]}
                  />
                );
            }
          })()}

        </fieldset>
      ))}

      <button
        className="form__btn"
        type="submit"
      >
        Crear
      </button>
    </form>
  );
};

export default Form;

import { useState, useEffect } from "react";

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
    // @fix: delete this when finish debugging
    console.log('form data:\n' , productState);

    fetch(fetchUrl, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: productState
    })
    .then( async res => {
      if(res.ok) {
        setProductState(initialState)
        alert('form ok')
      } else {
        console.log('Hay un error')
      }
    })
    .catch((err) => {
      console.log('Error: ', err)
    })

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductState({ ...productState, [name]: value });
  };

  console.log();

  return (
    <form  method="post" className="form__container" onSubmit={(e) => handleSubmit(e)}>
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
        Buscar
      </button>
    </form>
  );
};

export default Form;

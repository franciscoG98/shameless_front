import { useEffect } from "react";

const Form = ({ state, handleChange, handleSubmit, fields, action }) => {

  // should change initialState name when updating or sending
  useEffect(() => {}, [state]);

  // input le falta el value

  return (
    <form action={action} method="post" className="form__container">
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
                  />
                );
            }
          })()}

        </fieldset>
      ))}

      <button
        className="form__btn"
        type="submit"
        onSubmit={(e) => handleSubmit(e)}
      >
        Buscar
      </button>
    </form>
  );
};

export default Form;

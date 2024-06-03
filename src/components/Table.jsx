import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Table = ({ table_headers, data }) => {

  return (
    <div className="table__container">
      <table className="table">
        <thead>
          <tr>
            {/* {
              Object.entries(data[0]).map(([key, value], idx) => {
                if (key !== 'status' && key !== 'productCode') {
                  return <th key={idx}>{key}</th>;
                }
                return null;
              })
            } */}
            {
              table_headers.map((i,idx) => (
                <th key={idx}>{i}</th>
              ))
            }
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(prod => (
              <tr className="tbody__row" key={prod.productCode}>
                {
                  Object.entries(prod).map(([key, value], idx) => {
                    if (key !== 'status' && key !== 'productCode') {
                      return <td key={idx}>{value}</td>;
                    }
                    return null;
                  })
                }
                <td>
                  <Link to={`/admin/car-rental/edit/${prod.productCode}`}>
                    <FaEdit size={24} color={'green'} />
                  </Link>
                </td>
                <td>
                  <MdDeleteForever size={24} color={'red'} />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table
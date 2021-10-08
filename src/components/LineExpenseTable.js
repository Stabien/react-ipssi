import edit from '../assets/edit.png';
import supp from '../assets/delete.png'

function LineExpenseTable(props) {

    return (
        <tr id="expenseLine" className="lineStyle">
            <th scope="row">{props.id}</th>
            <td>{props.origin}</td>
            <td>{props.category}</td>
            <td>{props.type}</td>
            <td>{props.date}</td>
            <td style={{color: props.sum > 0 ? "green" : "red"}}>{props.sum} €</td>
            <td>{props.comm}</td>
            <td>
                <button className="btn-edit"><img src={edit} alt="edit" className="img-edit" onClick={props.toggle}/></button>
                <button className="btn-supp"><img src={supp} alt="supp" className="img-supp"/></button>
            </td>
        </tr>)
}


export default LineExpenseTable;
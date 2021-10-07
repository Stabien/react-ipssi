import React, {useState} from "react";
import '../styles/ExpenseTable.css';
import LineExpenseTable from "./LineExpenseTable";

const data = [
    {
        id: "001",
        origin: "Banque Postale",
        category: "Paiement",
        type: "CB",
        operationDate: new Date().toLocaleDateString(),
        sum: "125",
        comm: "Gros McDd !",
    },
    {
        id: "002",
        origin: "Banque Postale",
        category: "Paiement",
        type: "CB",
        operationDate: new Date().toLocaleDateString(),
        sum: "125",
        comm: "Gros McDd !",
    },
    {
        id: "003",
        origin: "Banque Postale",
        category: "Paiement",
        type: "CB",
        operationDate: new Date().toLocaleDateString(),
        sum: "125",
        comm: "Gros McDd !",
    },
    {
        id: "004",
        origin: "Banque Postale",
        category: "Paiement",
        type: "CB",
        operationDate: new Date().toLocaleDateString(),
        sum: "125",
        comm: "Gros McDo !",
    },
    {
        id: "005",
        origin: "Banque Postale",
        category: "Paiement",
        type: "CB",
        operationDate: new Date().toLocaleDateString(),
        sum: "125",
        comm: "Gros McDd !",
    },
    {
        id: "006",
        origin: "Banque Postale",
        category: "Paiement",
        type: "CB",
        operationDate: new Date().toLocaleDateString(),
        sum: "125",
        comm: "Gros McDo !",
    },
    {
        id: "007",
        origin: "Banque Postale",
        category: "Paiement",
        type: "CB",
        operationDate: new Date().toLocaleDateString(),
        sum: "125",
        comm: "Gros McDd !",
    },
    {
        id: "008",
        origin: "Banque Postale",
        category: "Paiement",
        type: "CB",
        operationDate: new Date().toLocaleDateString(),
        sum: "115",
        comm: "Gros McDo !",
    },
    {
        id: "009",
        origin: "Institut pour le Financement du Cinéma et des Industries Culturelles",
        category: "Paiement",
        type: "CB",
        operationDate: '06/10/2021' ,
        sum: "135",
        comm: "Institut pour le Financement du Cinéma et des Industries Culturelles",
    },
    {
        id: "010",
        origin: "Banque Postale",
        category: "Paiement",
        type: "CB",
        operationDate: new Date().toLocaleDateString(),
        sum: "125",
        comm: "Gros McDo !, j'avais une de c'est dalle, j'ai graille pour au moins une semaine et pour quatre personnes. le gros que je suis",
    }
]


function ExpenseTable() {
    const [counter, setCounter ] = useState(0);

    return (
        <section>
            <table cellPadding="0" cellSpacing="0" border="0">
                <thead>
                <tr>
                    <th scope="col" className="col-id">ID</th>
                    <th scope="col" className="col-origin">Provenance</th>
                    <th scope="col" className="col-category">Catégorie</th>
                    <th scope="col" className="col-type">Type</th>
                    <button className="date-tri" onClick={() => setCounter(counter+1)}>
                        <th scope="col" className="col-date">Date ⇩</th>
                    </button>
                    <th scope="col" className="col-sum">Montant</th>
                    <th scope="col" className="col-comm">Commentaire</th>
                    <th scope="col" className="col-action">Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map(
                        (data) => (
                            <LineExpenseTable
                                key={data.id}
                                id={data.id}
                                origin={data.origin}
                                category={data.category}
                                type={data.type}
                                date={data.operationDate}
                                sum={data.sum}
                                comm={data.comm} />

                        )
                    ).slice().sort(dateSort(counter))
                }
                </tbody>
            </table>
        </section>

    )
}

const dateSort = (count) => {
    if (count%2 === 0 ){
        return (a,b) => a.props.date < b.props.date ? 1 : -1
    }
    else {
        return (a,b) => a.props.date > b.props.date ? 1 : -1
    }
}




export default ExpenseTable;
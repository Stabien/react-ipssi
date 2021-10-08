import React, {useState} from "react";
import '../styles/ExpenseTable.css';
import '../styles/Modal.css'
import LineExpenseTable from "./LineExpenseTable";
import Modal from './Modal';
import useModal from '../customHook/useModal'

const data = [
    {
        id: "001",
        origin: "Banque Postale",
        category: "Paiement",
        type: "CB",
        operationDate: '06/10/2021',
        sum: "125",
        comm: "Gros McDd !",
        debit: true,
    },
    {
        id: "002",
        origin: "Banque Postale",
        category: "Paiement",
        type: "CB",
        operationDate: new Date().toLocaleDateString(),
        sum: "125",
        comm: "Gros McDd !",
        debit: true,
    },
    {
        id: "003",
        origin: "Banque Postale",
        category: "Paiement",
        type: "CB",
        operationDate: new Date().toLocaleDateString(),
        sum: "125",
        comm: "Gros McDd !",
        debit: true,
    },
    {
        id: "004",
        origin: "Banque Postale",
        category: "Paiement",
        type: "CB",
        operationDate: new Date().toLocaleDateString(),
        sum: "125",
        comm: "Gros McDo !",
        debit: true,

    },
    {
        id: "005",
        origin: "Banque Postale",
        category: "Paiement",
        type: "CB",
        operationDate: new Date().toLocaleDateString(),
        sum: "125",
        comm: "Gros McDd !",
        debit: true,
    },
    {
        id: "006",
        origin: "Banque Postale",
        category: "Paiement",
        type: "CB",
        operationDate: new Date().toLocaleDateString(),
        sum: "125",
        comm: "Gros McDo !",
        debit: true,

    },
    {
        id: "007",
        origin: "Banque Postale",
        category: "Paiement",
        type: "CB",
        operationDate: new Date().toLocaleDateString(),
        sum: "125",
        comm: "Gros McDd !",
        debit: true,
    },
    {
        id: "008",
        origin: "Banque Postale",
        category: "Paiement",
        type: "CB",
        operationDate: new Date().toLocaleDateString(),
        sum: "-115",
        comm: "Gros McDo !",
        debit: true,
    },
    {
        id: "009",
        origin: "Institut pour le Financement du Cinéma et des Industries Culturelles",
        category: "Paiement",
        type: "CB",
        operationDate: new Date().toLocaleDateString(),
        sum: "+135",
        comm: "Institut pour le Financement du Cinéma et des Industries Culturelles",
        debit: true,
    },
    {
        id: "010",
        origin: "Banque Postale",
        category: "Paiement",
        type: "CB",
        operationDate: new Date().toLocaleDateString(),
        sum: "+125",
        comm: "Gros McDo !, j'avais une de c'est dalle, j'ai graille pour au moins une semaine et pour quatre personnes. le gros que je suis",
        debit: true,
    }
]


function ExpenseTable() {
    const [counter, setCounter] = useState(0);
    const { isShowing: isAddOpFormShowed, toggle: toggleAddOpForm } = useModal();
    const { isShowing: isEditOpFormShowed, toggle: toggleEditOpForm } = useModal();

    return (
        <section className="section-table">
            <div className="div-btn-add">
                <button className="btn-add" onClick={toggleAddOpForm}>Ajouter une opération</button>
            </div>

            {/*Pop-up ajout d'une opération*/}
            <Modal
                isShowing={isAddOpFormShowed}
                hide={toggleAddOpForm}
                title="Ajouter une opération"
            >
                <form>
                    <div className="form-group">
                        <input type="text" placeholder="Provenance" className="form-item" />
                    </div>
                    <div className="form-group">
                        <select name="operation-category" id="operation-category" className="form-item">
                            <option value="">-- Choisissez une catégorie --</option>
                            <option value="Loisirs">Loisirs</option>
                            <option value="Logement">Logement</option>
                            <option value="Revenu du travail">Revenu du travail</option>
                            <option value="Virement reçu">Virement reçu</option>
                            <option value="Dépenses d'épargne">Dépenses d'épargne</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <select name="operation-type" id="operation-type" className="form-item">
                            <option value="">-- Choisissez un type d'opération --</option>
                            <option value="CB">CB</option>
                            <option value="Espèces">Espèces</option>
                            <option value="Virement">Virement</option>
                            <option value="Chèque">Chèque</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="date" placeholder="Date" className="form-item"/>
                    </div>
                    <div className="form-group">
                        <input type="radio" name="credit-debit" id="débit" value="débit"/>
                        <label htmlFor="débit">débiter</label>
                    </div>
                    <div>
                        <input type="radio" name="credit-debit" id="crédit" value="crédit"/>
                        <label htmlFor="crédit">créditer</label>
                    </div>
                    <div className="form-group">
                        <input type="number" placeholder="Montant" className="form-item"/>
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Commentaire" className="form-item"/>
                    </div>
                    <div className="form-group modal-button">
                        <input type="submit" value="Ajouter l'opération" className="form-item"/>
                    </div>
                </form>
            </Modal>

            {/*Modification d'une opération*/}
            <Modal
                isShowing={isEditOpFormShowed}
                hide={toggleEditOpForm}
                title="Modifier une opération"
            >
                <form>
                    <div className="form-group">
                        <input type="text" placeholder="Provenance" className="form-item" />
                    </div>
                    <div className="form-group">
                        <select name="operation-category" id="operation-category" className="form-item">
                            <option value="">-- Choisissez une catégorie --</option>
                            <option value="Loisirs">Loisirs</option>
                            <option value="Logement">Logement</option>
                            <option value="Revenu du travail">Revenu du travail</option>
                            <option value="Virement reçu">Virement reçu</option>
                            <option value="Dépenses d'épargne">Dépenses d'épargne</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <select name="operation-type" id="operation-type" className="form-item">
                            <option value="">-- Choisissez un type d'opération --</option>
                            <option value="CB">CB</option>
                            <option value="Espèces">Espèces</option>
                            <option value="Virement">Virement</option>
                            <option value="Chèque">Chèque</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="date" placeholder="Date" className="form-item"/>
                    </div>
                    <div className="form-group">
                        <input type="radio" name="credit-debit" id="débit" value="débit"/>
                        <label htmlFor="débit">débiter</label>
                    </div>
                    <div>
                        <input type="radio" name="credit-debit" id="crédit" value="crédit"/>
                        <label htmlFor="crédit">créditer</label>
                    </div>
                    <div className="form-group">
                        <input type="number" placeholder="Montant" className="form-item"/>
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Commentaire" className="form-item"/>
                    </div>
                    <div className="form-group modal-button">
                        <input type="submit" value="Modifier l'opération" className="form-item"/>
                    </div>
                </form>
            </Modal>

            {/*En-tête du tableau des dépenses*/}
            <div className="div-table">
                <table cellPadding="0" cellSpacing="0" border="0">
                    <thead>
                    <tr>
                        <th scope="col" className="col-id">ID</th>
                        <th scope="col" className="col-origin">Provenance</th>
                        <th scope="col" className="col-category">Catégorie</th>
                        <th scope="col" className="col-type">Type</th>
                        <button className="date-tri" onClick={() => setCounter(counter + 1)}>
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
                                    comm={data.comm}
                                    debit={data.debit}
                                    toggle={toggleEditOpForm}
                                />

                            )
                        ).slice().sort(dateSort(counter))
                    }
                    </tbody>
                </table>
            </div>
        </section>

    )
}


const dateSort = (count) => {
    if (count % 2 === 0) {
        return (a, b) => a.props.date < b.props.date ? 1 : -1
    } else {
        return (a, b) => a.props.date > b.props.date ? 1 : -1
    }
}


export default ExpenseTable;
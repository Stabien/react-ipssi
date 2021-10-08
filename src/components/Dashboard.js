import React, {Fragment} from "react";
import Header from "./Header";
import ExpenseTable from "./ExpenseTable";

function Dashboard () {
    return (
        <Fragment>
            <Header />
            <ExpenseTable />
        </Fragment>

    )
}

export default Dashboard;
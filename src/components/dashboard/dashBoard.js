import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import AddTransaction from "../dashboard/parts/add";
//import Header from "../dashboard/parts/headerRed";
import Balance from "../dashboard/parts/balance";
import IncomeExpenses from "../dashboard/parts/IncomeExpense";
import TransactionList from "../dashboard/parts/transactionList";
import { GlobalProvider } from "./context/GlobalState";
import "./expense.styles.scss";

class dashBoard extends React.Component {
  render() {
    const { auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    } else {
      return (
        <div className="dashboard">
          {/* <div className='row' >
            <div className='col s12 m6'></div>
            <div className='col s12 m5 offset-m1'></div>
          </div> */}
          <GlobalProvider>
            {/* <Header /> */}
            <div className="container1">
              <Balance />
              <IncomeExpenses />
              <TransactionList />
              <AddTransaction />
            </div>
          </GlobalProvider>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  firestoreConnect([{ collection: "projects" }])
)(dashBoard);

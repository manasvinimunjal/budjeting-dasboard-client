import React, { Component } from 'react';




import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { connect } from 'react-redux';
import { getTransactions, deleteTransaction } from '../actions/transactionActions';
import PropTypes from 'prop-types';

import TransactionModal from './TransactionModal';
// class Category extends Component {

//   state= {
//     isOpen:false
//   }
//   toggle = () => {
//     this.setState({
//        isOpen: !this.state.isOpen
//     });
//   }
//   render() {
//     return (
//       <div className="category">
//     <Navbar color="dark" dark expand="sm" className="mb-5">

//      <Container>
//        <NavbarBrand href="/">Categories List</NavbarBrand>
//        <NavbarToggler onClick={this.toggle}/>
//        <Collapse isOpen={this.state.isOpen} navbar>
//          <Nav className="ml-auto" navbar>
//            <NavItem>
//              <NavLink href="https://github.com/manasvinimunjal">
//                 Github 
//              </NavLink>
//            </NavItem>
//          </Nav>
//        </Collapse>
//      </Container>

//     </Navbar>
//   </div>
//     );

//   }
// }

class Transaction extends Component {

  static propTypes = {
    getTransactions: PropTypes.func.isRequired,
    transaction: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  }

  componentDidMount() {
    this.props.getTransactions();
  }

  onDeleteClick = (id) => {
    this.props.deleteTransaction(id);
  }
  render() {

    const { transactions } = this.props.transaction;
    return (
      <Container>

        <ListGroup>
          <TransitionGroup className="categories-list">
            {transactions.map(({ _id, type, task, account, value }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem >
                  {this.props.isAuthenticated ? <Button className="remove-btn" color="danger" size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)}>&times;
                
    </Button> : null}
             <b> {type}  - {value} </b>
                  
                </ListGroupItem>
              </CSSTransition>
            )

            )}

          </TransitionGroup>
        </ListGroup>
        <TransactionModal />

      </Container>
    );
  }
}


const mapStateToProps = (state) => ({
  transaction: state.transaction,
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { getTransactions, deleteTransaction })(Transaction);
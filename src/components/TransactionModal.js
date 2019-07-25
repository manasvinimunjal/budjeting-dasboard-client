import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {connect} from 'react-redux';
import {addTransaction} from '../actions/transactionActions';
import { getCategories } from '../actions/categoryActions';
import { getAccount } from '../actions/accountActions';

import PropTypes from 'prop-types'

class TransactionModal extends Component {
  state= {
      modal: false,
      name: '',
      type: '',
      category: '',
      amount: '',
      };

     static propTypes = {
         isAuthenticated: PropTypes.bool
     }
      toggle =() => {
          this.setState({
             modal: !this.state.modal
          });
      }

      onChange=(e)=> {
          this.setState({[e.target.name]: e.target.value});
      }

      componentDidMount() {
          this.props.getAccount();
          this.props.getCategories();
      }

      onSubmit= (e)=> {
          e.preventDefault();

          const newTransaction={
             type: this.state.type,
             task: this.state.category          ,
             account: this.state.account,
             value: this.state.amount
          }
          //add category via addCategory action
          this.props.addTransaction(newTransaction);

          //close modal
          this.toggle();

      }
      render() {
        const { accounts } = this.props.account;
        const { categories } = this.props.category;

          return(
              <div>
                  {this.props.isAuthenticated?  <Button color="dark" 
                          style= {{marginBottom: '2rem'}}
                          onClick={this.toggle}>
                      Add Transaction
                  </Button> : <h4 className="mb-3 ml-4">Please log in to manage Transactions</h4>}
                

                  <Modal isOpen={this.state.modal}
                         toggle={this.toggle}
                  >
                   <ModalHeader toggle ={this.toggle}>
                    Add to Transaction
                   </ModalHeader>
                   <ModalBody>
                     <Form onSubmit={this.onSubmit}>
                       <FormGroup>
                            <select name="type" className="form-control"  onChange={this.onChange} value={this.state.type}>
                            <option value="">Select a type</option>
                                {["Withdrawl", "Deposit"].map((type)=> <option key={type.toLowerCase()} value={type.toLowerCase()}>{type}</option> )}
                            </select>
                       </FormGroup>
                       <FormGroup>
                           <Label for="category">Category</Label>
                            <select name="category" className="form-control" onChange={this.onChange} value={this.state.category}>
                                <option value="">Select a category</option>
                                {categories && categories.map((category)=> <option key={category._id} value={category._id}>{category.name}</option> )}
                            </select>
                       </FormGroup>
                       <FormGroup>
                           <Label for="category">Account</Label>
                            <select name="account" className="form-control" onChange={this.onChange} value={this.state.account}>
                            <option value="">Select a account</option>
                                {accounts && accounts.map((account)=> <option key={account._id} value={account._id}>{account.type}</option> )}
                            </select>
                       </FormGroup>
                       <FormGroup>
                           <Label for="amount">Amount</Label>
                           <Input type="text"
                                   name="amount"
                                    id="amount"
                                    placeholder="amount"
                                    onChange={this.onChange}/>
                       </FormGroup>
                       <Button color="dark" style={{marginTop: '2rem'}} block>Add Transaction</Button>
                     </Form>  
                   </ModalBody>
                  </Modal>
              </div>
          );
      }
}

const mapStateToProps = state => ({
    transaction: state.transaction,
    category: state.category,
    account: state.account,
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, {addTransaction, getCategories, getAccount}) (TransactionModal);
import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
import {connect} from 'react-redux';
import {addBudget} from '../actions/budgetActions';
import PropTypes from 'prop-types'


class BudgetModal extends Component {
  state= {
      modal: false,
      name: ''
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

      onSubmit= (e)=> {
          e.preventDefault();

          const newBudget={
           
             name: this.state.name,
             budgeted:this.state.budgeted
          }
          //add category via addCategory action
          this.props.addBudget(newBudget);

          //close modal
          this.toggle();

      }
      render() {
          return(
              <div>
                  {this.props.isAuthenticated?  <Button color="dark" 
                          style= {{marginBottom: '2rem'}}
                          onClick={this.toggle}>
                      Add Budget
                  </Button> : <h4 className="mb-3 ml-4">Please log in to manage budget</h4>}
                

                  <Modal isOpen={this.state.modal}
                         toggle={this.toggle}
                  >
                   <ModalHeader toggle ={this.toggle}>
                    Add to Budgets
                   </ModalHeader>
                   <ModalBody>
                     <Form onSubmit={this.onSubmit}>
                       <FormGroup>
                           <div className="row">
                           <div className="col-md-6">
                           <Label for="budget">Budget</Label>
                           <Input type="text"
                                   name="name"
                                    id="budget"
                                    placeholder="Add Budget"
                                    onChange={this.onChange}/>
                            </div>
                            <div className="col-md-6">   
                                    <Label for="budgeted">Budgeted Amount</Label>         
                           <Input type="text"
                                   name="budgeted"
                                    id="budgeted"
                                    placeholder="Add Budgeting Amount"
                                    onChange={this.onChange}/>
                                    </div>
                             <Button color="dark" style={{marginTop: '2rem'}} block>Add Budget</Button>
                             </div>
                       </FormGroup>
                     </Form>  
                   </ModalBody>
                  </Modal>
              </div>
          );
      }
}

const mapStateToProps = state => ({
    budget: state.budget,
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, {addBudget}) (BudgetModal);
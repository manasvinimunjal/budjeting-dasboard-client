import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
import {connect} from 'react-redux';
import {addCategory} from '../actions/categoryActions';
import PropTypes from 'prop-types'

class CategoryModal extends Component {
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

          const newCategory={
           
             name: this.state.name,
             desc: this.state.desc
          }
          //add category via addCategory action
          this.props.addCategory(newCategory);

          //close modal
          this.toggle();

      }
      render() {
          return(
              <div>
                  {this.props.isAuthenticated?  <Button color="dark" 
                          style= {{marginBottom: '2rem'}}
                          onClick={this.toggle}>
                      Add Category
                  </Button> : <h4 className="mb-3 ml-4">Please log in to manage categories</h4>}
                

                  <Modal isOpen={this.state.modal}
                         toggle={this.toggle}
                  >
                   <ModalHeader toggle ={this.toggle}>
                    Add to Categories
                   </ModalHeader>
                   <ModalBody>
                     <Form onSubmit={this.onSubmit}>
                       <FormGroup>
                           <Label for="category">Name</Label>
                           <Input type="text"
                                   name="name"
                                    id="category"
                                    placeholder=""
                                    onChange={this.onChange}/>
                       </FormGroup>
                       <FormGroup>
                           <Label for="desc">Description</Label>
                           <Input type="text"
                                   name="desc"
                                    id="desc"
                                    placeholder=""
                                    onChange={this.onChange}/>
                       </FormGroup>
                       <Button color="dark" style={{marginTop: '2rem'}} block>Add Category</Button>
                     </Form>  
                   </ModalBody>
                  </Modal>
              </div>
          );
      }
}

const mapStateToProps = state => ({
    category: state.category,
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, {addCategory}) (CategoryModal);
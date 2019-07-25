import React , {Component}from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';




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
 
import { ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import {connect} from 'react-redux';
import {getBudget, deleteBudget} from  '../actions/budgetActions';
import PropTypes from 'prop-types';

import BudgetModal from './BudgetModal';



class Budget extends Component {

  static propTypes = {
    getBudget: PropTypes.func.isRequired,
    budget: PropTypes.object.isRequired,
    isAuthenticated:PropTypes.bool
  }

componentDidMount() {
  this.props.getBudget();
}

onDeleteClick = (id) => {
  this.props.deleteBudget(id);
}
  render () {
 
    const {budgets}= this.props.budget;
   return (
<Container>
<MDBTable>
      <MDBTableHead color="primary-color" textWhite>
      <tr>
          <th>Budget</th>
          <th>Budgeted</th>
          
        </tr>
        </MDBTableHead>
      <MDBTableBody>
      <tr>
     
<ListGroup>

  <TransitionGroup className="budget-list">
{budgets.map (({_id,name,budgeted})=>(
  <CSSTransition key={_id} timeout={500} classNames="fade">
   
  <ListGroupItem >
  <td>
    {this.props.isAuthenticated?  <Button className="remove-btn" color="danger" size="sm"
    onClick={this.onDeleteClick.bind(this,_id)}>&times;

    </Button>:null}
   
   {name}</td>
   
  </ListGroupItem>

  <ListGroupItem>
       <td>{budgeted}</td>
       </ListGroupItem>
     
        
      
     
  </CSSTransition>
)

)}

  </TransitionGroup>
 
</ListGroup>
</tr>
  <BudgetModal/>
  </MDBTableBody>
    </MDBTable>
</Container>
   );
  }
}


const mapStateToProps = (state)=> ({
  budget: state.budget,
  isAuthenticated:state.auth.isAuthenticated

}) 

export default connect(mapStateToProps, {getBudget,deleteBudget})(Budget);
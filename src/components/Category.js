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
import { getCategories, deleteCategory } from '../actions/categoryActions';
import PropTypes from 'prop-types';

import CategoryModal from './CategoryModal';
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

class Category extends Component {

  static propTypes = {
    getCategories: PropTypes.func.isRequired,
    category: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  }

  componentDidMount() {
    this.props.getCategories();
  }

  onDeleteClick = (id) => {
    this.props.deleteCategory(id);
  }
  render() {

    const { categories } = this.props.category;
    return (
      <Container>

        <ListGroup>
          <TransitionGroup className="categories-list">
            {categories.map(({ _id, name, desc }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem >
                  {this.props.isAuthenticated ? <Button className="remove-btn" color="danger" size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)}>&times;
                
    </Button> : null}

                  {name} - {desc}
                </ListGroupItem>
              </CSSTransition>
            )

            )}

          </TransitionGroup>
        </ListGroup>
        <CategoryModal />

      </Container>
    );
  }
}


const mapStateToProps = (state) => ({
  category: state.category,
  isAuthenticated: state.auth.isAuthenticated

})

export default connect(mapStateToProps, { getCategories, deleteCategory })(Category);
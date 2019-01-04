import React from "react"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownMenu
} from 'reactstrap';
import {Link} from "react-router-dom"

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
        isOpen: false
        };
    } 
    toggle() {
        this.setState({
        isOpen: !this.state.isOpen
        });
    }
    render () {
        return (
            <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">Cameras R Us</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Link to="/">Store</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/checkout">Cart</Link>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                    <DropdownMenu right>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                </Collapse>
            </Navbar>
            </div>
        );
        }
}

export default Header
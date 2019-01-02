import React from "react"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

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
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Cameras R Us</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/components/">Store</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                    <DropdownMenu right>
                        <DropdownItem>
                        Store
                        </DropdownItem>
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
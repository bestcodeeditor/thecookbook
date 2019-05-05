import PropTypes from "prop-types"
import React from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <div>
        <Navbar
          style={{ backgroundColor: "#606060" }}
          fixed="top"
          light
          expand="sm"
        >
          <div className="container">
            <NavbarBrand href="/" style={{ color: "#FFFFFF" }}>
              {this.props.siteTitle}
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/team/" style={{ color: "#FFFFFF" }}>
                    Our Chef's
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/tags/" style={{ color: "#FFFFFF" }}>
                    Tags
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/about/" style={{ color: "#FFFFFF" }}>
                    About
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import React from "react"
import headerStyles from "./header.module.scss"
import { Link, graphql, useStaticQuery } from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap"
const Header = () => {
  const response = useStaticQuery(graphql`
    query {
      allContentfulPost {
        edges {
          node {
            title
            subTitle
            author
            slug
          }
        }
      }
    }
  `)
  return (
    <header className={headerStyles.headermain}>
      <h1 className={headerStyles.logo}>PIAIC</h1>
      <nav className={headerStyles.mainnav}>
        <ul className={headerStyles.ul}>
          <li>
            <Link className={headerStyles.li} activeClassName = {headerStyles.activelink} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={headerStyles.li} activeClassName = {headerStyles.activelink} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={headerStyles.li} activeClassName = {headerStyles.activelink} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle className={headerStyles.navbar} nav caret>
            Courses
          </DropdownToggle>
          <DropdownMenu right>
            {response.allContentfulPost.edges.map(edge => {
              return (
                <DropdownItem>
                  <Link to={`/${edge.node.slug}`}>{edge.node.title}</Link>
                </DropdownItem>
              )
            })}
          </DropdownMenu>
        </UncontrolledDropdown>
      </nav>
    </header>
  )
}

export default Header

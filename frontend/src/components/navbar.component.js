import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const NavbarContainer = styled.nav`
  background-color: Blue gr;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarBrand = styled(Link)`
  color: Violet;
  font-size: 1.5rem;
  text-decoration: none;
  position: relative;
  &:hover {
    color: #ffc107;
  }
`;

const NavbarCollapse = styled.div`
  display: flex;
`;

const NavbarNav = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
`;

const NavbarItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled(Link)`
  color: orange;
  text-decoration: none;
  font-size: 1.1rem;
  position: relative;
  &:before,
  &:after {
    position: absolute;
    width: 2px;
    height: 100%;
    top: 0px;
    content: '';
    background: cyan;
    opacity: 0.3;
    transition: all 0.3s;
  }
  &:before {
    left: 0px;
  }
  &:after {
    right: 0px;
  }
  &:hover:before,
  &:hover:after {
    width: 100%;
  }
`;

const linkVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export default class Navbar extends Component {
  render() {
    return (
      <NavbarContainer>
        <NavbarBrand to="/">Exercise Tracker</NavbarBrand>
        <NavbarCollapse>
          <NavbarNav>
            <NavbarItem>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={linkVariants}
                transition={{ duration: 0.5 }}
              >
                <NavLink to="/">Exercises</NavLink>
              </motion.div>
            </NavbarItem>
            <NavbarItem>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={linkVariants}
                transition={{ duration: 0.6 }}
              >
                <NavLink to="/create">Create Exercise Log</NavLink>
              </motion.div>
            </NavbarItem>
            <NavbarItem>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={linkVariants}
                transition={{ duration: 0.7 }}
              >
                <NavLink to="/user">Create User</NavLink>
              </motion.div>
            </NavbarItem>
          </NavbarNav>
        </NavbarCollapse>
      </NavbarContainer>
    );
  }
}

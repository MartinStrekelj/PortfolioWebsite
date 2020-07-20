import React, { Component } from 'react';
import "./Navigation.css"
import { Container, Navbar, NavbarBrand, NavbarItem, Title, NavbarEnd } from 'bloomer';



class Navigation extends Component {
    render(){
        return (
            <Container>
            <Navbar isTransparent="true" isOverlay={true}  style={{padding: "15px"}} >
                <NavbarBrand>
                    <NavbarItem>
                        <Title isSize={3} style={{color: "#14213D"}}>Martin Štrekelj</Title>
                    </NavbarItem>
                </NavbarBrand>
                <NavbarEnd>
                    <NavbarItem href="#about" className="navbarItem">
                        <Title isSize={6} >About</Title>
                    </NavbarItem>
                    <NavbarItem  href="#portfolio" className="navbarItem">
                        <Title isSize={6} >Portfolio</Title>
                    </NavbarItem>
                    <NavbarItem href="#contact" className="navbarItem">
                        <Title isSize={6} >Contact</Title>
                    </NavbarItem>
                    <NavbarItem href="#blog" className="navbarItem">
                        <Title isSize={6}> Blog </Title>
                    </NavbarItem>
                </NavbarEnd> 
            </Navbar>
            </Container>
        );
    }
}

export default Navigation;
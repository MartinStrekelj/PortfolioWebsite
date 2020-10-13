import { Column, Columns, Container, Hero, Title } from 'bloomer'
import React from 'react'
import Branch from '../../components/Branch/Branch'

const MyWork = () => {
    return (
        <Hero className="containerZ" isSize="large" isColor="white">
            <Container isFluid className="containerZ">
            <Title isSpaced="true" isSize={2} style={{paddingTop: "20px"}} id="myWork">My work</Title>
                <Columns className="containerZ">
                    <Column isSize="1/2"><Branch image={'https://picsum.photos/600'}/></Column>
                    <Column isSize="1/2"><Branch image={'https://picsum.photos/600'}/></Column>
                </Columns>
            </Container>
        </Hero>
    )
}

export default MyWork

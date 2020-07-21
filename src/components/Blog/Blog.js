import React from 'react';
import { Hero, Title, Container, Subtitle, Box} from "bloomer";


const Blog = () => {


        return (
            <Hero className="containerZ" isSize="small" isColor="white">
                    <Container isFluid="true" style={{padding: "20px"}}>
                        <Title isSize={2} style={{paddingTop: "20px"}} id="blog">Blog</Title>
                        <Subtitle isSize={4}>Developer tutorials and rants.</Subtitle>
                        <Box hasTextAlign="centered"><Title isSize={6}>To be added in the near future.</Title></Box>
                    </Container>
            </Hero>
        );
    }

export default Blog;
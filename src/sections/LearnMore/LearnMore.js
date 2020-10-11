import React, { Component } from 'react';
import { Modal, ModalBackground, ModalCard, ModalCardTitle, Delete, ModalCardHeader, ModalCardBody, ModalCardFooter, Button, Columns, Column, } from 'bloomer';

class LearnMore extends Component {
        render(){
        return (
            <Modal>
                <ModalBackground/>
                    <ModalCard>
                        <ModalCardHeader>
                            <ModalCardTitle>{this.props.projectName}</ModalCardTitle>
                            <Delete />
                        </ModalCardHeader>
                        <ModalCardBody>
                            {this.props.bio}
                        </ModalCardBody>
                        <ModalCardFooter>
                            <Columns>
                                <Column>
                                    <Button> {this.props.github} </Button>
                                </Column>
                                <Column>
                                    <Button> {this.props.demo} </Button>
                                </Column>
                            </Columns>
                        </ModalCardFooter>
                    </ModalCard>
            </Modal>
        )
        }    
    }


export default LearnMore;
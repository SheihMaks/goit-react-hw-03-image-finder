import React from "react";
import PropTypes from 'prop-types';

import { ModalWindow, Overlay,ModalImage } from "./Modal.styled"

export class Modal extends React.Component{
    componentDidMount(){
        window.addEventListener('keydown',this.onCloseModal)
    }

    componentWillUnmount(){
        window.removeEventListener('keydown',this.onCloseModal)
    }

    onCloseModal=(ev)=>{
        if (ev.key ==='Escape' || ev.target === ev.currentTarget){
        this.props.onClick()}
    }

    render(){
        const {onCloseModal}=this;
        const {imageModal}= this.props;
        return(<Overlay onClick={onCloseModal}>
    <ModalWindow>
    <ModalImage src={imageModal} alt="" />
    </ModalWindow>
</Overlay>)}
}

Modal.propTypes={
    imageModal:PropTypes.string.isRequired
}

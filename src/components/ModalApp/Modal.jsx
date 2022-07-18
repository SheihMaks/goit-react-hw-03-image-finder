import React from "react"
import { ModalWindow, Overlay } from "./Modal.styled"

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
        const {imageModal}= this.props;
        return(<Overlay onClick={this.onCloseModal}>
    <ModalWindow>
      <img src={imageModal} alt="" />
    </ModalWindow>
  </Overlay>)
}}
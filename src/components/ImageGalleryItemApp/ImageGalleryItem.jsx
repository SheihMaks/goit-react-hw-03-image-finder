import React from "react";
import { ImageGalleryItemContainer,Img } from "./ImageGalleryItem.styled"
import { Modal } from "components/ModalApp/Modal";
export class ImageGalleryItem extends React.Component {

    state={
    isOpen:false
}
onToggleModal=()=>{
    this.setState(prevState=>({isOpen: prevState.isOpen ? false : true}))
}

render(){
    const {isOpen}= this.state;
    const {webformatURL,largeImageURL}= this.props.picture;
return(<ImageGalleryItemContainer>
        <Img src={webformatURL}  alt="Picture" onClick={this.onToggleModal} />
        {isOpen && <Modal onClick={this.onToggleModal} imageModal={largeImageURL} />}
        </ImageGalleryItemContainer>
        )}}

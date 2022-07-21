import React from "react";
import PropTypes from 'prop-types';
import { Modal } from "components/ModalApp/Modal";
import { ImageGalleryItemContainer,Img } from "./ImageGalleryItem.styled"

export class ImageGalleryItem extends React.Component {
    state={largeImg:''}

    onOpenModal=()=>{
        const {largeImgLink}=this.props;
        this.setState(({largeImg: largeImgLink}))
      }
      
    onCloseModal=()=>this.setState({largeImg:''})

render(){
    const {webFormat}=this.props;
    const {onOpenModal,onCloseModal}=this;
    const {largeImg}=this.state;
    return (<ImageGalleryItemContainer>
        <Img src={webFormat} alt="Picture" onClick={onOpenModal} />
        {largeImg !=='' && <Modal 
    imageModal={largeImg} 
    onClick={onCloseModal}/>}
        </ImageGalleryItemContainer>
        )}
}

ImageGalleryItem.propTypes={
webFormat:PropTypes.string,
largeImgLink:PropTypes.string,

}
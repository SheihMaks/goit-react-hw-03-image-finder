import { ImageGalleryItemContainer,Img } from "./ImageGalleryItem.styled"

export const ImageGalleryItem=({pictures})=>{
   return pictures.map((picture)=>{
        const {id,webformatURL}=picture
return(<ImageGalleryItemContainer key={id}>
        <Img src={webformatURL}  alt="Picture" />
        </ImageGalleryItemContainer>
        )    })}

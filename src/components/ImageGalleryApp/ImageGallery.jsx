import {ImageGalleryList} from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItemApp/ImageGalleryItem';
import { Spiner } from 'components/SpinnerApp/Spiner';
export const ImageGallery=({status,searchedPictures})=>{
    if(status==='pending'){
        return(<Spiner/>)}
    return (<ImageGalleryList>{status==="resolved" && 
    searchedPictures.map(el=>{return(<ImageGalleryItem key={el.id} picture={el}/>)})}
    </ImageGalleryList>)
}
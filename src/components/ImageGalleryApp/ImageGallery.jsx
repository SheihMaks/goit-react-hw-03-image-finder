import {ImageGalleryList} from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItemApp/ImageGalleryItem';
import { Oval } from  'react-loader-spinner';
export const ImageGallery=({status,searchedPictures})=>{
    if(status==='pending'){
        return(<Oval color="#00BFFF" height={80} width={80} />)}
        console.log(searchedPictures)
    return (<ImageGalleryList>
         {status==="resolved" && <ImageGalleryItem pictures={searchedPictures}/>}
    </ImageGalleryList>)
}
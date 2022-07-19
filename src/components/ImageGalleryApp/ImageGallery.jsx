import {ImageGalleryList} from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItemApp/ImageGalleryItem';
import {UncorrectSearchMessage} from 'components/UncorrectSearchMessageApp/UccorrectSearchMessage';
import { Spiner } from 'components/SpinnerApp/Spiner';

export const ImageGallery=({status,searchedPictures})=>{
    if(status==='pending'){ return(<Spiner/>)}
    if(status==="resolved" && searchedPictures.length === 0){return (<UncorrectSearchMessage message='Sorry, no results were found for your search'/>)}
    return (<ImageGalleryList>
    {status==="resolved" && searchedPictures.length !== 0 && (searchedPictures.map(el=>{ 
        return(<ImageGalleryItem key={el.id} picture={el}/>)}))}
    </ImageGalleryList>)
}
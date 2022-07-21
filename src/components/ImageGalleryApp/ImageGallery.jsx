
import PropTypes from 'prop-types';
import {ImageGalleryList} from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItemApp/ImageGalleryItem';

export const ImageGallery=({searchedPictures})=>{
    return (<ImageGalleryList >
    {searchedPictures.map(el=>{ 
        const {webformatURL,largeImageURL}=el;
        return(<ImageGalleryItem key={el.id} webFormat={webformatURL} largeImgLink={largeImageURL}/>)})}
    </ImageGalleryList>)
}

ImageGallery.propTypes={
    searchedPictures:PropTypes.array.isRequired,
}
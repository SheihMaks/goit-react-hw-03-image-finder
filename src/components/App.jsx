import React from "react";
import { Oval } from  'react-loader-spinner';
import { SearchBar } from "./SearchBarApp/Searchbar";
import { ImageGallery } from "./ImageGalleryApp/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItemApp/ImageGalleryItem";
export class App extends React.Component {
  state={
    picture:'',
    searchedPictures:[],
    page:1,
    isLoading: false
  }
  componentDidUpdate=(prevProps,prevState)=>{
    const APIKEY='27705684-ea6ff4282bc06d8fe5ddb5326'
    const URL=`https://pixabay.com/api/?q=${this.state.picture}&page=${this.state.page}&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=12`
    if(this.state.picture !== prevState.picture){
      fetch(URL).then(response=>{
      this.setState({isLoading:true})
      return response.json()}).then(pictures=>{
      return this.setState({searchedPictures:pictures.hits,isLoading:false})})}}

  handleSubmit=(searchData)=>{
  this.setState({picture: searchData})}

  render(){ 
    const {searchedPictures, isLoading}= this.state;
    return (<><SearchBar onSubmit={this.handleSubmit}/>
    { isLoading ? <Oval color="#00BFFF" height={80} width={80} /> : <ImageGallery>
      { searchedPictures && <ImageGalleryItem pictures={searchedPictures}/>}</ImageGallery>}</> 
    )}
}
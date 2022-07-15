import React from "react";
import { SearchBar } from "./SearchBarApp/Searchbar";
import { ImageGallery } from "./ImageGalleryApp/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItemApp/ImageGalleryItem";
export class App extends React.Component {
  state={
    picture:''
  }

  handleSubmit=(searchData)=>{
    console.log(searchData)
  this.setState({picture: searchData})
  setTimeout(()=>{console.log(this.state)},2000)
    
  }

  render(){ 
    return (<><SearchBar onSubmit={this.handleSubmit}/>
    <ImageGallery><ImageGalleryItem/></ImageGallery></> 
    )}
}
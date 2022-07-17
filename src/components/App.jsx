import React from "react";
import { SearchBar } from "./SearchBarApp/Searchbar";
import { ImageGallery } from "./ImageGalleryApp/ImageGallery";
import { Button } from "./ButtonLoadMore/Button";

export class App extends React.Component {
  state={
    status:'idle',
    picture:'',
    searchedPictures:[],
    page:1,
  }
  componentDidUpdate=(prevProps,prevState)=>{
    const {page,picture}=this.state;
    if(picture !== prevState.picture || page !== prevState.page){
      this.getPictures(page,picture)
      }}

getPictures=async(page,picture)=>{
  const APIKEY='27705684-ea6ff4282bc06d8fe5ddb5326'
    const URL=`https://pixabay.com/api/?q=${picture}&page=${page}&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=12`
  await fetch(URL).then(response=>{
    this.setState({status:"pending"})
    return response.json()}).then(pictures=>{
     this.setState(prevState=>({
      searchedPictures:[...prevState.searchedPictures,...pictures.hits],
      status:"resolved"}))})

}

  onMoreButton=()=>{
        const {page}= this.state;
        this.setState({page: page +1})
      }
  
  handleSubmit=(searchData)=>{
    this.setState({picture: searchData, page:1,searchedPictures:[]})}

  render(){ 
    const {handleSubmit,onMoreButton}=this;
   const {searchedPictures,status}= this.state;
   return (<><SearchBar onSubmit={handleSubmit}/>
    <ImageGallery 
    status={status}
    searchedPictures={searchedPictures}/>
    {status==="resolved" && <Button
      type='button' 
      onClick={onMoreButton}
      title='Load more'/>}
      </>)}
}
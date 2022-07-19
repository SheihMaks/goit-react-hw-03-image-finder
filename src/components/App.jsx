import React from "react";
import { ToastContainer,toast } from 'react-toastify';
import { SearchBar } from "./SearchBarApp/Searchbar";
import { ImageGallery } from "./ImageGalleryApp/ImageGallery";
import { Button } from "./ButtonLoadMore/Button";
import * as PictureService from "Service/API";

export class App extends React.Component {
  state={
    status:'idle',
    query:'',
    searchedPictures:[],
    page:1,
    total:'',
    totalHits:'',
  }

  componentDidUpdate=(prevProps,prevState)=>{
    const {page,query}=this.state;
    if(query !== prevState.query || page !== prevState.page){
      this.getPictures(page,query)
      }}

getPictures=async(page,query)=>{
  if(!query) return;
  this.setState({status:"pending"})
  try {
  const pictures=await PictureService.fetchPictures(page,query);
  console.log(pictures)
  this.setState(prevState=>({
    searchedPictures:[...prevState.searchedPictures,...pictures.hits],
    total:pictures.total,
    totalHits:pictures.totalHits}))} catch { toast.warn('Error')} finally {
    this.setState({status:'resolved'})
      }
}

  onMoreButton=()=>{
        const {page}= this.state;
        this.setState({page: page +1})
      }
  
  handleSubmit=(searchData)=>{
    const {query}=this.state;
    if (query===searchData) return;
    if (searchData.trim()===''){
      return toast.warn('Enter Something fo search!')}
    this.setState({query: searchData, page:1,searchedPictures:[]})
  }

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
      <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
      </>)}
}
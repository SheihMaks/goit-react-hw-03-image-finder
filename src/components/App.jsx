import React from "react";
import { ToastContainer,toast } from 'react-toastify';
import { SearchBar } from "./SearchBarApp/Searchbar";
import { ImageGallery } from "./ImageGalleryApp/ImageGallery";
import { Button } from "./ButtonLoadMore/Button";
import { Modal } from "./ModalApp/Modal";
import * as PictureService from "Service/API";

export class App extends React.Component {
  state={
    status:'idle',
    picture:'',
    searchedPictures:[],
    page:1,
    total:'',
    totalHits:'',
    isOpen:false,
  }

  componentDidUpdate=(prevProps,prevState)=>{
    const {page,picture}=this.state;
    if(picture !== prevState.picture || page !== prevState.page){
      this.getPictures(page,picture)
      }}

getPictures=async(page,picture)=>{
  if(!picture){
    return}
  this.setState({status:"pending"})
  try {
 const pictures=await PictureService.fetchPictures(page,picture);
 if (pictures.hits.length===0){
  return toast.warn('Sorry, no results were found for your search')
 }
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
    if (searchData.trim()===''){
      return toast.warn('Enter Something fo search!')
      
    }
    this.setState({picture: searchData, page:1,searchedPictures:[]})}

  render(){ 
    const {handleSubmit,onMoreButton}=this;
   const {searchedPictures,status,isOpen}= this.state;
   return (<><SearchBar onSubmit={handleSubmit}/>
    <ImageGallery 
    status={status}
    searchedPictures={searchedPictures}/>
    {status==="resolved" && <Button
      type='button' 
      onClick={onMoreButton}
      title='Load more'/>}
       {isOpen && <Modal/>}
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
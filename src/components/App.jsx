import React from "react";
import {AppContainer} from './App.styled'
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
    totalHits:'',
    isVisibleBtn: false,
  }

  componentDidUpdate=(prevProps,prevState)=>{
    const {page,query}=this.state;
    if(query !== prevState.query || page !== prevState.page){
      this.getPictures(page,query)
      }}

getPictures=async(page,query)=>{
  this.setState({status:"pending",isVisibleBtn:false})
  try {
  const pictures=await PictureService.fetchPictures(page,query);
  this.showingButton(pictures)
  this.setState(prevState=>({
    searchedPictures:[...prevState.searchedPictures,...pictures.hits],
    totalHits:pictures.totalHits,
    }))} catch { toast.warn('Error')} finally {
    this.setState({status:'resolved'})
      }
}

showingButton=(pictures)=>{
  const {totalHits,page}= this.state;
  const {per_page}= PictureService.options;
  if (totalHits%per_page===0){
  let lastPage=totalHits/per_page
  pictures.hits.length>=per_page && page !==lastPage ?
  this.setState({isVisibleBtn:true}) : this.setState({isVisibleBtn:false})}
  else{pictures.hits.length>=per_page ?
  this.setState({isVisibleBtn:true}) : this.setState({isVisibleBtn:false})}}

  onMoreButton=()=>{
        const {page}= this.state;
        this.setState({page: page +1})
      }
  
  handleSubmit=(searchData)=>{
    const {query}=this.state;
    if (query===searchData && query !== '') return;
    if (searchData.trim()===''){
      return toast.warn('Enter Something fo search!')}
    this.setState({query: searchData, page:1,searchedPictures:[]})
  }

  render(){ 
    const {handleSubmit,onMoreButton}=this;
    const {searchedPictures,status,isVisibleBtn}= this.state;
    return (<AppContainer><SearchBar onSubmit={handleSubmit}/>
    <ImageGallery 
      status={status}
      searchedPictures={searchedPictures}/>
    {isVisibleBtn && <Button
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
      </AppContainer>)}
}
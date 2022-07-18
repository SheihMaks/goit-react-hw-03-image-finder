import React from "react";
import { SearchBarContainer,SearchForm,SearchFormInput,SearchFormButton } from "./SearchBar.styled";

export class SearchBar extends React.Component{
    state={
        searchPicture:''
    }

    
    onInputSearch=(e)=>{
        
this.setState({searchPicture:e.currentTarget.value})
    }

    onClickSearch=(e)=>{
        e.preventDefault()
        this.props.onSubmit(this.state.searchPicture)
    }
    render(){
        
        return(
            <SearchBarContainer>
<SearchForm onSubmit={this.onClickSearch}>
<SearchFormButton
type='submit'
></SearchFormButton>
<SearchFormInput
type='text'
name='name'
onChange={this.onInputSearch}
value={this.state.picture}
/>
</SearchForm>
            </SearchBarContainer>
        )
    }
}
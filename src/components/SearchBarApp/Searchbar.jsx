import React from "react";
import { SearchBarContainer,SearchForm,SearchFormInput } from "./SearchBar.styled";

export class SearchBar extends React.Component{
    state={
        picture:''
    }
    render(){
        return(
            <SearchBarContainer>
<SearchForm>
    <SearchFormInput/>
</SearchForm>
            </SearchBarContainer>
        )
    }
}
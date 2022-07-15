import React from "react";
import { SearchBarContainer,SearchForm,SearchFormInput,SearchFormButton } from "./SearchBar.styled";

export class SearchBar extends React.Component{
    state={
        picture:''
    }
    render(){
        return(
            <SearchBarContainer>
<SearchForm>
<SearchFormButton></SearchFormButton><SearchFormInput/>
</SearchForm>
            </SearchBarContainer>
        )
    }
}
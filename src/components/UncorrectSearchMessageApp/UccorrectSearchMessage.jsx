import {SearchMessageContainer, SearchMessage} from './UncorrectSearchMessage.styled'

export const UncorrectSearchMessage=({message})=>{
    return (<SearchMessageContainer><SearchMessage>{message}</SearchMessage></SearchMessageContainer> )
}
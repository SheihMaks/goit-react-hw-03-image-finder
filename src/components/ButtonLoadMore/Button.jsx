import { ButtonLoad } from "./Button.styled"

export const Button=({title,onClick})=>{
    return (<ButtonLoad onClick={onClick}>{title}</ButtonLoad>)
}
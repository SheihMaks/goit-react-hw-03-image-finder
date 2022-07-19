import styled from "styled-components";

export const ImageGalleryList=styled.ul`
display: grid;

  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin: 10px auto;
  padding: 0;
  list-style: none;
  margin-right:25px;`
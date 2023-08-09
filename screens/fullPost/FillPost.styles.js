import styled from "styled-components/native";

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`

const PostTitle = styled.Text`
  font-size: 20px;
  margin-bottom: 20px;
  text-align: left;
  font-weight: bold;
`

export const S = {PostImage, PostText, PostTitle}
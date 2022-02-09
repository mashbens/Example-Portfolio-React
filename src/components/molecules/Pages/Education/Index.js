import React from 'react'
import { Label } from '../../../atoms/Label'
import { Paragraf } from '../../../atoms/Paragraf'
import { Subtitle } from '../../../atoms/Subtitle'
import { TitleSmall } from '../../../atoms/Title'
class Education extends React.Component {
  constructor(props){
    super()

  }
  render () {
  return(
      <div className='container'>
        <TitleSmall>EDUCATION</TitleSmall>
        <Subtitle>UNIVERSITAS INDONESIA<Label>December 2021 - Present</Label></Subtitle>
          <Paragraf>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</Paragraf>

        <Subtitle>SMAN 7 DEPOK <Label>December 2020 - July 2021</Label></Subtitle>
          <Paragraf>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Paragraf>
      </div>  
    )
  }
}
export default Education
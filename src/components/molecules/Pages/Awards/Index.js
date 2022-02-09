import React from 'react'
import { Paragraf } from '../../../atoms/Paragraf'
import { TitleSmall } from '../../../atoms/Title'
import { GiAchievement } from 'react-icons/gi';
import { Icons } from '../../../atoms/Icons';
import { List, ListItem } from '../../../atoms/List/Index';


class Awards extends React.Component {
  constructor(props){
    super()

  }
  render () {
  return(
      <div className='container'>
        <TitleSmall>Awards</TitleSmall>
          <List>
            <ListItem>
              <Icons><GiAchievement /></Icons>
              <Paragraf>Menang Piala president Junior Programmer</Paragraf>
            </ListItem>
            <ListItem>
              <Icons><GiAchievement /></Icons>
              <Paragraf>Lorem Ipsum is simply dummy text of the printing and typese</Paragraf>
            </ListItem>
            <ListItem>
              <Icons><GiAchievement /></Icons>
              <Paragraf>Lorem Ipsum is simply dummy textnd </Paragraf>
            </ListItem>
          </List>
        
      </div>  
    )
  }
}
export default Awards
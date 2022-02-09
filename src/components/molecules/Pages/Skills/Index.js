import React from 'react'
import { Paragraf } from '../../../atoms/Paragraf'
import { TitleSmall } from '../../../atoms/Title'
import { FcApproval } from 'react-icons/fc';
import { Icons } from '../../../atoms/Icons';
import { List, ListItem } from '../../../atoms/List/Index';

class Skills extends React.Component {
  constructor(props){
    super()

  }
  render () {
  return(
      <div className='container'>
        <TitleSmall>Skills</TitleSmall>
          <List>
            <ListItem>
              <Icons><FcApproval /></Icons>
              <Paragraf>HTML</Paragraf>
            </ListItem>
            <ListItem>
              <Icons><FcApproval /></Icons>
              <Paragraf>HTML</Paragraf>
            </ListItem>
          </List>  
      </div>  
    )
  }
}
export default Skills
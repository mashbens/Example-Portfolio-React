import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { TitleLarge } from '../../../atoms/Title'
import { Icons, IconsLink } from '../../../atoms/Icons'
import { Color } from '../../../atoms/Styles';
import { Paragraf } from '../../../atoms/Paragraf';
import { Block } from '../../../atoms/Block';

const About = () => {
    return(
        <div>
          <TitleLarge>ARIF<Color>BUDIMAN</Color></TitleLarge>
          <Block>+6281212313 <Color>arif123123@gmail.com </Color></Block>

              <Paragraf>I'm Lorem Ipsum. Fictional person for preview purposes :) I'm working with newest front-end frameworks like Angular, React and Vue. What you are seeing now is portfolio template from sjehq. If you like this portfolio template, make sure to the repository to make it more recognizable for other users</Paragraf>
              <br /><br/>
              <Paragraf>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paragraf>
              <br />
              <br />
            <Icons>
              <IconsLink
              rel='noreferrer' 
              href='https://github.com/' 
              target='_blank'>   
                <AiFillGithub />
              </IconsLink>
              <IconsLink         
              rel='noreferrer' 
              href='https://github.com/' 
              target='_blank'>   
                <AiFillLinkedin />
              </IconsLink>     
            </Icons>
        </div>
    )
}


export default About
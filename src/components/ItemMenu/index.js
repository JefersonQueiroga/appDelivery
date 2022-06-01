import react from 'react'
import {Text,Image} from 'react-native'
import { Container,Description} from './styles'
import file from '../../images/file.png'

export default function ItemMenu(){
   return(
      <Container>
         <Image source={file}/>
         <Description>
            <Text>Item 1</Text>
            <Text>Item 1</Text>
            <Text>Item 1</Text>

         </Description>
      </Container>
   )
}
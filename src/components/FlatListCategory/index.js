import react from 'react'
import { FlatList } from 'react-native';
import ItemCategory from '../ItemCategory';
import { Container } from './styles';

const DATA = [
   {
     id: '1',
     title: 'Destaque',
   },
   {
     id: '2',
     title: 'Á La Carte',
   },
   {
     id: '3',
     title: 'Executivos',
   },
   {
     id: '4',
     title: 'Hamburguer',
   },
   {
     id: '5',
     title: 'Pizza',
   },
   {
     id: '6',
     title: 'Sobremessa',
   },
 ];

 
export default function FlatListCategory(){
   return(
      <Container>   
         <FlatList horizontal data={DATA} 
           showsHorizontalScrollIndicator={false}
            renderItem={({item})=>  <ItemCategory title={item.title} /> } 
            keyExtractor={item => item.id} />
      </Container>
   )
}
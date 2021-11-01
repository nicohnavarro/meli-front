import React from 'react'
import { RouteComponentProps } from 'react-router';
import Loader from '../components/Common/Loader';
import Toast from '../components/Common/Toast';
import ItemsListBox from '../components/Items/ItemListBox';
import { useItemsList } from '../hooks/useItemsList';


const SearchResults:React.FC<RouteComponentProps> = (props) => {
  const query = props.location.state as string;
  const limit = 4;
  const [loading,itemslist,error] = useItemsList(query,limit);
  return (
    <>
     {loading ?
      <Loader/> :
      itemslist ? 
      <ItemsListBox items={itemslist?.items}  categories={itemslist?.categories}/> : error ?
      <Toast title="Ocurrio un error!" message={error.message}/> :
      <Toast title="Lo sentimos!" message="No se encontraron resultados"/>
    } 
    </>
  )
}

export default SearchResults

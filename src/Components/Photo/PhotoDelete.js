import React from 'react'
import styles from './PhotoDelete.module.css'
import useFetch from '../../Hooks/useFetch'
import { PHOTO_DELETE } from '../../Api'

const PhotoDelete = ({ id }) => {
   const { loading, request } = useFetch();

   async function handleDelete() {
      const confirm = window.confirm('Deseja mesmo deletar esta foto?');
      if (confirm) {
         const { url, options } = PHOTO_DELETE(id);
         const { response } = await request(url, options);
         console.log(response);
         if (response.ok) window.location.reload();
      }
   }

   return (
      <>
         {loading ? (
            <button className={styles.delete} disabled>Deletando...</button>
         ) : (
            <button className={styles.delete} onClick={handleDelete}>Deletar</button>
         )}

      </>
   )
}

export default PhotoDelete

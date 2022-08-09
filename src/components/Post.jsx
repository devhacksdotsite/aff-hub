import { useEffect, useState } from 'react';

// components
import { PostDetails } from './PostDetails';

// hooks
import { UseFetch } from '../hooks/UseFetch';


export const Post = (props) => {
  const { 
    id,
    name,
    desc,
    img 
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [initLoad, setInitialLoad] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
    setInitialLoad(false);
  }
  const openModal = () => {
    setIsOpen(true);
    setInitialLoad(true);
  }

  const { data, loading } = UseFetch([{
    path: `/api/posts/${ id }?populate[products][populate]=product_image`,
    name: 'products'
  }], initLoad);

  return (
    <>
      <div 
        onClick={ () => openModal(id) }
        className="cursor-pointer bg-white hover:bg-slate-200 md:max-w-sm h-56 border-2 p-6 flex transition-all ease-in-out duration-100 shadow-sm"
    >
          <img src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png" alt="image placeholder" />
      </div>

      <PostDetails 
        isOpen={ isOpen }
        open={ openModal }
        close={ closeModal }
        post={ { id, name, desc, img } }
        products={ data.products?.data.attributes.products.data || null }
        loading={ loading }
      />
    </>
  );
}

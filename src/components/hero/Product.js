import React from 'react';
import { useLoaderData } from 'react-router-dom';
import StarRateIcon from '@mui/icons-material/StarRate';

const Products = () => {
    const data = useLoaderData()
    const productData = data.data;
  return (
    <div className='max-w-screen-2xl mx-auto grid grid-cols-4 gap-10 px-4'>
        {productData.map((item)=> (
                <div key={item.id} className='flex flex-col gap-4 bg-white h-auto border-[1px] border-gray-200 py-9 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative '>
                    <div className='w-full h-auto flex items-center justify-center'>
                       <img className='w-52 h-64 object-contain' src={item.image} alt='ProductImage' />
                       <span className='text-xs capitalize italic absolute top-2 right-2 text-gray-500'>
                         {item.category}
                       </span>
                    </div>
                    <div className='px-4'> 
                        <div className='flex items-center justify-between'>
                            <h2 className='font-titleFont tracking-wide text-lg text-amazon_blue font-medium'>{item.title.substring(0, 20)}</h2>
                            <p className='text-sm text-gray-600 font-semibold'>
                                ${item.price}
                            </p>
                        </div>
                        <div>
                            <p className='text-sm mb-1'>{item.description.substring(0, 80)}...</p>
                            <div className='text-yellow-500'>
                                <StarRateIcon />
                                <StarRateIcon />
                                <StarRateIcon />
                                <StarRateIcon />
                                <StarRateIcon />
                            </div>
                            <button className='w-full bg-gradient-to-tr from-yellow-400 to-yellow-200 hover:from-yellow-300 hover:to-yoellow-600  font-titleFont font-medium text-base 
                            border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-b1 active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3'>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            ))
            
        }
    </div>
  )
}

export default Products
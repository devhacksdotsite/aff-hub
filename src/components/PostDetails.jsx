import { Fragment, useState, useEffect } from 'react';

// components
import { Dialog, Transition } from '@headlessui/react'
import Carousel from "react-elastic-carousel";
import { Product } from "./Product";

const breakPoints = [
    { width: 200, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 800, itemsToShow: 3 },
    { width: 1000, itemsToShow: 4 }
];

export const PostDetails = (props) => {
    const { 
        post,   
        isOpen,
        close, 
        products
    } = props;

    const [ exactProducts, setExactProducts ] = useState([]);
    const [ suggestedProducts, setSuggestedProducts ] = useState([]);

    useEffect(() => {
        if (products) {
            console.log('products', products);
            setExactProducts([...products.filter((product) => product.attributes.exact_item)]);
            setSuggestedProducts([...products.filter((product) => !product.attributes.exact_item)]);
        }
    }, [ products ]);

    return (
        <Transition appear show={ isOpen } as={ Fragment }>
            <Dialog as="div" className="relative z-10" onClose={ close }>
                <Transition.Child
                    as={ Fragment }
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-50" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                        as={ Fragment }
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="md:w-3/4 w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900 m-2"
                        >
                            { post.name }
                        </Dialog.Title>
                        <div className="w-full bg-red-500">
                            <img src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png" alt="placeholder image"/>
                        </div>

                        <div className="mt-2">
                            <p className="text-sm text-gray-500">
                                { post.desc }
                            </p>
                        </div>

                        <div>

                        { exactProducts.length > 0 && (
                            <div className="mt-6">
                                <p className="text-lg font-semibold my-3">Products:</p>

                                <Carousel breakPoints={ breakPoints }>
                                { exactProducts && exactProducts.map((product, idx) => (
                                    <Product key={ idx } data={ product } />
                                )) }
                                </Carousel>
                            </div> 
                        ) }

                        { suggestedProducts.length > 0 && (
                            <div className="mt-6">
                                <p className="text-lg font-semibold my-3">Related Products:</p>

                                <Carousel breakPoints={ breakPoints }>
                                { suggestedProducts && suggestedProducts.map((product, idx) => (
                                    <Product key={ idx } data={ product } />
                                )) }
                                </Carousel>
                            </div>  
                        ) }
                        </div>

                        <div className="mt-6">
                            <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={ close }
                            >
                            Close
                            </button>
                        </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
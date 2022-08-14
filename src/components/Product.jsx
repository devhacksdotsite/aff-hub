const { REACT_APP_STRAPI_API } = process.env;
export const Product = (props) => {
    const { data } = props;

    return (
        <div className="w-5/6 h-56 m-auto overflow-y-hidden flex flex-column justify-center">
            { data.attributes?.product_image.data ? ( 
                <a className="w-full" href={ data.attributes?.slug } target="_blank">
                    <img className="w-full h-full object-cover" src={`${ REACT_APP_STRAPI_API }${ data.attributes?.product_image.data.attributes.formats.small.url }`} alt={ data.attributes?.product_image.data.attributes.name  } /> 
                </a>
                ) : (
                    <img className="w-full object-cover" src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png" alt="image placeholder" /> 
                )  }
        </div>
    );
}
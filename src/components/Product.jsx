
export const Product = (props) => {
    const { data } = props;
    console.log(data);

    return (
        <div className="w-5/6 h-56 bg-red-300 m-auto overflow-y-hidden flex flex-column justify-center">
            <img className="" src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png" alt="product image" />
            { data.attributes.name }
        </div>
    );
}
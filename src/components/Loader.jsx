
export const Loader = (props) => {
    const { loading } = props;
    
    return (
        <div className={ `${ loading ? '' : 'invisible' } lds-roller` }><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    );
}
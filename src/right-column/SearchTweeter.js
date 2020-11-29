
const SearchBox = ({Icon, placholder}) => {
    return (
        <div className="Search">
            <div className="SearchButton GreyBack">
                <span className="GreyBack">{Icon}</span>
            </div>
            <input className="GreyBack" type="text" placeholder={placholder} />
        </div>
        
    );
}


export default SearchBox;

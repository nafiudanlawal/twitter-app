
const SearchBox = ({Icon, placholder}) => {
    return (
        <div className="Search">
            <div className="SearchButton">
                <button>{Icon}q</button>
            </div>
            <input type="text" placeholder={placholder} />
        </div>
        
    );
}


export default SearchBox;

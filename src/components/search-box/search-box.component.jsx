
const SearchBox = (props) => (
    <input
        className={props.className}
        type="search"
        placeholder={props.placeHolder}
        onChange={props.onChangeHandler}
    />
);
    


export default SearchBox;
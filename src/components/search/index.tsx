import './index.scss'

const Search = () => {
    return (
        <div>
            <form action="" className="search-bar" autoComplete="off">
                <input type="search" name="search" pattern=".*\S.*" required />
                    <button className="search-btn" type="submit">
                        <span>Search</span>
                    </button>
            </form>
        </div>
    );
}
export default Search;

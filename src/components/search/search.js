import './search.scss';

export const Search = () => {
    return (
        <div className="search element">
            <div className="search__top">
                <h1 className="search__title">Donations</h1>
            </div>
            <form className="search__bottom">
                <div className="search__input">
                        <button aria-label="button submit search"></button>
                        <input type="text" placeholder="Search" aria-label="Search input"/>
                </div>
                <div className="search__status">
                    <select className="search__select" aria-label="Search input" aria-describedby="search-select-description">
                        <option value="all" aria-describedby="search-select-all">All statuses</option>
                        <option value="option2" aria-describedby="search-select-option2">Option 2</option>
                        <option value="option3" aria-describedby="search-select-option3">Option 3</option>
                    </select>
                    <div className="aria-description">
                        <span id="search-select-all">Search all statuses including closed tickets</span>
                        <span id="search-select-option2">Search for option 2</span>
                        <span id="search-select-option3">Search for option 3</span>
                    </div>

                </div>
            </form>

        </div>
    )
}



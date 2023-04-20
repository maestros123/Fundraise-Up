import './search.scss';

export const Search = () => {
    return (
        <div className="search element">
            <div className="search__top">
                <p className="search__title">Donations</p>
            </div>
            <div className="search__bottom">
                <div className="search__input">
                    <form action="">
                        <button></button>
                        <input type="text" placeholder="Search"/>
                    </form>
                </div>
                <div className="search__status">
                    <select className="search__select">
                        <option>All statuses</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>
                </div>
            </div>

        </div>
    )
}



import { useState, useEffect } from 'react';

const SearchbarDropdown = (props) => {
    const { options, onInputChange } = props;
    const [displayDropdown, setDisplayDropdown] = useState(false);

    useEffect(() => {
        const hideDropdown = () => {
            setDisplayDropdown(false);
        };
        document.addEventListener('click', hideDropdown);

        return () => {
            document.removeEventListener('click', hideDropdown);
        };
    }, []);

    return (
        <div className="search-bar-dropdown" onClick={(e) => e.stopPropagation()}>
            <input
                id="search-bar"
                type="text"
                className="form-control"
                placeholder="Search"
                onChange={onInputChange}
                onFocus={() => setDisplayDropdown(true)}
            />
            {displayDropdown && (
                <ul id="results" className="list-group">
                    {options.map((option, index) => (
                        <button
                            key={index}
                            type="button"
                            className="list-group-item list-group-item-action"
                            onClick={() => {
                                onInputChange({ target: { value: option } });
                                setDisplayDropdown(false);
                            }}
                        >
                            {option}
                        </button>
                    ))}
                </ul>
            )}
        </div>
    );
};

const defaultOptions = [];
for (let i = 0; i < 10; i++) {
    defaultOptions.push(`option ${i}`);
    defaultOptions.push(`suggestion ${i}`);
    defaultOptions.push(`advice ${i}`);
}

function Search() {
    const [options, setOptions] = useState([]);
    const [displayDropdown, setDisplayDropdown] = useState(false); // added this line
    const onInputChange = (event) => {
        setOptions(
            defaultOptions.filter((option) => option.includes(event.target.value))
        );
    };

    return (
        <div className="App container mt-2 mb-3" onClick={() => setDisplayDropdown(false)}>
            <SearchbarDropdown options={options} onInputChange={onInputChange} />
            <br />
            <button className="btn btn-primary">Search</button>
        </div>
    );
}

export default Search;
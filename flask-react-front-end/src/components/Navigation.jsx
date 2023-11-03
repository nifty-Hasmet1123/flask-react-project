import "./Navigation.css";

const httpMethods = [ "GET", "POST", "PUT", "DELETE" ];

function Navigation({ setMethod }) {
    const changeMethod = (method) => {
        setMethod(method);
    };

    return (
        <nav id="item-nav">
            <ul className="items">
                {
                    httpMethods.map((item, idx) => {
                        return <NavigationList 
                                    key={ idx } 
                                    nav={ item } 
                                    methodChange={ () => changeMethod(item) }
                                />
                    })
                }
            </ul>
        </nav>
    );
};

function NavigationList({ nav, methodChange }) {
    return (
        <li className="item-list">
            <button type="button" onClick={ methodChange }> { nav }</button>
        </li>
    );
};

export default Navigation;
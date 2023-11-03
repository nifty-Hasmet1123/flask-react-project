export default function Container(props) {
    return (
        <div>
            { !!props.currentMethod && <h1>Current Method is: { props.currentMethod }</h1> }
            { props.children }
        </div>
    );
};
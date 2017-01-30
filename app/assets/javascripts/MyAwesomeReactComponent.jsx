import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
};

let square = x => x * x;
let add = (a, b) => a + b;
let pi = () => 3.1415;

console.log(square(5));
console.log(add(3, 4));
console.log(pi());


const MyAwesomeReactComponent = () => (
    <div>
        <RaisedButton label="Default" style={style} />
        <RaisedButton label="Primary" primary={true} style={style} />
        <RaisedButton label={String(square(5))} secondary={true} style={style} />
        <RaisedButton label="Disabled" disabled={true} style={style} />
        <br />
        <br />
        <RaisedButton label="Full width" fullWidth={true} />
    </div>
);

export default MyAwesomeReactComponent;
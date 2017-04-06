var React = require("react");
var Nav = require('Nav');


var Main = (props) => {
    return (
        <div>
            <Nav/>
            <div className="row">
                <div className="columns medium-6 small-centered large-4">
                    {props.children}
                </div>
            </div>
        </div>
    );  
} 


module.exports = Main;
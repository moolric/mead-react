var React = require("react");
var {Link} = require('react-router');


var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>    
            <ol>
                <li><Link to="/?location=Philidelphia">Philadelphia, PA</Link></li>
                <li><Link to="/?location=Rio">Rio, Brazil</Link></li>
            </ol>
        </div>
    )  
} 


module.exports = Examples;
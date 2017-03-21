var React = require("react");

// var WeatherMessage = React.createClass({
//     render: function() {
//         var {location, temp} = this.props;
//         //var location = this.props.location;
//         //var temp = this.props.temp;
//         return (
//             <div>
//                 <p>The weather is {location} is {temp} degrees!</p>
//             </div>
//         );
//     }
// });

// var WeatherMessage = (props) => {
//     var {location, temp} = props;
//     return (
//         <div>
//             <p>The weather is {location} is {temp} degrees!</p>
//         </div>
//     );
// };

var WeatherMessage = ({location, temp}) => {
    return (
        <div>
            <p>The weather is {location} is {temp} degrees!</p>
        </div>
    );
};

module.exports = WeatherMessage;

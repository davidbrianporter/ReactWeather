var React = require('react');

var About = (props) => {
    return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather app built with React. I have made this for the React Web Developer course on Udemy</p>
      <p>Hwere are some of the technologies employed:</p>
      <ul>
        <li>
          <a href="http://facebook.github.io/react">React</a> - This was the JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map's web service to pull in city temperatures.
        </li>
      </ul>
    </div>
    )
  };

module.exports = About;

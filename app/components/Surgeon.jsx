var React = require('react');

module.exports= React.createClass({

    render:function(){
        return(
            <div className="divList">
                <ul id="list">
                    <li className="displayList">
                        <img src="img_avatar.png"/>
                    <h3>{this.props.surgeon.surgeon_first + " " + this.props.surgeon.surgeon_last }</h3>
                    <p> {"Surgeon ID: "+this.props.surgeon.surgeon_ID}</p>
                    <p>{"Surgeon Specialty: "+this.props.surgeon.surgeon_specialty}</p>
                </li>
            </ul>
        </div>
        )
    }
})


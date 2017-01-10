import React from 'react';

class Blank extends React.Component {

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }

    componentDidMount(){
        $('body').addClass('gray-bg');
    }

    componentWillUnmount(){
        $('body').removeClass('gray-bg');
    }
}

export default Blank
import React, {Component} from 'react';
import Dramalist from './dramaList';
// import axios from 'axios';

class drama extends Component{
    state = {
        drama_s:[]
    }

    componentDidMount(){
        fetch('http://localhost:3002/drama')
        .then(res => res.json())
        .then( data => {
            this.setState({
                drama_s: data
            })
            console.log(this.state.drama_s)
        })
        // .catch(console.log)
        // console.log(this.state.drama_s)
    }

    render(){
        return(
            <div>
                <div className="body">
                    <Dramalist drama_s={this.state.drama_s} />
                </div>
             </div>
        )
    }
}

export default drama;
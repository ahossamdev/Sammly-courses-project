import React, { Component } from 'react';
import cogoToast from 'cogo-toast';
import axios from 'axios';
import './comments.css'

export default class AddComment extends Component {

  constructor(props){
    super(props);
   
    this.onChangeContent = this.onChangeContent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        content: '',
        upvotes: 0,
        downvotes: 0
    }
  }
  
  onChangeContent(e){
      this.setState({
          content : e.target.value
      });
  }

   onSubmit(e){
     e.preventDefault();
     const comment = {
         content : this.state.content,
     }
      const jwt = sessionStorage.getItem("jwt-token");
      if(jwt === null){
        console.log('not logged in');
        const { hide } = cogoToast.warn('Click to login & comment', {
          onClick: () => {
            hide();
            window.location = '/login';
          },
        });
      }
      else {
      const headers = { headers: {
        "Accept": "application/json",
        "Content-type": "application/json",
        "auth-header": jwt,
        }
      }
      axios.post('http://localhost:5000/api/comments/add', comment, headers)
        .then(res => { 
          const json = { type: 'comment' };
          json.data = res.data;
          console.log(json);
          this.props.actions.send(JSON.stringify(json));
          this.setState({content : ''})
          
        })
        .catch(err => cogoToast.error('Failed adding comment, please try again!', { hideAfter : 5 })
        .then(() => this.setState({content : ''})));
      }
    }
   
  render() {
    return (
      <div>
      <h2 className='h3C'>Add a Comment</h2>
      <form onSubmit={this.onSubmit} >
          <div className="form-group">
            <textarea rows="5"
                required
                className="form-control my-3"
                value={this.state.content}
                placeholder="Type a comment"
                onChange={this.onChangeContent}>
            </textarea>
          </div>
          <div className="form-group" align="right">
            <input type="submit"
                className="btn btn-dark"
                value="Post Comment">
            </input>
          </div>
      </form>
      </div>
    );
  }
}

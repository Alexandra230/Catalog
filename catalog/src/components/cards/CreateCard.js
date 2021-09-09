import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCard } from '../../store/actions/cardActions';
class CreateCard extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     file: null,
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  // }
  state = {
    //image: '',
    title: '',
    content: '',
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
      //file: URL.createObjectURL(e.target.files[0]),
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.createCard(this.state);
    this.props.history.push('/');
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create a new card</h5>

          {/* <div className="input-field">
            <label htmlFor="file"></label>
            <input type="file" id="file" onChange={this.handleChange} />
            <img src={this.state.file} className="img-thumbnail" />
          </div> */}

          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="content">Content </label>
            <textarea
              id="content"
              className="materiallize-textarea"
              onChange={this.handleChange}></textarea>
          </div>

          <div className="input-field">
            <button className="btn info lighten-1">Create</button>
          </div>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createCard: (card) => dispatch(createCard(card)),
  };
};
export default connect(null, mapDispatchToProps)(CreateCard);

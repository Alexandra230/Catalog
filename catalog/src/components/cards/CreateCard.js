import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createCard } from '../../store/actions/cardActions';

class CreateCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };

    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img),
      });
    }
  };
  state = {
    image: '',
    title: '',
    content: '',
    cost: '',
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
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create a new card</h5>

          <div className="input-field">
            <img className="img-fluid" src={this.state.image} />
            <p>Select Image</p>
            <input type="file" name="myImage" onChange={this.onImageChange} />
          </div>

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
            <label htmlFor="cost">Cost</label>
            <input type="text" id="cost" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <button className="btn info lighten-1">Create</button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createCard: (card) => dispatch(createCard(card)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateCard);

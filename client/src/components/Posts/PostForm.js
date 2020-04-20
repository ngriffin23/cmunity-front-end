import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';


const PostForm = ({ addPost }) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    
    return (
        <div className="post-form">
        <div className="header bg-primary p">
          <h3>New Discussion...</h3>
        </div> 
        <form className="form my-1" onSubmit={e => {
            e.preventDefault();
            addPost({ title, text });
            setTitle('');
            setText('');
        }}>
        <textarea
            name="title"
            cols="20"
            rows="1"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}>
          </textarea>
          
          <textarea
            name="text"
            cols="30"
            rows="5"
            placeholder="What are your thoughts?"
            value={text}
            onChange={e => setText(e.target.value)}>
            </textarea>
          <input type="submit" className="btn btn-night my-1" value="Submit" />
        </form>
      </div>
    )
}

PostForm.propTypes = {
addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);

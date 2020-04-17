import React, { Fragment, useEffect} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../layout/Spinner/Spinner';
import PostItem from '../Posts/PostItem';
import { getPosts } from '../../actions/post';


const Posts = ({ getPosts, post: { posts, loading } }) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);
    
    return loading ? <Spinner /> : 
        <Fragment>
            <p className='lead'>
            <i className='fas fa-user'></i> Welcome to CMUNITY
            </p>
            <h4 className='large text-primary'>Discussions</h4>
            {/* PostForm */}
            <div className='posts'>
                {posts.map(post => (
                    <PostItem key={post._id} post={post} />
                ))}
            </div>
        </Fragment>;
};

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);

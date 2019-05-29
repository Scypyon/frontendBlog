import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "./store/actions/postsAction";

import Posts from "./components/Posts";

function App({ fetchPosts, posts, isFetching }) {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);
  return (
    <>
      {isFetching ? (
        <div>Wczytuję dane</div>
      ) : (
        posts.map(post => <Posts key={post.id} post={post} />)
      )}
    </>
  );
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  error: state.posts.error,
  isFetching: state.posts.isFetching
});
const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

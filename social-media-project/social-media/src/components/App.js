import React from 'react';
import { connect } from 'react-redux';
import propType from 'prop-types';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { fetchPost } from '../actions/posts';
import { Home, Navbar, Page404, Login, Signup } from './';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPost());
  }

  render() {
    const { posts } = this.props;
    // console.log('PROPS', this.props);
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return <Home {...props} posts={posts} />;
              }}
            />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToprops(state) {
  return {
    posts: state.posts,
  };
}

App.propType = {
  posts: propType.array.isRequired,
};
export default connect(mapStateToprops)(App);

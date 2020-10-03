import React from 'react';
import { connect } from 'react-redux';
import propType from 'prop-types';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { fetchPost } from '../actions/posts';
import { PostsList, Navbar } from './';

const Login = () => <div>Login</div>;
const Signup = () => <div>Signup</div>;
const Home = () => <div>Home</div>;

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
          {/* <PostsList posts={posts} /> */}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
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

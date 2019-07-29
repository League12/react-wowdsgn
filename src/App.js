import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import FooterBar from './Components/FooterBar';

class App extends React.Component {
  render() {
    return (
        <div>
          {
            this.props.children
          }

          {
              this.props.isShowFooterBar ?
                  <FooterBar />
                  : null
          }

        </div>
    );
  }
}

let mapState2Props = function(state) {
    return {
        isShowFooterBar: state.isShowFooterBar
    }
};

export default connect(mapState2Props)(App);

import { connect } from 'react-redux';
import Chatroom from 'src/components/Chatroom';
import { wsConnect } from 'src/actions';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  wsConnect: () => {
    console.log('je veux me connecter au websocket');
    dispatch(wsConnect());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);

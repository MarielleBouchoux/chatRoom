import { connect } from 'react-redux';
import Message from 'src/components/Messages/Message';
import { getIsMine } from 'src/selectors';

const mapStateToProps = (state, ownProps) => ({
  // ici on va factoriser le fait de savoir si la personne connectée est l'auteur du msg
  // il s'agit d'un traitement du state => on passe cette fonction dans un selector
  isMine: getIsMine(ownProps.author, state.pseudo),
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Message);

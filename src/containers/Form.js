import { connect } from 'react-redux';
import Form from 'src/components/Form';
import { sendMessage, changeInputValue } from 'src/actions';

const mapStateToProps = (state) => ({
  inputValue: state.newMessage,
});

// fonction qui va nous aider à faire correspondre les fonctions
// qui vont modifier le state avec les props du composant connecté
// mapDispatchToProps prend la fonction dispatch du store en paramètre
const mapDispatchToProps = (dispatch) => ({
  onFormSubmit: () => {
    // on prépare l'action qu'on va dispatch
    // une action c'est un objet
    // avec obligatoirement une propriété "type"
    // WS modifie addMessage pour sendMessage
    const action = sendMessage();
    dispatch(action);
  },
  onChangeInputValue: (value) => {
    const action = changeInputValue(value);
    // on dispatch l'action => on doit arriver dans le reducer => onglet Redux du DevTool
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

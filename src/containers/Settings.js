import { connect } from 'react-redux';
import Settings from 'src/components/Settings';
import { toggleSettings, login } from 'src/actions';

// connecter le composant Settings en lecture du state
const mapStateToProps = (state) => ({
  isOpen: state.openSettings,
});

// permettre au composant connecter du modifier le state
const mapDispatchToProps = (dispatch) => ({
  onClickToggler: () => {
    // on prépare l'action qu'on va dispatch
    // une action c'est un objet
    // avec obligatoirement une propriété "type"
    const action = toggleSettings();
    dispatch(action);
  },
  onFormSubmit: () => {
    // console.log('je veux me connecter', login());
    dispatch(login());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

// ne pas oublier d'utiliser le container à la place du composant!

import { connect } from 'react-redux';
import Field from 'src/components/Field';
import { changeValue } from 'src/actions';


// on peut passer des props à l'instanciation d'un container
// ici <Fields /> dans settings
// ces props seront disponibles en 2e paramère des fonctions mapStateToProps et mapDispatchToProps
// par convention on nomme ce paramètre "ownProps" => les props du container
const mapStateToProps = (state, ownProps) => ({
  // on vient lire en dynamique (avec les crochets) soit la propriété "email"
  // soit la propriété "password" du state
  // l'astuce ici, c'est de faire correspondre la props "name" du container
  // avec la propriété du state
  value: state[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChangeValue: (value) => {
    // modification de state => dispatch d'action
    // ici on veut passer la value jusqu'à notre reducer
    // on la passe à l'action creator
    const action = changeValue(value, ownProps.name);
    dispatch(action);
    // dispatch(changeValue());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Field);

// ne pas oublier d'utiliser le container à la place du composant!

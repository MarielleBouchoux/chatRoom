import { connect } from 'react-redux';
import Messages from 'src/components/Messages';

const mapStateToProps = (state) => ({
  messages: state.messages,
});

const mapDispatchToProps = () => ({});

const componentToConnect = connect(mapStateToProps, mapDispatchToProps);

const connectedComponent = componentToConnect(Messages);

export default connectedComponent;

// il faut préparer le container, c'est-à-dire utiliser la fonction connect
// pour connecter le dumb component
// connect renvoie une fonction, donc on peut exécuter cette fonction directement après
// connect prend mapStatetoProps et mapDispatchToProps en argument
// la fonction renvoyer par connect prend le composant à connecter en argument
// on oublie d'exporter le tout

// version courte
// 1ere execution de connect (qui renvoit une fonction)
// puis execute la fonction directement derrière

// export default connect(mapStateToProps, mapDispatchToProps)(Messages);

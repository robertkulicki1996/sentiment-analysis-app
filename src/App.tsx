import MainView from "./views/MainView/MainView";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ToastContainer } from 'react-toastify';
// import { ApolloProvider } from '@apollo/client';
// import { apolloClient } from "./api/apolloClient";

import './styles/index.scss';

function App() {
  return (
    <LanguageProvider>
      <MainView />
      <ToastContainer />
    </LanguageProvider>
  );
}


// const App = () => (
//   <ApolloProvider client={apolloClient}>
//     <LanguageProvider>
//       <MainView />
//       <ToastContainer />
//     </LanguageProvider>
//   </ApolloProvider>
// );

export default App;
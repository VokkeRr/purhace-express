import React from 'react';
import styles from './App.module.css';
import PurchasesList from './components/PurchasesList/PurchasesList';
import PurchaseProvider from './components/PurchaseProvider/PurchaseProvider';


function App() {
  return (
    <div>
      <PurchaseProvider>
        <PurchasesList/>
      </PurchaseProvider>
    </div>
  );
}

export default App;

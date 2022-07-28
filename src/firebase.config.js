import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyD4eiu7ZVf5nnE_1JWqEf3FMy6XIzo4GaI",
    authDomain: "resturentapp-43cbd.firebaseapp.com",
    databaseURL: "https://resturentapp-43cbd-default-rtdb.firebaseio.com",
    projectId: "resturentapp-43cbd",
    storageBucket: "resturentapp-43cbd.appspot.com",
    messagingSenderId: "482496762587",
    appId: "1:482496762587:web:11c4ee5440e6123db0f2fe"
  };
  
  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

export {app,firestore,storage};
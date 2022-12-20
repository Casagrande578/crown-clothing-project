import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {

  apiKey: "AIzaSyCrDXQ1rEkopiUKIz2EsCqZvMMvOVs6eQA",

  authDomain: "crwn-cloth-db-ea1c5.firebaseapp.com",

  projectId: "crwn-cloth-db-ea1c5",

  storageBucket: "crwn-cloth-db-ea1c5.appspot.com",

  messagingSenderId: "394358201420",

  appId: "1:394358201420:web:bebdf50d0f5ec0471568e9"

};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);

export const db =getFirestore();

export const createUserDocumentFromAuth = async (userAuth)=>{
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date()
  
  try{
    await setDoc(userDocRef,{
      displayName,
      email,
      createdAt})
    } catch(error){
      console.log('error creating the user', error.message)
    }
  }
};


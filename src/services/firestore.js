import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, getDoc, query, where, doc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZpujHxpfARg_8etW735CiUhHWKIDzaCE",
  authDomain: "ecommerce-coderjaus.firebaseapp.com",
  projectId: "ecommerce-coderjaus",
  storageBucket: "ecommerce-coderjaus.appspot.com",
  messagingSenderId: "315235444072",
  appId: "1:315235444072:web:64bf124697aa21bbd322dd"
};

const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore(appFirebase);

export async function getItems() {
    const productsCollection = collection(appFirestore, 'productos');
    const productsSnapshot = await getDocs(productsCollection);

    let respuesta = productsSnapshot.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id

        }
    })
    return respuesta;
}

export async function traerProductosDeCategoria(categoryId){
    
    const productsCollection = collection(appFirestore, "productos");
    const q = query(productsCollection, where("category", "==", categoryId));
    const productsSnapshot = await getDocs(q);
    let respuesta = productsSnapshot.docs.map( doc => { 
        return {
            ...doc.data(),
            id: doc.id
        }
    })

    return respuesta
}

export async function traerUnProducto(productId){
    const docref = doc(appFirestore, "productos", productId);
    const docSnapshot = await getDoc(docref);

    return { id: docSnapshot.id, ...docSnapshot.data()};
}   

export default appFirestore;
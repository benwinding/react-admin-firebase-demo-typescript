import * as React from "react";
import { PostList, PostShow, PostCreate, PostEdit } from "./posts";
import { Admin, Resource } from "react-admin";
import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
  RAFirebaseOptions
} from "react-admin-firebase";
//import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const config = require("./FIREBASE_CONFIG.js").firebaseConfig;

const options: RAFirebaseOptions = {
  logging: true,
  // rootRef: "default",
  watch: ["videos"]
};
const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);

class App extends React.Component {
  render() {
    return (
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource
          name="videos"
          list={PostList}
          show={PostShow}
          create={PostCreate}
          edit={PostEdit}
        />
      </Admin>
    );
  }
}

export default App;

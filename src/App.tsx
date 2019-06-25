import * as React from "react";
import { PostList, PostShow, PostCreate, PostEdit } from "./posts";
import { Admin, Resource } from "react-admin";
import {
  FirebaseRealTimeSaga,
  FirebaseDataProvider,
  FirebaseAuthProvider,
  RAFirebaseOptions
} from "react-admin-firebase";

const config = require("./FIREBASE_CONFIG.js").firebaseConfig;

const options: RAFirebaseOptions = {
  logging: true,
  rootRef: 'root_collection/some_document',
  watch: ["posts"]
}
const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);
const firebaseRealtime = FirebaseRealTimeSaga(dataProvider, options);

class App extends React.Component {
  render() {
    return (
      <Admin
        customSagas={[firebaseRealtime]}
        dataProvider={dataProvider}
        authProvider={authProvider}
      >
        <Resource
          name="posts"
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

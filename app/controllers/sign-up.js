import Ember from 'ember';


export default Ember.Controller.extend({

  firebaseApp: Ember.inject.service(),
  actions: {
      signUp(email, password) {
        let controller = this;
        const auth = this.get('firebaseApp').auth();
        // console.log(email)
        auth.createUserWithEmailAndPassword(email, password).then((userResponse) => {
          const user = this.store.createRecord('user', {
            id: userResponse.uid,
            email: userResponse.email,
            password: userResponse.password,
            name: userResponse.name
          });
          return user.save();
        });
        controller.transitionToRoute('sign-in');
      }
    }
});

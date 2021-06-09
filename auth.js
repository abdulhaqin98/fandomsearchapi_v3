const modalOpen = document.getElementById('loginBtn');
const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
// const modalClose = document.getElementById('close-modal');
modalOpen.addEventListener('click', (evt) => {
  loginModal.show();
  return false;
});

// btnClose.addEventListener('click', (evt) => {
//   myModal.hide();
//   return false;

// listen for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ', user);
    document.getElementById('loginBtn').style.display = 'none';
    document.getElementById('logoutBtn').style.display = 'inline-block';
  } else {
    console.log('user logged out');
    document.getElementById('loginBtn').style.display = 'inline-block';
    document.getElementById('logoutBtn').style.display = 'none';
  }
})

// Firebase login

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);
    // close the signup modal & reset form

    const modal = new bootstrap.Modal(document.getElementById('loginModal'), {});
    loginModal.hide();
    loginForm.reset();
  });

});

// logout
const logout = document.querySelector('#logoutBtn');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
});
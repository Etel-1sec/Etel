// Password toggle functionality
document.querySelectorAll('.password-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const input = toggle.previousElementSibling;
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        toggle.classList.toggle('fa-eye-slash');
    });
});

// Form validation for register
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
        
        if (password.value !== confirmPassword.value) {
            e.preventDefault();
            alert('Passwords do not match!');
        }
    });
}

// Form validation for login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        
        if (!email.value || !password.value) {
            e.preventDefault();
            alert('Please fill in all fields!');
        }
    });
}
// Scroll to Top Button
const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Firebase Configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Google Sign-In
const googleProvider = new firebase.auth.GoogleAuthProvider();
document.getElementById("googleSignup").addEventListener("click", () => {
  auth.signInWithPopup(googleProvider)
    .then((result) => {
      console.log("Google Sign-In Success:", result.user);
    })
    .catch((error) => {
      console.error("Google Sign-In Error:", error);
    });
});

// Facebook Sign-In
const facebookProvider = new firebase.auth.FacebookAuthProvider();
document.getElementById("facebookSignup").addEventListener("click", () => {
  auth.signInWithPopup(facebookProvider)
    .then((result) => {
      console.log("Facebook Sign-In Success:", result.user);
    })
    .catch((error) => {
      console.error("Facebook Sign-In Error:", error);
    });
});

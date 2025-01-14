import { createFormSignUp } from './App';
import { confirmUser } from './pages/sign-up';
import { createHomeContent } from './pages/home';

addEventListener("DOMContentLoaded", () => {
    createHomeContent()
    createFormSignUp()
    confirmUser()
})
import Axios from 'axios';

const BASE_URL = "http:localhost:5000/weatherapp";


// USER REGISTRATION WITH EMAIL
export const signUpWithGmail = async (gmail) => {
    try {
        const response = await Axios.post(`${BASE_URL}/signUp`, { gmail, type: 'ownapp' });
        return response.data;
    } catch (error) {
        throw new error('Error during Sign Up. Please Try Again');
    }
};

// USER LOGIN WITH EMAIL
export const getUserDetails = async (gmail) => {
    try {
        const response = await Axios.post(`${BASE_URL}/login`, { gmail, type: 'google'});
        return response.data;
    } catch (error) {
        throw new error('Error during Sign Up. Please Try Again');
    }
}

export const handleGoogleSignUp = async (token) => {
    try {
      const response = await Axios.post(`${API_URL}/auth/google`, {
        token,
      });
      return response.data;
    } catch (error) {
      console.error('Error during Google sign up:', error);
      throw new Error('Error during Google sign up. Please try again.');
    }
  };
  
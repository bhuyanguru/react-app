import * as Yup from 'yup'

export const signUpSchema = Yup.object({
     username:Yup.string().min(5).required('Please enter your name'),
    password:Yup.string().min(10).required('Please enter your password')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
});

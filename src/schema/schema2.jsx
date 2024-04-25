import * as Yup from 'yup'

export const signUpSchema2 = Yup.object({
    firstName:Yup.string().min(5).required('Please enter your first name'),
    lastName:Yup.string().min(5).required('Please enter Last name'),
    totalPrice:Yup.number().required('Put the price'),
    depositPaid:Yup.string().min(3).required('Mention yes or no'),
    checkin:Yup.string().required('Enter check in time'),
    checkout:Yup.string().required('Enter check Out time'),
});

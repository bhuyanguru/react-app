import * as Yup from 'yup'

export const partialUpdateScema = Yup.object({
    firstName:Yup.string().min(5).required('Please enter your first name'),
    lastName:Yup.string().min(5).required('Please enter Last name'),
});
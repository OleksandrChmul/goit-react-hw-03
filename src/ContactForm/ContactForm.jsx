import { Formik, Form, Field, ErrorMessage } from 'formik'
import { nanoid } from 'nanoid'
import { useId } from 'react'
import * as Yup from 'yup'
import css from './ContactForm.module.css'
const ContactForm = ({ onSubmit }) => {
	const usernameId = useId()
	const usertelId = useId()
	const initialValues = { username: '', number: '' }
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={Yup.object({
				username: Yup.string()
					.min(3, 'Minimum 3 characters')
					.max(50, 'Maximum 50 characters')
					.required('Required field'),
				number: Yup.string()
					.min(3, 'Minimum 3 characters')
					.max(50, 'Maximum 50 characters')
					.required('Required field'),
			})}
			onSubmit={(values, { resetForm }) => {
				const newContact = {
					id: nanoid(),
					name: values.username,
					number: values.number,
				}
				onSubmit(newContact)
				resetForm()
			}}
		>
			<Form className={css.form}>
				<label className={css.label} htmlFor={usernameId}>
					Name
				</label>
				<Field
					className='inputField'
					id={usernameId}
					type='text'
					name='username'
				/>
				<ErrorMessage className='error' name='username' component='p' />
				<label className={css.label} htmlFor={usertelId}>
					Number
				</label>
				<Field className='inputField' id={usertelId} type='tel' name='number' />
				<ErrorMessage className='error' name='number' component='p' />
				<button className={css.submitBtn} type='submit'>
					Add Contact
				</button>
			</Form>
		</Formik>
	)
}

export default ContactForm

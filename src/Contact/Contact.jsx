import { ImPhone, ImUser } from 'react-icons/im'
import css from './Contact.module.css'
export default function Contact({ contact: { name, id, number }, onDelete }) {
	return (
		<li className={css.contact}>
			<p>
				<ImUser />
				{name}
			</p>
			<p>
				<ImPhone />
				{number}
			</p>
			<button
				className={css.deleteBtn}
				onClick={() => {
					onDelete(id)
				}}
			>
				Delete
			</button>
		</li>
	)
}

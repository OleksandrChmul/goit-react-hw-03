import Contact from '../Contact/Contact'

export default function ContactList({ contacts, onDelete }) {
	return (
		<ul className='contactList'>
			{contacts.map(contact => (
				<Contact key={contact.id} contact={contact} onDelete={onDelete} />
			))}
		</ul>
	)
}

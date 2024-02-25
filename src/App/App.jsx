import './App.modele.css'
import { useState, useEffect } from 'react'
import ContactList from '../ContactList/ContactList'
import SearchBox from '../SearchBox/SearchBox'
import ContactForm from '../ContactForm/ContactForm'

function App() {
	const [contacts, setContacts] = useState(() => {
		const storedContacts = localStorage.getItem('contacts')
		return storedContacts
			? JSON.parse(storedContacts)
			: [
					{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
					{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
					{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
					{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
			  ]
	})
	const [filter, setFilter] = useState('')

	useEffect(() => {
		const storedContacts = localStorage.getItem('contacts')
		if (storedContacts) {
			setContacts(JSON.parse(storedContacts))
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('contacts', JSON.stringify(contacts))
	}, [contacts])

	const filteredContacts = contacts.filter(
		contact =>
			contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
	)

	const handleFilterChange = event => {
		setFilter(event.target.value)
	}

	const handleSubmit = newContact => {
		setContacts(contacts => {
			return [...contacts, newContact]
		}) // Додаємо новий контакт до списку контактів
	}

	const deleteContact = contactId => {
		setContacts(contacts => {
			return contacts.filter(contact => contact.id !== contactId)
		})
	}

	return (
		<div className='container'>
			<h1>Phonebook</h1>
			<ContactForm onSubmit={handleSubmit} />
			<SearchBox value={filter} onChange={handleFilterChange} />
			<ContactList contacts={filteredContacts} onDelete={deleteContact} />
		</div>
	)
}

export default App

import { useContext } from 'react'
import { UserContext } from './App'

function FormTest() {
	const { user, setUser } = useContext(UserContext)
	const handleFirstName = (event) => {
		setUser(event.target.value)
	}
	const handleSubmit = (event) => {
		event.preventDefault()
		alert(`Form Submitted. Thanks, ${user}!`)
	}
	return (
		<>
			<h1>Hello {user}</h1>
			<form onSubmit={handleSubmit}>
				<label>
					First Name: &nbsp;
					<input type='text' value={user} onChange={handleFirstName} />
				</label>
				<button type='submit'>Submit</button>
			</form>
		</>
	)
}

export default FormTest

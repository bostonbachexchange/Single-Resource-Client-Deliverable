import RepertoirezIndex from "./repertoirez/RepertoirezIndex"
const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	const { msgAlert } = props

	return (
		<>
			<h2>Repertoire List</h2>
			<RepertoirezIndex msgAlert={ msgAlert }/>
		</>
	)
}

export default Home

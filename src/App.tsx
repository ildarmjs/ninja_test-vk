import CatFact from './components/cat-fact/CatFact'
import AgeForm from './components/age-form/AgeForm'
const App = () => {
	return (
		<div className='flex flex-col justify-center items-center h-[100vh] bg-black/90 text-white w-full'>
			<CatFact />
			<AgeForm />
		</div>
	)
}

export default App

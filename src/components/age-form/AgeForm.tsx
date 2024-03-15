import { FC } from 'react'
import { useAgeForm } from '../../hooks/useAgeForm'

const AgeForm: FC = () => {
	const { age, errors, handleSubmit, loading, onSubmit, register } =
		useAgeForm()

	return (
		<form onSubmit={handleSubmit(onSubmit)} className=''>
			<div className='flex items-center gap-4 mb-[60px]'>
				<button
					type='submit'
					className='bg-teal-600 w-[200px] py-3 rounded-xl text-lg transition-all hover:bg-teal-700'
				>
					Отправить
				</button>
				<div className='relative'>
					<input
						className='bg-transparent text-white rounded-md px-3 py-3 w-[400px] border-teal-500 border focus:border-teal-500 '
						type='text'
						{...register('name', {
							required: true,
							pattern: /^[A-Za-z]*$/
						})}
					/>
					{errors.name && errors.name.type === 'required' && (
						<p className='text-red-400 absolute l-0 b-0'>
							Это поле обязательно к заполнению
						</p>
					)}
					{errors.name && errors.name.type === 'pattern' && (
						<p className='text-red-400 absolute l-0 b-0'>
							Разрешены только буквы
						</p>
					)}
				</div>
			</div>
			<div className='text-center'>
				{loading && <div className='text-[28px]'>Загрузка...</div>}
				{age !== null && !loading && (
					<p className='text-[28px]'>Возраст: {age}</p>
				)}
			</div>
		</form>
	)
}

export default AgeForm

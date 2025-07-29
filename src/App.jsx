import gbvLogo from './assets/gbv_logo.png';

const App = ({title= "Gender Based Violence Classification Model",
   subTitle="A machine learning algorithm that classifies tweets about GBV into one of five categories: Sexual Violence, Emotional Violence, Harmful Traditional Practices, Physical Violence and Economic Violence"}) => {
  return (
  <div>
    <section className="flex min-h-screen justify-center align-center bg-pink-400 mb-5">
        <img src={gbvLogo} alt="Logo" className="w-32 h-32 mb-5 mt-10" />
        <div className='flex justify-center align-center flex-col items-center mb-5'>
            <div className='text-center p-20'>
                <h1 className='text-4xl font-extrabold text-white sm:text-white md:text-6xl'>{title}</h1>
                <p className='my-4 text-3xl text-white'>{subTitle}</p>
            </div>
            <input
                type="text"
                placeholder="Enter a tweet to classify"
                className="w-96 p-5 rounded-lg text-black text-center font-semibold"
            />
            <button className="mt-4 px-6 py-2 bg-white text-pink-500 font-semibold rounded-lg hover:bg-pink-200 transition-colors">
                Classify
            </button>
        </div>
    </section>
  </div>
  )
}

export default App
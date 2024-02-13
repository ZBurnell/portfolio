import React, { useEffect, useState } from 'react';
import Project from './components/project.jsx';
import Footer from './components/footer';
import Header from './components/header';


function App() {
	const [useEffect] = useState(null);


  return (
	<>
		<button
			type="button"
			onClick={handleThemeSwitch}
			className="fixed p-2 z-10 right-20 top-4 bg-violet-300 dark:bg-orange-300 text-lg p-1 rounded-md"
		>
		</button>
		<div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
			<div className="max-w-5xl w-11/12 mx-auto">
				<Header />
				<Project />
				<Footer />
			</div>
		</div>
	 </>
  )
}

export default App
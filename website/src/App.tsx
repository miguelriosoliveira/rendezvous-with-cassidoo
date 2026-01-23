import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Questions from './pages/Questions';
import QuestionDetail from './pages/QuestionDetail';
import './App.css'

function App() {
	return (
		<Router basename="/rendezvous-with-cassidoo">
			<div className="app">
				<nav className="navbar">
					<div className="container">
						<Link to="/" className="logo">
							<span className="logo-icon">📧</span>
							<span className="logo-text">Rendezvous with Cassidoo</span>
						</Link>
						<div className="nav-links">
							<Link to="/">Home</Link>
							<Link to="/questions">Questions</Link>
							<a
								href="https://buttondown.email/cassidoo"
								target="_blank"
								rel="noopener noreferrer"
							>
								Newsletter
							</a>
						</div>
					</div>
				</nav>

				<main className="main-content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/questions" element={<Questions />} />
						<Route path="/questions/:questionId" element={<QuestionDetail />} />
					</Routes>
				</main>

				<footer className="footer">
					<div className="container">
						<p>
							Solutions by{' '}
							<a
								href="https://github.com/miguelriosoliveira/rendezvous-with-cassidoo"
								target="_blank"
								rel="noopener noreferrer"
							>
								miguelriosoliveira
							</a>
						</p>
						<p>
							Original newsletter by{' '}
							<a href="https://cassidoo.co/" target="_blank" rel="noopener noreferrer">
								Cassidy Williams
							</a>
						</p>
					</div>
				</footer>
			</div>
		</Router>
	);
}

export default App

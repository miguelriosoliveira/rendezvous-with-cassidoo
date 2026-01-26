import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Questions from './pages/Questions';
import QuestionDetail from './pages/QuestionDetail';
import './App.css'

function getRedirectPath(): string | null {
	const redirect = sessionStorage.redirect;
	if (redirect) {
		delete sessionStorage.redirect;
		const basename = '/rendezvous-with-cassidoo';
		return redirect.startsWith(basename) ? redirect.slice(basename.length) || '/' : redirect;
	}
	return null;
}

function HandleRedirect() {
	const redirectRef = useRef<string | null>(getRedirectPath());
	const navigate = useNavigate();

	useEffect(() => {
		const redirectPath = redirectRef.current;
		if (!redirectPath) return;
		redirectRef.current = null;
		console.log('Redirecting to:', redirectPath);
		navigate(redirectPath, { replace: true });
	}, [navigate]);

	return null;
}

function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
	}, [pathname]);

	return null;
}

function App() {
	return (
		<Router basename="/rendezvous-with-cassidoo">
			<div className="app">
				<HandleRedirect />
				<ScrollToTop />
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

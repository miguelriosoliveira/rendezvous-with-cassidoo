import { Link } from 'react-router-dom';
import './Home.css';

import questionsData from '../data/questions.json';
import type { Question } from '../types/Question';

const questions = questionsData as Question[];

function Home() {
	const totalQuestions = questions.length;
	const years = Array.from(new Set(questions.map((q) => q.year))).sort();
	const latestQuestion = questions[questions.length - 1];

	return (
		<div className="home">
			<section className="hero">
				<div className="container">
					<h1 className="hero-title">
						Rendezvous with Cassidoo
						<br />
						<span className="hero-subtitle">Interview Question Solutions</span>
					</h1>
					<p className="hero-description">
						A comprehensive collection of solutions to the weekly interview questions from{' '}
						<a
							href="https://buttondown.email/cassidoo"
							target="_blank"
							rel="noopener noreferrer"
						>
							Cassidy Williams' newsletter
						</a>
						. All solutions are implemented in TypeScript with comprehensive tests.
					</p>
					<div className="hero-actions">
						<Link to="/questions" className="btn btn-primary">
							Browse Questions
						</Link>
						<a
							href="https://github.com/miguelriosoliveira/rendezvous-with-cassidoo"
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-secondary"
						>
							View on GitHub
						</a>
					</div>
				</div>
			</section>

			<section className="stats">
				<div className="container">
					<div className="stats-grid">
						<div className="stat-card">
							<div className="stat-value">{totalQuestions}</div>
							<div className="stat-label">Questions Solved</div>
						</div>
						<div className="stat-card">
							<div className="stat-value">{years.length}</div>
							<div className="stat-label">Years Covered</div>
						</div>
						<div className="stat-card">
							<div className="stat-value">{years[0]}</div>
							<div className="stat-label">Started</div>
						</div>
						<div className="stat-card">
							<div className="stat-value">#{latestQuestion.number}</div>
							<div className="stat-label">Latest Issue</div>
						</div>
					</div>
				</div>
			</section>

			<section className="about">
				<div className="container">
					<h2>About This Collection</h2>
					<p>
						Each week, Cassidy Williams sends out a newsletter called "rendezvous with cassidoo"
						featuring an interview question. This repository contains TypeScript solutions to these
						questions, complete with:
					</p>
					<ul className="features-list">
						<li>✅ Well-documented TypeScript implementations</li>
						<li>✅ Comprehensive unit tests using Vitest</li>
						<li>✅ Clean, readable code following best practices</li>
						<li>✅ Original question descriptions and examples</li>
					</ul>
					<p>
						Started with{' '}
						<a
							href="https://buttondown.email/cassidoo/archive/we-are-what-we-repeatedly-do-excellence-then-is/"
							target="_blank"
							rel="noopener noreferrer"
						>
							issue #176
						</a>{' '}
						and continuing strong!
					</p>
				</div>
			</section>
		</div>
	);
}

export default Home;

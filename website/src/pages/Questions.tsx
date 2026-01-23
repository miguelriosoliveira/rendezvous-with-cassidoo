import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './Questions.css';

import questionsData from '../data/questions.json';
import type { Question } from '../types/Question';

const questions = questionsData as Question[];

function Questions() {
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedYear, setSelectedYear] = useState<string>('all');

	const years = useMemo(() => {
		return Array.from(new Set(questions.map((q) => q.year))).sort((a, b) => b - a);
	}, []);

	const filteredQuestions = useMemo(() => {
		return questions.filter((q) => {
			const matchesSearch =
				searchTerm === '' ||
				q.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				q.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
				q.number.toString().includes(searchTerm);

			const matchesYear = selectedYear === 'all' || q.year.toString() === selectedYear;

			return matchesSearch && matchesYear;
		});
	}, [searchTerm, selectedYear]);

	return (
		<div className="questions-page">
			<div className="container">
				<div className="page-header">
					<h1>All Questions</h1>
					<p className="page-description">
						Browse through {questions.length} interview questions and their TypeScript solutions
					</p>
				</div>

				<div className="filters">
					<div className="search-box">
						<input
							type="text"
							placeholder="Search by name, description, or number..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="search-input"
						/>
					</div>
					<div className="filter-group">
						<label htmlFor="year-filter">Filter by year:</label>
						<select
							id="year-filter"
							value={selectedYear}
							onChange={(e) => setSelectedYear(e.target.value)}
							className="year-select"
						>
							<option value="all">All Years</option>
							{years.map((year) => (
								<option key={year} value={year}>
									{year}
								</option>
							))}
						</select>
					</div>
				</div>

				<div className="results-count">
					Showing {filteredQuestions.length} of {questions.length} questions
				</div>

				<div className="questions-grid">
					{filteredQuestions.map((question) => (
						<Link
							key={question.id}
							to={`/questions/${question.id}`}
							className="question-card"
						>
							<div className="question-header">
								<span className="question-number">#{question.number}</span>
								<span className="question-year">{question.year}</span>
							</div>
							<h3 className="question-title">{question.title || question.name}</h3>
							{question.description && (
								<div className="question-description">
									<ReactMarkdown>
										{question.description.length > 150
											? `${question.description.substring(0, 150)}...`
											: question.description}
									</ReactMarkdown>
								</div>
							)}
						</Link>
					))}
				</div>

				{filteredQuestions.length === 0 && (
					<div className="no-results">
						<p>No questions found matching your criteria.</p>
						<button onClick={() => { setSearchTerm(''); setSelectedYear('all'); }} className="btn btn-secondary">
							Clear Filters
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

export default Questions;

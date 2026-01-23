import { useParams, Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './QuestionDetail.css';

import questionsData from '../data/questions.json';
import type { Question } from '../types/Question';

const questions = questionsData as Question[];

function QuestionDetail() {
	const { questionId } = useParams<{ questionId: string }>();
	const question = questions.find((q) => q.id === questionId);
	const currentIndex = questions.findIndex((q) => q.id === questionId);

	if (!question) {
		return (
			<div className="question-detail">
				<div className="container">
					<div className="error-message">
						<h2>Question Not Found</h2>
						<p>The question you're looking for doesn't exist.</p>
						<Link to="/questions" className="btn btn-primary">
							Back to Questions
						</Link>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="question-detail">
			<div className="container">
				<div className="breadcrumb">
					<Link to="/">Home</Link>
					<span className="separator">/</span>
					<Link to="/questions">Questions</Link>
					<span className="separator">/</span>
					<span className="current">#{question.number}</span>
				</div>

				<div className="detail-header">
					<div className="detail-meta">
						<span className="badge">#{question.number}</span>
						<span className="badge">{question.year}</span>
					</div>
					<h1 className="detail-title">{question.title || question.name}</h1>
					{question.issueLink && (
						<a
							href={question.issueLink}
							target="_blank"
							rel="noopener noreferrer"
							className="newsletter-link"
						>
							📧 View Original Newsletter Issue
						</a>
					)}
				</div>

				<div className="detail-content">
					<section className="question-section">
						<h2>The Question</h2>
						{question.description && <p className="description">{question.description}</p>}

						{question.example && (
							<div className="example-section">
								<h3>Example:</h3>
								<pre className="example-code">{question.example}</pre>
							</div>
						)}
					</section>

					<section className="solution-section">
						<h2>Solution</h2>
						<div className="code-container">
							<SyntaxHighlighter
								language="typescript"
								style={vscDarkPlus}
								showLineNumbers
								customStyle={{
									margin: 0,
									borderRadius: '8px',
									fontSize: '14px',
								}}
							>
								{question.code}
							</SyntaxHighlighter>
						</div>
					</section>

					<section className="repo-section">
						<h3>View in Repository</h3>
						<p>
							<a
								href={`https://github.com/miguelriosoliveira/rendezvous-with-cassidoo/tree/main/${question.folderPath}`}
								target="_blank"
								rel="noopener noreferrer"
								className="repo-link"
							>
								View source code and tests on GitHub →
							</a>
						</p>
					</section>
				</div>

				<div className="navigation-buttons">
					{currentIndex > 0 && (
						<Link
							to={`/questions/${questions[currentIndex - 1].id}`}
							className="btn btn-secondary"
						>
							← Previous
						</Link>
					)}
					{currentIndex < questions.length - 1 && (
						<Link
							to={`/questions/${questions[currentIndex + 1].id}`}
							className="btn btn-secondary"
						>
							Next →
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}

export default QuestionDetail;

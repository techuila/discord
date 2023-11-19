import * as Sentry from '@sentry/react';
import Container from './components/Container';
import Background from './components/Background';

function App() {
	return (
		<>
			<Container>
				<Background />
			</Container>
		</>
	);
}

export default Sentry.withErrorBoundary(App, {
	fallback: () => <>Encountered an error!</>
});

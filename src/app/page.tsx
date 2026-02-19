import Card from '@/app/components/Card';
import content from '@/lib/content/home';
import Box from './components/Box';

const Home = () => {
	return (
		<>
			<Card
				content={content}
				active={null}
				heading={content.heading}
				subheading={content.subheading}
			/>
			<Box boxes={content.boxes} active={null} />
		</>
	);
};

export default Home;

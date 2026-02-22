import Card from '@/app/components/Card';
import content from '@/lib/content/home';
import Boxes from './components/Boxes';

const Home = () => {
	return (
		<>
			<Card
				content={content}
				active={null}
				heading={content.heading}
				subheading={content.subheading}
			/>
			<Boxes boxes={content.boxes} active={null} />
		</>
	);
};

export default Home;

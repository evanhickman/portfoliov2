import BoxContainer from '@/app/components/box/BoxContainer';
import CardContainer from '@/app/components/card/CardContainer';
import content from '@/lib/content/home';

const Home = () => {
	return (
		<>
			<CardContainer
				content={content}
				active={null}
				heading={content.heading}
				subheading={content.subheading}
			/>
			<BoxContainer boxes={content.boxes} active={null} />
		</>
	);
};

export default Home;

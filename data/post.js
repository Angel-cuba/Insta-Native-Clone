import { USERS } from './user';

export const POSTS = [
	{
		imageUrl:
			'https://res.cloudinary.com/dqaerysgb/image/upload/v1628020664/samples/animals/kitten-playing.gif',
		user: USERS[0].user,
		likes: 8743,
		caption: 'Train Ride to New York. 🗽🥰',
		profile_picture: USERS[0].image,
		comments: [
			{
				user: 'thefazt',
				comment: 'Wow dude! This is amazing',
			},
			{
				user: 'manhathan',
				comment: 'Hope to see you bro..., keep going. (¬‿¬)',
			},
		],
	},
	{
		imageUrl:
			'https://res.cloudinary.com/dqaerysgb/image/upload/v1628020663/samples/food/spices.jpg',
		user: USERS[1].user,
		likes: 3957,
		caption: 'Coming to this great traveel around the world. Train Ride to Scotland. 😂🚉',
		profile_picture: USERS[1].image,
		comments: [
			{
				user: 'monsterdeveloper',
				comment: 'yooooooo',
			},
			{
				user: 'dorian.developer',
				comment: 'Resting all day...',
			},
		],
	},
];

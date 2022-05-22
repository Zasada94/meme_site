import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MemeList from "./MemeList";
import FormAddMeme from "./FormAddMeme";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		maxWidth: 600,
		paddingTop: 20,
		[theme.breakpoints.down("sm")]: {
			paddingTop: 80,
		},
	},
}));

const Page = () => {
	const classes = useStyles();
	const hot = useSelector((state) => state.memes.hot);
	const regular = useSelector((state) => state.memes.regular);
	const favorites = useSelector((state) =>
		[...state.memes.hot, ...state.memes.regular].filter((meme) => meme.favorite)
	);

	return (
		<Container className={classes.root}>
			<Switch>
				<Route exact path="/">
					<Redirect to="/regular" />
				</Route>
				<Route exact path="/meme_site">
					<Redirect to="/regular" />
				</Route>
				<Route path="/regular">
					<MemeList array={regular} />
				</Route>

				<Route path="/hot">
					<Redirect to="/hot" />
					<MemeList array={hot} />
				</Route>

				<Route path="/favorites">
					<Redirect to="/favorites" />
					<MemeList array={favorites} />
				</Route>

				<Route path="/add_meme">
					<Redirect to="/add_meme" />
					<FormAddMeme />
				</Route>
				<Route path="*"></Route>
			</Switch>
		</Container>
	);
};

export default Page;

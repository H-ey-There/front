import React, {useEffect} from "react";
import Navbar from "../../components/navbar";
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import FeaturedPost from "../../components/community/featured-post";

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));

const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
];

export default function Community() {
    const classes = useStyles();

    useEffect(() => {
        // if (!sessionStorage.getItem("token")) {
        //     window.alert("로그인페이지로 이동합니다");
        //     window.location.href = "/login";
        // }
    }, []);


    return (
        <>
            <Navbar />
            <Container>
                <main>
                    <Grid container spacing={4}>
                        {featuredPosts.map((post) => (
                            <FeaturedPost key={post.title} post={post} />
                        ))}
                    </Grid>
                    <Grid container spacing={5} className={classes.mainGrid}>
                        {/*<Main title="From the firehose" posts={posts} />*/}

                    </Grid>
                </main>
            </Container>
        </>
    )
}

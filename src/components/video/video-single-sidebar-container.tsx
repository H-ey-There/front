import Grid from "@material-ui/core/Grid";

export default function VideoSingleSidebarContainer() {

    function VideoCard() {
        return (
            <div id="wrapper">
                <video width={`100%`}
                       controls
                       autoPlay={true}
                       muted src="#" poster="http://unsplash.it/250/150?gravity=center">
                    Your browser does not support the video tag.
                </video>
            </div>
        )
    }


    return (
        <Grid item xs={12} sm={3}>
            <div style={{
                width: '100%',
            }}>
                <h2>More...?</h2>
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
            <style>
{`
  #wrapper{
  position: relative
}
#wrapper video{
  position: relative;
  z-index: 100;
}
#wrapper img{
  position: absolute;
  display: block;
  z-index: 150;
  left: 10px;
  top: 10px;
}`}
            </style>
        </Grid>
    )
}
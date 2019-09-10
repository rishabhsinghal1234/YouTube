import React from 'react';
import VideoThumbnail from './VideoThumbnail';
import './VideoCategories.css';
import { Wordwrap } from './Functions'

var VideoThumbnailListTemp = ["https://i.ytimg.com/vi/r8afvvOGRe8/hqdefault.jpg", "https://images.news18.com/ibnlive/uploads/2014/01/fifa-wc-cup_1501getty_630.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2_Q82A9BJA3B1tMA-Y4fgwxNz3zCUtZ632dcj-0hqjxG4m-ie1g", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNqPR4rX0e7EN7GoL_3RFG8AO4ScU16MT9xELvbitsVsFHI0gn", "https://res.cloudinary.com/jerrick/image/upload/f_auto,fl_progressive,q_auto,c_fit,w_1100/bppbjscvoderxrkrm39h"];
var VideoTitleListTemp = ["How to make pastasdhf sjdfbjh agsdf asufbsbf shbf ashfb asdf shbfj asf adsjf j", "Football WC ", "Tom and jerry Show", "What if the earth loses oxygen", "The Cold War"];
var ChannelNameListTemp = ["Kitchen King", "EsFootbal", "WB Kids", "What if", "OverSimplified"];
var ViewsCountListTemp = ["253K views", "500K views", "100M views", "9M views", "6.4M views"];
var UploadTimeListTemp = ["6 hours ago", "8 hours ago", "3 years ago", "24 hours ago", "1 day ago"];

var VideoThumbnailList = [];
var VideoTitleList = [];
var ChannelNameList = [];
var ViewsCountList = [];
var UploadTimeList = [];

for (var i = 0; i < 5; i++) {
    //var temp=i;
    var temp = (Math.floor(Math.random() * 5));
    VideoThumbnailList[i] = VideoThumbnailListTemp[temp];
    VideoTitleList[i] = Wordwrap(VideoTitleListTemp[temp]);
    ChannelNameList[i] = ChannelNameListTemp[temp];
    ViewsCountList[i] = ViewsCountListTemp[temp];
    UploadTimeList[i] = UploadTimeListTemp[temp];
}
class DisplayVideos extends React.Component {
    state = {
        displayRight:"block",
        displayLeft:"none",
        right: 0,
        time : "0.7s ease-in-out"

    }
    RightSlider = () => {
        var CurrentState = this.state.right;
        if ((CurrentState) === 1150) {
            this.setState({
                displayRight: "none"
            })
        } else {
            var check = (CurrentState + 230 >= 1150) ? "hide" : "unhide"
            var NewState = CurrentState + 230;
            this.setState({
                right: NewState,
                displayRight: (check === "unhide") ? "block" : "none",
                displayLeft: "block"
            });
            console.log()
        }
    }
    LeftSlider = () => {
        var CurrentState = this.state.right;
        if (CurrentState === 0) {
            this.setState({
                displayLeft: "none"
            })
        } else {
            var check = (CurrentState - 230 <= 0) ? "hide" : "unhide"
            var NewState = CurrentState - 230;
            this.setState({
                right: NewState,
                displayLeft: (check === "unhide") ? "block" : "none",
                displayRight: "block"
            });
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="xyzcontainer">
                    <button className="VideoSlider SlideLeft fas fa-chevron-circle-left" onClick={this.LeftSlider} style={{display: this.state.displayLeft}}></button>
                    <div className="VideoCategory">
                        <div className="Videolist" style={{ right: this.state.right, transition: this.state.time}}>
                            <VideoThumbnail src={VideoThumbnailList[0]} VideoTitleList={VideoTitleList[0]} ChannelName={ChannelNameList[0]} ViewsCount={ViewsCountList[0]} UploadTime={UploadTimeList[0]} />
                            <VideoThumbnail src={VideoThumbnailList[1]} VideoTitleList={VideoTitleList[1]} ChannelName={ChannelNameList[1]} ViewsCount={ViewsCountList[1]} UploadTime={UploadTimeList[1]} />
                            <VideoThumbnail src={VideoThumbnailList[2]} VideoTitleList={VideoTitleList[2]} ChannelName={ChannelNameList[2]} ViewsCount={ViewsCountList[2]} UploadTime={UploadTimeList[2]} />
                            <VideoThumbnail src={VideoThumbnailList[3]} VideoTitleList={VideoTitleList[3]} ChannelName={ChannelNameList[3]} ViewsCount={ViewsCountList[3]} UploadTime={UploadTimeList[3]} />
                            <VideoThumbnail src={VideoThumbnailList[4]} VideoTitleList={VideoTitleList[4]} ChannelName={ChannelNameList[4]} ViewsCount={ViewsCountList[4]} UploadTime={UploadTimeList[4]} />
                            <VideoThumbnail src={VideoThumbnailList[0]} VideoTitleList={VideoTitleList[0]} ChannelName={ChannelNameList[0]} ViewsCount={ViewsCountList[0]} UploadTime={UploadTimeList[0]} />
                            <VideoThumbnail src={VideoThumbnailList[1]} VideoTitleList={VideoTitleList[1]} ChannelName={ChannelNameList[1]} ViewsCount={ViewsCountList[1]} UploadTime={UploadTimeList[1]} />
                            <VideoThumbnail src={VideoThumbnailList[2]} VideoTitleList={VideoTitleList[2]} ChannelName={ChannelNameList[2]} ViewsCount={ViewsCountList[2]} UploadTime={UploadTimeList[2]} />
                            <VideoThumbnail src={VideoThumbnailList[3]} VideoTitleList={VideoTitleList[3]} ChannelName={ChannelNameList[3]} ViewsCount={ViewsCountList[3]} UploadTime={UploadTimeList[3]} />
                        </div>
                    </div>
                    <button className="VideoSlider SlideRight fas fa-chevron-circle-right" onClick={this.RightSlider} style={{display: this.state.displayRight}}></button>
                </div>
                <hr />
            </React.Fragment>
        );
    }
}

export default DisplayVideos;


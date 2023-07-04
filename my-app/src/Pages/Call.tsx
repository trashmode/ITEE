import React, { useEffect } from 'react';
import './Call.css';
import VoxeetSDK from '@voxeet/voxeet-web-sdk';
import { Helmet } from 'react-helmet';
import CrossButton from '../Components/button';
import crossword from "../Components/cross.png";
import tictac from "../Components/tictac.jpg";
import sudoku from "../Components/sudoku.png";
import Backcolor from '../assets/Backcolor.svg'
import wordle from "../Components/wordle.png";

const Call = () => {
  useEffect(()=> {
    const script = document.createElement("script")
  
    script.src =
      "https://cdn.jsdelivr.net/npm/@voxeet/voxeet-web-sdk/dist/voxeet-sdk.js"
  
    document.body.appendChild(script)
  
    return () => {
      // clean up the script when the component in unmounted
      document.body.removeChild(script)
    }
  }, [])

  const initializeToken = () => {
    console.group("Step 1: Initialize the SDK");
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJkb2xieS5pbyIsImlhdCI6MTY4ODQ0MjE0NSwic3ViIjoiN3VwSkpSNmhhcmIyZl9BSUhjYzNkdz09IiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9DVVNUT01FUiJdLCJ0YXJnZXQiOiJzZXNzaW9uIiwib2lkIjoiMjk2YWRlOWMtMDMxNi00OGY1LTk1MmYtMDY1NTE0YTJlMDlmIiwiYWlkIjoiODk5MWVhMjEtODQ1OC00NjczLWE2ZDYtOGQwNTZjMjZhODU3IiwiYmlkIjoiOGEzNjk1OTg4OTAxN2JiYzAxODkwNWFiMjk2ZDIwZjAiLCJleHAiOjE2ODg1Mjg1NDV9.K7Xzg5KLMqQtB6BvqH0XcoH5qtN6S8jL_leoGFtt-ATu0m99oNWwLoMQYDctP-0n8SO2iUpp-eO0qlm_eLhVWg';
    // console.log(token)
    VoxeetSDK.initializeToken(token, () => new Promise((resolve) => resolve(token)));
    // shareMessage("Step 1: Web SDK initialized.");
    console.groupEnd();

    return token;
  }

  const openSession = async () => {
    console.group("Step 2: Open a Session");
    console.log(`Session Name: ${"session_1"}`);
    try {
        await VoxeetSDK.session.open({ name: "Hello" });
        // shareMessage("Step 2: Session opened.");
    } catch (error) {
        console.error(error);
        // shareMessage(`Error opening session: ${error}`);
    }
    console.groupEnd();
  }

  const createAndJoinConference = async () => {
    if (!VoxeetSDK.session.isOpen()) { await openSession(); };
    console.group("Step 3: Create and Join a Conference");
    console.log(`Conference Alias: ${"web-sdk-starter"}`);
    const joinOptions = {
        constraints: { audio: true, video: true }
    };
    const conferenceOptions = {
        alias: "web-sdk-starter"
    }
    try {
        const conference = await VoxeetSDK.conference.create(conferenceOptions);
        await VoxeetSDK.conference.join(conference, joinOptions);
        // shareMessage(`Step 3: Conference '${"conference 1"}' created and joined.`)
    } catch (error) {
        console.error(error);
    }
    console.groupEnd();
  };

  const handleConferenceFlow = () => {

    // Custom behavior for when there is a media stream added
    VoxeetSDK.conference.on("streamAdded", (participant, stream) => {
        console.log(`Stream Added for ${participant.id}`);
        console.log(`  Type: ${stream.type}`);
        console.log(`  Video Tracks: ${stream.getVideoTracks().length}`);

        if (stream.type === "Camera") {
            shareVideo(participant, stream);
        }
    });

    // Custom behavior for when there is a media stream updated which happens once an attendee starts sharing video
    // VoxeetSDK.conference.on("streamUpdated", (participant, stream) => {
    //     console.log(`Stream Updated for ${participant.id}`);
    //     console.log(`  Type: ${stream.type}`);
    //     console.log(`  Video Tracks: ${stream.getVideoTracks().length}`);
    //     if (stream.type === "Camera" && stream.getVideoTracks().length) {
    //         shareVideo(participant, stream);
    //     }
    // });
    // Custom behavior for when the app stops receiving a media stream for remote participants
    VoxeetSDK.conference.on("streamRemoved", (participant, stream) => {
      console.log(`Stream Removed for ${participant.id}`);
      const videoNode = document.getElementById(`video-${participant.id}`);
      if (videoNode) {
        videoNode!.parentNode!.removeChild(videoNode);
      }
    });

    // Custom behavior for when the participant has left the conference
    VoxeetSDK.conference.on("left", async () => {
        await VoxeetSDK.session.close();
        console.log("Session closed.");
    });
  }

  const shareVideo = (participant, stream) => {
    console.group("Step 4: Start and Share Video");

    let perspective = "self-view";
    if (VoxeetSDK.session.participant.id !== participant.id) {
        console.log("Adding media stream for remote user.");
        perspective = "remote-view";
    } else {
      console.log("Adding media stream for self user.");
    }

    let videoNode: HTMLVideoElement;
    if (document.getElementById(`video-${participant.id}`)) {
        videoNode = document.getElementById(`video-${participant.id}`) as HTMLVideoElement
        console.log("Video node already created for " + participant.id);
    } else {
        console.log(`Creating a video node: video-${participant.id}`);
        videoNode = document.createElement("video");
        videoNode.setAttribute("id", `video-${participant.id}`);
        videoNode.setAttribute("height", "300px");
        videoNode.setAttribute("width", "500px");
        // videoNode.setAttribute("")s

        videoNode.muted = true;         // Don't echo local audio
        videoNode.autoplay = true;      // Start right away
        videoNode.playsInline = true;   // Not full screen

        const videoContainer = document.getElementById(perspective);
        videoContainer!.lastElementChild!.replaceWith(videoNode);
    }

    videoNode!.srcObject = stream   
    //Navigator.   (videoNode, stream);
    // shareMessage(`Step 4: Video of participant '${participant.info.name}' started.`);
    console.groupEnd();
  }
  const main = async () => {
    console.log('main!!!!')
    const queryParams = new URLSearchParams(window.location.search);
    const name = queryParams.get("name") || "developer";
    const alias = queryParams.get("alias") || "web-sdk-starter";

    // Establish Real-time Communications by first initializing the Dolby.io Web SDK with credentials
    const token = await initializeToken();
    const refreshToken = async() => token;
    // Start a new session and connect to the Dolby.io platform establishing a client-server link
    await openSession();
    // When user clicks the Join button, start and join a conference for the given alias
        
        // Define custom behavior for activity that occurs during a video call
    handleConferenceFlow();
    await createAndJoinConference();
  }


  useEffect (() => {
    console.log('useEffect')
    main();
  })

  return (
    <div id='main' style={{flexDirection:"column"}}>
      <div className="sidebar">
        <div id='games'></div>
        <div id='video'>
          <div className="square">
            <div id="self-view"> 
                <p id="self-view-username"></p>
                <i className="display-1 bi bi-person-video position-relative"></i>
            </div>
          </div>
          <div className="square">
            <div id="remote-view"> 
              <p id="remote-view-username"></p>
              <i className="display-1 bi bi-person-video position-relative"></i>
            </div>
          </div>
        </div>
        <div id='util'></div>
      </div>
      <div className="content" >
        
      </div>
<div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div id="card-container" style={{ display: "flex", columnGap: "20px" }}>
                <iframe src="https://wordle-clone-bysubodh.netlify.app/" title="Wordle" style = {{width:"500px", height:"700px"}}></iframe>
                    <CrossButton
                        img={wordle}
                        gameTitle='Wordle'/>

                </div>
                <div>
                    <CrossButton
                        img={tictac}
                        gameTitle='Tic Tac Toe'
                    />
                </div>
                <div>
                    <CrossButton
                        img={sudoku}
                        gameTitle='Sudoku'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Call;
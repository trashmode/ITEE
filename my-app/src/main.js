const shareMessage = (message) => {
    document.getElementById("message").innerText = message;
}

/** 
 * Start by initializing the Web SDK with an access token.  This starter project
 * utilizes a helper function to pull the token from the query parameters in the URL.
 */
const initializeToken = () => {
    console.group("Step 1: Initialize the SDK");
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJkb2xieS5pbyIsImlhdCI6MTY4ODQ0MjE0NSwic3ViIjoiN3VwSkpSNmhhcmIyZl9BSUhjYzNkdz09IiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9DVVNUT01FUiJdLCJ0YXJnZXQiOiJzZXNzaW9uIiwib2lkIjoiMjk2YWRlOWMtMDMxNi00OGY1LTk1MmYtMDY1NTE0YTJlMDlmIiwiYWlkIjoiODk5MWVhMjEtODQ1OC00NjczLWE2ZDYtOGQwNTZjMjZhODU3IiwiYmlkIjoiOGEzNjk1OTg4OTAxN2JiYzAxODkwNWFiMjk2ZDIwZjAiLCJleHAiOjE2ODg1Mjg1NDV9.K7Xzg5KLMqQtB6BvqH0XcoH5qtN6S8jL_leoGFtt-ATu0m99oNWwLoMQYDctP-0n8SO2iUpp-eO0qlm_eLhVWg';
    // console.log(token)
    VoxeetSDK.initializeToken(token, () => new Promise((resolve) => resolve(token)));
    shareMessage("Step 1: Web SDK initialized.");
    console.groupEnd();

    return token;
}

/**
 * Start a session by establishing a communication link between this client application
 * and the Dolby.io Platform.  You need to provide the client name when establishing
 * a new session, often this is the name that will be used by the participant.  
 */
const openSession = async (sessionName) => {
    console.group("Step 2: Open a Session");
    console.log(`Session Name: ${sessionName}`);
    try {
        await VoxeetSDK.session.open({ name: sessionName });
        shareMessage("Step 2: Session opened.");
    } catch (error) {
        console.error(error);
        shareMessage(`Error opening session: ${error}`);
    }
    console.groupEnd();
}

/**
 * Bi-directional communications for multiple participants occurs in a conference.  Initially, 
 * the conference must be created before it can be joined.  The conference should be given a 
 * unique and meaningful alias to help identify it among multiple conferences in an account.
 * 
 * This should be in response to a user event so that they may approve media access to the
 * microphone and camera.
 */
const createAndJoinConference = async (conferenceAlias, participantName) => {
    if (!VoxeetSDK.session.isOpen()) { await openSession(participantName); };
    console.group("Step 3: Create and Join a Conference");
    console.log(`Conference Alias: ${conferenceAlias}`);
    const joinOptions = {
        constraints: { audio: true, video: true }
    };
    const conferenceOptions = {
        alias: conferenceAlias
    }
    try {
        const conference = await VoxeetSDK.conference.create(conferenceOptions);
        await VoxeetSDK.conference.join(conference, joinOptions);
        shareMessage(`Step 3: Conference '${conferenceAlias}' created and joined.`)
    } catch (error) {
        console.error(error);
    }
    console.groupEnd();
};

/**
 * The SDK will trigger server-generated events which we can respond to
 * for intended functionality.
 */
const handleConferenceFlow = () => {

    // Custom behavior for when there is a media stream added
    VoxeetSDK.conference.on("streamAdded", (participant, stream) => {
        console.log(`Stream Added for ${participant.info.name}`);
        console.log(`  Type: ${stream.type}`);
        console.log(`  Video Tracks: ${stream.getVideoTracks().length}`);

        if (stream.type === "Camera") {
            shareVideo(participant, stream);
        }
    });

    // Custom behavior for when there is a media stream updated which happens once an attendee starts sharing video
    VoxeetSDK.conference.on("streamUpdated", (participant, stream) => {
        console.log(`Stream Updated for ${participant.info.name}`);
        console.log(`  Type: ${stream.type}`);
        console.log(`  Video Tracks: ${stream.getVideoTracks().length}`);
        if (stream.type === "Camera" && stream.getVideoTracks().length) {
            shareVideo(participant, stream);
        }
    });

    // Custom behavior for when the app stops receiving a media stream for remote participants
    VoxeetSDK.conference.on("streamRemoved", (participant, stream) => {
        console.log(`Stream Removed for ${participant.info.name}`);
        const videoNode = document.getElementById(`video-${participant.id}`);
        if (videoNode) {
            videoNode.parentNode.removeChild(videoNode);
        }
    });

    // Custom behavior for when the participant has left the conference
    VoxeetSDK.conference.on("left", async () => {
        await VoxeetSDK.session.close();
        console.log("Session closed.");
    });
}

/**
 * When a new participant camera media stream is detected, we determine which
 * part of the user interface to update and create a video element that will
 * display the incoming stream.
 */
const shareVideo = (participant, stream) => {
    console.group("Step 4: Start and Share Video");

    let perspective = "self-view";
    if (VoxeetSDK.session.participant.id !== participant.id) {
        console.log("Adding media stream for remote user.");
        perspective = "remote-view";
    }

    let videoNode = document.getElementById(`video-${participant.id}`);
    if (videoNode) {
        console.log("Video node already created");
    } else {
        console.log(`Creating a video node: video-${participant.id}`);
        videoNode = document.createElement("video");

        videoNode.setAttribute("id", `video-${participant.id}`);
        videoNode.setAttribute("height", "100%");
        videoNode.setAttribute("width", "100%");

        videoNode.muted = true;         // Don't echo local audio
        videoNode.autoplay = true;      // Start right away
        videoNode.playsinline = true;   // Not full screen

        const videoContainer = document.getElementById(perspective);
        videoContainer.lastElementChild.replaceWith(videoNode);
        videoContainer.firstElementChild.innerText = participant.info.name;
    }

    navigator.attachMediaStream(videoNode, stream);
    shareMessage(`Step 4: Video of participant '${participant.info.name}' started.`);
    console.groupEnd();
}

/**
 * When the user decides to leave the conference you should stop sending the audio/video
 * stream.
 */
const leaveConference = async () => {
    console.group("Final Step: Leave the Conference");
    try {
        await VoxeetSDK.conference.leave();
        shareMessage("Getting Started Success: Conference has ended.")
    } catch (error) {
        console.error(error);
    }
    console.groupEnd();
}

const testFunc = async () => {
    console.group("Final Step: Leave the Conference");
    try {
        await VoxeetSDK.conference.leave();
        shareMessage("TEST button working")
    } catch (error) {
        console.error(error);
    }
    console.groupEnd();
}

const main = async () => {
    // Configure the application from query parameter values
    const queryParams = new URLSearchParams(window.location.search);
    const name = queryParams.get("name") || "developer";
    const alias = queryParams.get("alias") || "web-sdk-starter";

    // Establish Real-time Communications by first initializing the Dolby.io Web SDK with credentials
    const token = await initializeToken();
    const refreshToken = async() => token;
    // Start a new session and connect to the Dolby.io platform establishing a client-server link
    await openSession(name);
    // When user clicks the Join button, start and join a conference for the given alias
        
        // Define custom behavior for activity that occurs during a video call
    handleConferenceFlow();
    await createAndJoinConference(alias, name);

    // When user clicks the Invite button, generate a url to join the same conference
    document.getElementById("btn-invite").onclick = () => {
        console.group("Step 5: Invite a remote participant")
        const url = `https://developer.dolby.io/demos/comms-sdk-web-getting-started/index.html?token=${token}&alias=${alias}&name=guest`;
        console.log(`Invite a guest with URL: ${url}`);
        shareMessage(`Share the URL copied to your browser clipboard: ${url}`);
        navigator.clipboard.writeText(url);
        console.groupEnd();
    }

    // When user clicks the Leave button, end the conference
    document.getElementById("btn-leave").onclick = async () => {
        await leaveConference();
        console.log("Getting Started Guide complete, congratulations!");
    };

    document.getElementById("btn-test").onclick = async () => {
        await testFunc();
        console.log("hello this test is working");
    };
};

main();

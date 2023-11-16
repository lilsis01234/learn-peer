// import logo from './logo.svg';
import Peer from 'peerjs'
import './App.css';
import React, {useEffect, useState} from 'react'
import { useRef } from 'react';

function App() {
  const remoteVideoRef = useRef(null);
  const[peerId, setPeerId] = useState(null);

  useEffect(()=>{
    const peer = new Peer();
    peer.on('open', function (id){
      console.log('ty le id'+ id)
      setPeerId(id)
    })
  },[])

  const Call = (idEnRemote) =>{
    const peer = new Peer();
    var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
     getUserMedia ({audio:true, video:true}, function (mediaStream){
      const call = peer.call(idEnRemote, mediaStream)
      call.on('stream', function(remoteIdStream){

      })
    }
    )
  }

  return (
    <div className="App">
      <h1>Ton peer id est {peerId}</h1>
      <div>
        <video/>
      </div>
      <div>
        <video ref={remoteVideoRef}/>
      </div>
    </div>
  );
}

export default App;

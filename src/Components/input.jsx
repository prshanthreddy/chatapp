import React, { useState, useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
import { AuthContext } from '../context/AuthContext';
import { Timestamp, arrayUnion, updateDoc } from 'firebase/firestore';
import { v4 as uuid } from 'uuid';
import { doc } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { getDownloadURL, ref, uploadBytesResumable, } from 'firebase/storage';
import { serverTimestamp } from 'firebase/firestore';
import send from '../images/send-message.png';

const Input = () => {
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const updateChatWithMessage = async (downloadURL) => {
    let message = {
      id: uuid(),
      text,
      senderId: currentUser.uid,
      date: Timestamp.now(),
    };

    if (downloadURL) {
      message.file = downloadURL;
    }

    await updateDoc(doc(db, 'chats', data.chatId), {
      messages: arrayUnion(message),
    });
  };

  const handleSend = async () => {
    try {
      if (file) {
        const storageRef = ref(storage, uuid());
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          'state_changed',
          (snapshot) => {
            // Handle progress if needed
          },
          (error) => {
            console.error('Error uploading file:', error);
            // Handle error
          },
          async () => {
            try {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              await updateChatWithMessage(downloadURL);
            } catch (error) {
              console.error('Error getting download URL:', error);
              // Handle error
            }
          }
        );
      } else {
        await updateChatWithMessage();
      }

      // Update user chats with last message and date
      await updateDoc(doc(db, 'userChats', currentUser.uid), {
        [`${data.chatId}.lastMessage`]: {
          text,
        },
        [`${data.chatId}.date`]: serverTimestamp(),
      });

      await updateDoc(doc(db, 'userChats', data.user.uid), {
        [`${data.chatId}.lastMessage`]: {
          text,
        },
        [`${data.chatId}.date`]: serverTimestamp(),
      });

      setText('');
      setFile(null);
    } catch (error) {
      console.error('Error handling send:', error);
      // Handle error
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // Prevents adding a new line
      handleSend(); // Calls handleSend function when Enter is pressed
    }
  };

  return (
    <div className='input'>
      <input
        type='text'
        placeholder='Type a message'
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <div className='send'>
        <input
          type='file'
          id='file'
          style={{ display: 'none' }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor='file'>
          <img
            src='https://img.icons8.com/material-rounded/24/000000/attach.png'
            alt='Attach File'
          />
        </label> 
      <button onClick={handleSend} id='button' style={{ display: 'none' }}>
        </button>        
        <label htmlFor='button'>
          <img
            src={send}
            alt='Send'
          />
        </label>
      </div>
    </div>
  );
};

export default Input;

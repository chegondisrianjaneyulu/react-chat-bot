import React, { useState, useEffect, useRef } from "react";
import { IconButton,  TextField, Paper, Box, Avatar, Typography, Popover} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import EmojiPicker from "emoji-picker-react";
import { useSelector, useDispatch } from "react-redux";
import { addMessage } from "../store/slices/chat";
import moment from "moment";
import axios from "axios";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [emojiAnchor, setEmojiAnchor] = useState(null);
  const [isTyping, setIsTyping] = useState(false); 

  const messagesEndRef = useRef(null);

  const dispatch = useDispatch();

  const messages = useSelector((state) => state.chat.messages);

  const currentUser = useSelector((state) => state.user);
  
  const botUser = {
    fname: 'Chat',
    lname: 'Support',
    userProfile: null
  }
  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);


  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (message.trim() === "") return;

    dispatch(addMessage({ id: currentUser.userId, text: message, sender: "user", timestamp: new Date() }));
  
    //EKKADA QUERY MESSAGE BACKEND KE SEND CHESTHUNNA
    const response = await axios.post('/message', { query: message });
    console.log('Response', response);
  
    setMessage("");
    setIsTyping(true); 
  
    //EKKADA ANSWER KOSAM API CALL CHESTHUNNA
    const botResponse = await axios.post('/message', { userId: currentUser.userId });
    const answer = botResponse.data;
    
    // let answer = "Hello! How can I assist you today?";

    // if (message.toLowerCase().includes("hello")) {
    //     answer = "Hello! How can I help you with Hyniva services?";
    // } 
    // else if (message.toLowerCase().includes("what is hyniva")) {
    //     answer = "Hyniva is a company dedicated to providing innovative solutions. How can I assist you with our services?";
    // } 
    // else if (message.toLowerCase().includes("services")) {
    //     answer = "Hyniva offers a range of services, including software development, cloud solutions, and IT consulting.";
    // } 
    // else if (message.toLowerCase().includes("support")) {
    //     answer = "Our support team is here to help! Please describe your issue, and I'll guide you.";
    // } 
    
    await new Promise((resolve) => setTimeout(resolve, 2000));
  
    dispatch(addMessage({ id: Date.now() + 1, text: answer, sender: "bot", timestamp: new Date() }));
  
    setIsTyping(false);
  };


  const getInitials = ( firstName, lastName ) => {
    if ( !firstName && !lastName ) return "?";
    return `${firstName?.[0] || ""}${lastName?.[0] || ""}`.toUpperCase();
  };

  
const ProfileAvatar = ({ image, fname, lname, size = 40 }) => {
  return (
    <Avatar sx={{ width: size, height: size }}>
      {image ? (
        <img src={image} alt="Profile" style={{ width: "100%", height: "100%" }} />
      ) : (
        getInitials(fname, lname)
      )}
    </Avatar>
  );
};

const toggleChat = () => setOpen((prev) => !prev);

const handleEmojiClick = (emoji) => {
  setMessage((prev) => prev + emoji.emoji);
  setEmojiAnchor(null);
};

  return (
    <div>
      <IconButton
        onClick={toggleChat}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          bgcolor: "primary.main",
          color: "white",
          "&:hover": { bgcolor: "primary.dark" },}}>
        <ChatIcon />
      </IconButton>

      {open && (
        <Paper
          elevation={3}
          sx={{
            position: "fixed",
            bottom: 80,
            right: 20,
            width: 520,
            height: 600,
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            boxShadow: 3,
          }}>
          <Box sx={{ display: "flex", alignItems: "center", p: 1.5, bgcolor: "primary.main", color: "white" }}>

            <ProfileAvatar image={botUser.userProfile} fname={botUser.fname} lname={botUser.lname}  />

            <Typography sx={{ flexGrow: 1, fontWeight: "bold", ml:1 }}>Chat Support</Typography>

            <IconButton size="small" sx={{ color: "white" }} onClick={toggleChat}><CloseIcon /></IconButton>

          </Box>

          <Box sx={{ flex: 1, p: 2, overflowY: "auto", bgcolor: "#f5f5f5", display: "flex", flexDirection: "column" }}>
            {messages.map((msg) => (
              <Box key={msg.id} sx={{ display: "flex", flexDirection: "column", alignItems: msg.sender === "user" ? "flex-end" : "flex-start" }}>
                <Box
                  sx={{
                    mb: 0.5,
                    p: 1.5,
                    borderRadius: 2,
                    maxWidth: "75%",
                    bgcolor: msg.sender === "user" ? "primary.light" : "grey.300",
                    display: "flex",
                    alignItems: "center",
                  }}>
                    
                  {msg.sender === "bot" && (
                    <ProfileAvatar image={botUser.userProfile} fname={botUser.fname} lname={botUser.lname} size={30} />
                  )}

                  <Typography variant="body2" sx={{mx:1, color: msg.sender === "user" ? "white" : "black" }}>{msg.text}</Typography>
                  
                  {msg.sender === "user" && (
                    <ProfileAvatar image={currentUser.userProfile} fname={currentUser.fname} lname={currentUser.lname} size={30} />
                  )}
                </Box>

                <Typography variant="caption" sx={{ color: "grey.600", mt: -0.5,}}>
                  {moment(msg.timestamp).format("hh:mm A")}
                </Typography>
              </Box>
            ))}

          
            {isTyping && (
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <ProfileAvatar image={botUser.userProfile} fname={botUser.fname} lname={botUser.lname} size={30} />
                <Typography variant="body2" sx={{ fontStyle: "italic", color: "grey.600", ml:1 }}>
                   typing...
                </Typography>
              </Box>
            )}

            <div ref={messagesEndRef} />
          </Box>

          <form onSubmit={handleSendMessage}>
          <Box sx={{ display: "flex", p: 1, bgcolor: "white", borderTop: "1px solid #ddd" }}>
           
                <IconButton onClick={(e) => setEmojiAnchor(e.currentTarget)}>
                  <EmojiEmotionsIcon color="primary" />
                </IconButton>

                <Popover
                  open={Boolean(emojiAnchor)}
                  anchorEl={emojiAnchor}
                  onClose={() => setEmojiAnchor(null)}
                  anchorOrigin={{ vertical: "top", horizontal: "left" }}
                  transformOrigin={{ vertical: "bottom", horizontal: "left" }}
                  sx={{ maxWidth: 600, maxHeight: 600 }}>
                  <Box sx={{ maxWidth: 500, maxHeight: 300, overflow: "hidden" }}>
                    <EmojiPicker onEmojiClick={handleEmojiClick} emojiStyle="native" />
                  </Box>
                </Popover>

                <TextField
                  size="small"
                  fullWidth
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />

                <IconButton type="submit" onClick={handleSendMessage} color="primary">
                  <SendIcon />
                </IconButton>
            </Box>
          </form>
        </Paper>
      )}
    </div>
  );
};

export default ChatWidget;

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  // TextField,
  // Button,
  Rating,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getFeedbackList } from "../../services/CleaningServices/index";
import store from "../../store";
import { google, facebook, trustpilot, yelp } from "../../config/images";
import { useLanguage } from "../../context/LanguageContext";

type Feedback = {
  id: number;
  name: string;
  avatar: string;
  star_count: string;
  social_media_type: string;
  description: string;
  date: string;
};

const CustomerFeedback: React.FC = () => {
  // Import the AppDispatch type

  const dispatch = useDispatch<typeof store.dispatch>();
  const feedbackState = useSelector(
    (state: any) => state.feedbaackSlice.feedback
  );
  const [feedback, setFeedback] = useState<Feedback[]>([]);

  const { translate } = useLanguage();

  useEffect(() => {
    dispatch(getFeedbackList());
  }, [dispatch]);

  useEffect(() => {
    if (feedbackState.isSuccess) {
      setFeedback(feedbackState.data);
    }
  }, [feedbackState]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMonths =
      (now.getFullYear() - date.getFullYear()) * 12 +
      (now.getMonth() - date.getMonth());
    return `${diffInMonths} months ago`;
  };

  const getSocialMediaIcon = (type: string) => {
    switch (type) {
      case "facebook":
        return <img src={facebook} alt="facebok" />;
      case "google":
        return <img src={google} alt="google" />;
      case "trustpilot":
        return <img src={trustpilot} alt="trustpilot" />;
      case "yelp":
        return <img src={yelp} alt="yelp" />;
    }
  };

  // const handleSubmit = () => {
  //   if (!newFeedback.name || !newFeedback.comment || newFeedback.rating === 0)
  //     return;

  //   const newEntry: Feedback = {
  //     id: feedback.length + 1,
  //     name: newFeedback.name,
  //     avatar: "/avatars/default.png",
  //     rating: newFeedback.rating,
  //     comment: newFeedback.comment,
  //     date: "Just now",
  //   };

  //   setFeedback([newEntry, ...feedback].sort((a, b) => b.rating - a.rating));
  //   setNewFeedback({ name: "", rating: 0, comment: "" });
  // };

  return (
    <Box sx={{ backgroundColor: "#f0f8ff", mb:10}}>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        mb={10}
        mt={10}
        sx={{ color: "#002F6D" }}
      >
        {translate('customerfeedback')}
      </Typography>

      {/* Display Feedback */}
      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          px: 3,
        }}
      >
        {feedback.map((item) => (
          <Card
            key={item.id}
            sx={{
              borderRadius: 2,
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              border: "2px solid #002F6D",
            }}
          >
            <CardContent>
              <Box display="flex" alignItems="center" gap={1} mb={2}>
                <Avatar src={item.avatar} alt={item.name} />
                <Box>
                  <Typography variant="h6">{item.name}</Typography>
                  <Rating value={parseInt(item.star_count)} readOnly />
                </Box>
              </Box>
              <Typography variant="body1" mb={2}>
                {item.description}
              </Typography>
              <Box display="flex" alignItems="center" gap={1}>
                {getSocialMediaIcon(item.social_media_type)}
                <Typography variant="caption" color="gray">
                  {formatDate(item.date)}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Feedback Form */}
      {/* <Box
        sx={{
          maxWidth: 600,
          mx: "auto",
          mt:5,
          mb: 4,
          p: 3,
          background: "linear-gradient(to bottom, #0D90C8,#fbfcfd, #002F6D)",
          borderRadius: 2,
          border: "1px solid #002F6D",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="h6" mb={2} sx={{color:"#002F6D"}}>
          Leave your feedback
        </Typography>
        <TextField
          fullWidth
          label="Your Name"
          variant="outlined"
          value={newFeedback.name}
          onChange={(e) =>
            setNewFeedback({ ...newFeedback, name: e.target.value })
          }
          margin="dense"
          
        />
        <TextField
          fullWidth
          label="Your Feedback"
          variant="outlined"
          multiline
          rows={4}
          value={newFeedback.comment}
          onChange={(e) =>
            setNewFeedback({ ...newFeedback, comment: e.target.value })
          }
          margin="dense"
          
        />
        <Rating
          value={newFeedback.rating}
          onChange={(_, value) =>
            setNewFeedback({ ...newFeedback, rating: value || 0 })
          }
        />
        <Button
          variant="contained"
          fullWidth
          onClick={handleSubmit}
          sx={{ mt: 2,background:"#0D90C8",borderRadius:"15px" }}
        >
          Submit Feedback
        </Button>
      </Box> */}
    </Box>
  );
};

export default CustomerFeedback;

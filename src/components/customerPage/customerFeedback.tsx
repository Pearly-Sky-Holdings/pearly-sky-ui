import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  TextField,
  Button,
  Rating,
} from "@mui/material";

type Feedback = {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
};

const initialFeedback: Feedback[] = [
  {
    id: 1,
    name: "Viktoriya Fromm",
    avatar: "/images/customerPage/customer.png",
    rating: 5,
    comment:"I booked a cleaning Service in september 2024 . Two Cleaners did a good  job , for a 5 hours work ,  they also cleaned  the windows    and  fridge , were very punctual , friendly and reliable . I can Stron   gly recommend this company as a good and responsible partner.    Best regards, V.F  ",                                                                                             
    date: "4 months ago",
  },
  {
    id: 2,
    name: "Viktoriya Fromm",
    avatar: "/images/customerPage/customer.png",
    rating: 4,
    comment:"I booked a cleaning Service in september 2024 . Two Cleaners did a good  job , for a 5 hours work ,  they also cleaned  the windows    and  fridge , were very punctual , friendly and reliable . I can Stron   gly recommend this company as a good and responsible partner.    Best regards, V.F  ",                                                                                             
    date: "3 months ago",
  },
  {
    id: 1,
    name: "Viktoriya Fromm",
    avatar: "/images/customerPage/customer.png",
    rating: 5,
    comment:"I booked a cleaning Service in september 2024 . Two Cleaners did a good  job , for a 5 hours work ,  they also cleaned  the windows    and  fridge , were very punctual , friendly and reliable . I can Stron   gly recommend this company as a good and responsible partner.    Best regards, V.F  ",                                                                                             
    date: "4 months ago",
  },
  {
    id: 2,
    name: "Viktoriya Fromm",
    avatar: "/images/customerPage/customer.png",
    rating: 4,
    comment:"I booked a cleaning Service in september 2024 . Two Cleaners did a good  job , for a 5 hours work ,  they also cleaned  the windows    and  fridge , were very punctual , friendly and reliable . I can Stron   gly recommend this company as a good and responsible partner.    Best regards, V.F  ",                                                                                             
    date: "3 months ago",
  },
];

const CustomerFeedback: React.FC = () => {
  const [feedback, setFeedback] = useState<Feedback[]>(initialFeedback);
  const [newFeedback, setNewFeedback] = useState({
    name: "",
    rating: 0,
    comment: "",
  });

  const handleSubmit = () => {
    if (!newFeedback.name || !newFeedback.comment || newFeedback.rating === 0)
      return;

    const newEntry: Feedback = {
      id: feedback.length + 1,
      name: newFeedback.name,
      avatar: "/avatars/default.png",
      rating: newFeedback.rating,
      comment: newFeedback.comment,
      date: "Just now",
    };

    setFeedback([newEntry, ...feedback].sort((a, b) => b.rating - a.rating));
    setNewFeedback({ name: "", rating: 0, comment: "" });
  };

  return (
    <Box sx={{ py: 5, backgroundColor: "#f0f8ff" ,mt:5}}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4} sx={{color:"#002F6D"}}>
        Customer Feedback
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
          <Card key={item.id} sx={{ borderRadius: 2, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" ,border: "2px solid #002F6D",}}>
            <CardContent>
              <Box display="flex" alignItems="center" gap={1} mb={2}>
                <Avatar src={item.avatar} alt={item.name} />
                <Box>                
                  <Typography variant="h6">{item.name}</Typography>                 
                  <Rating value={item.rating} readOnly />  
                  </Box>               
                </Box>
              <Typography variant="body1" mb={2}>
                {item.comment}
              </Typography>
              <Typography variant="caption" color="gray">
                {item.date}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Feedback Form */}
      <Box
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
      </Box>

    </Box>
  );
};

export default CustomerFeedback;

import { Box, Typography, Stack, Grid } from "@mui/material";
import icon from "../../assets/bot.png";
import Card from "./Card";

export default function InitialChat({ generateResponse }) {
  const initialData = [
    {
      heading: "Hi, how far is the moon from Earth?",
      subtext: "Get immediate AI generated response",
    },
    {
      heading: "Hi, what is the capital of India?",
      subtext: "Get immediate AI generated response",
    },
    {
      heading: "Hi, what is 5 + 7?",
      subtext: "Get immediate AI generated response",
    },
    {
      heading: "Hi, can you tell me a fun fact?",   
      subtext: "Get immediate AI generated response",
    },
  ];

  return (
    <Stack height={1} justifyContent={"flex-end"} p={{ xs: 2, md: 3 }}>
      <Stack alignItems={"center"} spacing={2} my={5}>
        <Typography variant="h2">How Can I Help You Today?</Typography>
        <Box
          component={"img"}
          src={icon}
          height={{ xs: 42, md: 70 }}
          width={{ xs: 42, md: 70 }}
          boxShadow={4}
          borderRadius={"50%"}
        />
      </Stack>
      <Grid container spacing={{ xs: 1, md: 3 }}>
        {initialData.map((item) => (
          <Grid item key={item.heading} xs={12} md={6}>
            <Card
              heading={item.heading}
              subtext={item.subtext}
              handleClick={generateResponse}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

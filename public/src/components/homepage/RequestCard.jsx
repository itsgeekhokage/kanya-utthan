/** @format */

import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { FaCalendar, FaPlaceOfWorship } from "react-icons/fa";
import { useTheme } from "@emotion/react";

const RequestCard = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "300px",
        margin: "16px",
        "&:hover": { boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)" },
        transition: "box-shadow 0.3s",
      }}>
      <Card sx={{ backgroundColor: "background.paper" }}>
        <CardContent>
          <Box
            sx={{
              width: "100%",
              height: "140px",
              overflow: "hidden",
              borderRadius: 1,
            }}>
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
              }}
              src="https://5.imimg.com/data5/SELLER/Default/2020/11/YT/BO/HD/13366051/couple-photography-services-1000x1000.jpg"
              alt="Description 1"
            />
          </Box>
          <Container
            sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
            <Typography
              variant="p"
              color="primary.main">
              Vishali Kumari
            </Typography>
            <Typography
              variant="p"
              color="primary.main">
              Vishal Kumar
            </Typography>
          </Container>
          <Divider />
          <Container
            sx={{ display: "flex", alignItems: "center", mt: 2, mb: 2 }}>
            <Avatar sx={{ mr: 1, bgcolor: "primary.main" }}>F</Avatar>
            <Typography
              variant="body2"
              color="text.primary">
              Father's Name
            </Typography>
          </Container>
          <List dense>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FaCalendar
                    color={theme.palette.primary.main}
                    size={16}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Date"
                  primaryTypographyProps={{ fontSize: "small" }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FaPlaceOfWorship
                    color={theme.palette.primary.main}
                    size={16}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Venue"
                  primaryTypographyProps={{ fontSize: "small" }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end", p: 1 }}>
          <Button
            variant="contained"
            color="error"
            size="small">
            Donate
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default RequestCard;

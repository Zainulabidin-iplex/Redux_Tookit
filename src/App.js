import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "./redux/slices/userSlice/userAction";
import { Card, Grid, Typography } from "@mui/material";
import { isEmpty } from "lodash";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { userState } = useSelector((state) => state.users);
  //
  useEffect(() => {
    dispatch(getUser());
  }, []);
  //

  return (
    <div style={{ width: "90%", margin: "30px auto" }}>
      <Grid container spacing={3}>
        {!isEmpty(userState) &&
          userState.map((x) => (
            <Grid item md={4} sm={6} xs={12}>
              <Card style={{ padding: "10px" }}>
                <Typography variant="h6">{`Title : ${x.title}`}</Typography>
                <Typography variant="h6">{`Name : ${x.fullName}`}</Typography>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default App;

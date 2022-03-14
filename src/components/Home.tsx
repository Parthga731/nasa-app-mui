import { useAppSelector, useAppDispatch } from "../store/hooks";
import { getRandomAsteroidDetail } from "../slices/AsteroidSlice";
import { TextField, Button, Typography } from "@mui/material";
import { searchTextAction, randomBtnAction } from "../slices/AsteroidSlice";
import { useNavigate } from "react-router-dom";
import { BoxPaper } from "./Atomic/BoxPaper";

export const Home = () => {
  const { searchtext } = useAppSelector((state) => state.asteroid);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handlerRandomBtn = async () => {
    await dispatch(getRandomAsteroidDetail());
    dispatch(randomBtnAction());
  };

  return (
    <>
      <BoxPaper>
        <Typography variant="h4" component="h4">
          Nasa App
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Enter Asteroid ID"
          type="number"
          value={searchtext}
          onChange={(e) => dispatch(searchTextAction(e.target.value))}
        />
        <Button
          variant="outlined"
          color="info"
          sx={{ m: 2 }}
          onClick={async () => {
            navigate(`./${searchtext}`);
          }}
          disabled={!searchtext}>
          Submit
        </Button>
        <Button
          variant="contained"
          color="info"
          sx={{ mx: 2 }}
          onClick={handlerRandomBtn}>
          Random Asteroid
        </Button>
      </BoxPaper>
    </>
  );
};

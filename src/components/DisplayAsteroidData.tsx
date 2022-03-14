import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { getAsteroidDetail } from "../slices/AsteroidSlice";
import { useParams } from "react-router-dom";
import { BoxPaper } from "./Atomic/BoxPaper";
import { TypographyName } from "./Atomic/TypographyName";
import { isEmpty } from "lodash";

export const DisplayAsteroidData = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { selectedAsteroid } = useAppSelector((state) => state.asteroid);

  useEffect(() => {
    dispatch(getAsteroidDetail(id));
  }, [id, dispatch]);

  return (
    <>
      {!isEmpty(selectedAsteroid) && (
        <BoxPaper>
          <TypographyName
            name="ID"
            value={selectedAsteroid.id}
            variant="body2"
          />
          <TypographyName name="Name" value={selectedAsteroid.name} />
          <TypographyName
            name="nasa_jpl_url"
            value={selectedAsteroid.nasa_jpl_url}
          />
          <TypographyName
            name="nasa_jpl_url"
            value={String(selectedAsteroid.is_potentially_hazardous_asteroid)}
          />
        </BoxPaper>
      )}
    </>
  );
};

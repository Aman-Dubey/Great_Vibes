import React, { useEffect, useState } from "react";
import { fetchDataThroughAPI } from "../utils/apis";
import Error from "./404";
import Card from "./Card";
import Loading from "./Loading";
import NavBar from "./NavBar";
import Confirmation from "./Confirmation";

export default function CardView({ showAlert }) {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFeatchedData] = useState(null);
  const [showModel, setShowModel] = useState(false);

  const deleteFunctionHandler = (id) => {
    console.log(id);
    console.log("adfasd");
  };

  useEffect(() => {
    fetchDataThroughAPI({ showAlert })
      .then((res) => {
        setFeatchedData(res);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log("Something is wrong", e);
        setIsLoading(false);
      });
  }, [showAlert]);
  return (
    <>
      <NavBar />
      <Confirmation showModal={showModel} setShowModal={setShowModel} />
      {isLoading ? (
        <Loading />
      ) : fetchedData && fetchedData.length ? (
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 gap-4 2xl:grid-cols-2">
            {fetchedData.map((data) => {
              return (
                <Card
                  data={data.body}
                  key={data.id}
                  id={data.id}
                  showAlert={showAlert}
                  onDelete={deleteFunctionHandler}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <Error message="Database is empty. Please add data to Database" />
      )}
    </>
  );
}

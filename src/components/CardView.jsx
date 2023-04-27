import React, { useEffect, useState } from "react";
import { fetchDataThroughAPI } from "../utils/apis";
import Error from "./404";
import Card from "./Card";
import Loading from "./Loading";
import NavBar from "./NavBar";

export default function CardView({ showAlert }) {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFeatchedData] = useState(null);

  const deleteFunctionHandler = (id) => {
    let updatedData = [];
    fetchedData.map((data) => {
      return data.id !== id ? updatedData.push(data) : null;
    });
    setFeatchedData(updatedData);
    showAlert("Data deleted successfully", 0);
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
      {isLoading ? (
        <Loading />
      ) : fetchedData && fetchedData.length ? (
        <div className="flex justify-center items-center my-12">
          <div className="grid grid-cols-1 gap-4 2xl:grid-cols-2">
            {fetchedData
              .slice(0)
              .reverse()
              .map((data) => {
                return (
                  <Card
                    data={data.body}
                    key={data.id}
                    id={data.id}
                    showAlert={showAlert}
                    onDelete={deleteFunctionHandler}
                    setIsLoading={setIsLoading}
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

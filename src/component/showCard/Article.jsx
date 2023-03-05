import React from "react";
import { useState, useEffect } from "react";
import { Cards } from "./Cards";
import "./article.css";
import SearchBar from "./../SearchBar";

export const Article = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

 
  const [searchInput, setSearchInput] = useState("");

  const requestData = async () => {
    const result = await (
      await fetch("https://restcountries.com/v3.1/all")
    ).json();

    console.log(result);
    setData(result);
    setFilteredData(result);
  };
  useEffect(() => {
    requestData();
  }, []);

  useEffect(() => {
    let temporaryArray = [];
    data.map((item) => {
      if (item.name.common.toLowerCase().includes(searchInput.toLowerCase())) {
        console.log(item);
        temporaryArray.push(item);
      }
    });
    setFilteredData(temporaryArray);
    console.log(filteredData);
  }, [searchInput]);

  return (
    <>
      <div className="mainDiv">

        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
        <div className="items">
          {filteredData.map((x) => {
            
            return <Cards {...x} />;
          })}
        </div>

      </div>
    </>
  );
};

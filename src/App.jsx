import React, { useState } from "react";
import dotenv from "dotenv";
import "./App.css";
import Navbar from "./components/navBar";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [url, setUrl] = useState("");
  const [shortenUrl, setShortenUrl] = useState("");
  async function getShortUrl(e) {
    toast.info("Shortening your URL!");

    e.preventDefault();
    const encodedParams = new URLSearchParams();
    encodedParams.set("url", url);

    const options = {
      method: "POST",
      url: import.meta.env.VITE_SHORT_ME_URL,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": import.meta.env.VITE_X_RapidAPI_Key,
        "X-RapidAPI-Host": import.meta.env.VITE_X_RapidAPI_HOST,
      },
      data: encodedParams,
    };

    try {
      const response = await axios.request(options);
      console.log(response);
      if (response.data.status === "error") {
        toast.error("Error Occured!! Invalid URL");
      } else {
        toast.success("URL Shortened!");
        setShortenUrl(response.data.url);
      }
    } catch (error) {
      console.error(error);
    }
  }
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        width: "100vw",
        backgroundColor: "#0F172A",
      }}
    >
      <div
        style={{
          alignSelf: "center",
          width: "70%",
          marginTop: 30,
        }}
      >
        {" "}
        <Navbar />
        <ToastContainer />
      </div>
      <div
        style={{
          marginTop: "2rem",
          flex: 1,
          marginLeft: "-15px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            alignSelf: "center",
            alignContent: "center",
            width: "60%",
            marginTop: -120,
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#fff",
              fontSize: "2.5rem",
              fontWeight: "bold",
              width: "100%",
              textAlign: "center",
              fontFamily: "Poppins",
              margin: "0",
              padding: "0",
            }}
          >
            Rapid URL Shortening Made Effortless{" "}
          </p>{" "}
        </div>
        <div
          style={{
            alignSelf: "center",
            marginTop: "1rem",
            alignContent: "center",
            width: "60%",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#646cff",
              fontSize: "2rem",
              fontWeight: "bold",
              width: "100%",
              marginTop: 10,
              textAlign: "center",
              fontFamily: "Poppins",
              margin: "0",
              padding: "0",
            }}
          >
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <p style={{ marginLeft: "25px", fontSize: "48px" }}>Shortmee</p>
            </span>{" "}
          </p>{" "}
        </div>

        <div
          style={{
            marginTop: "3rem",
            width: "50%",
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "Poppins",
              fontSize: "1rem",
              color: "#A29191",
              marginBottom: "0.5rem",
            }}
          >
            <label>Please enter your Url to shorten</label>
          </div>

          <form class="flex items-center">
            <label for="voice-search" class="sr-only">
              Search
            </label>
            <div class="relative w-full">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                onInput={(e) => setUrl(e.target.value)}
                style={{
                  height: "3rem",
                }}
                type="text"
                id="voice-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Url to shorten eg. https://www.google.com"
                required
              />
            </div>
            <button
              onClick={(e) => getShortUrl(e)}
              style={{
                height: "3rem",
              }}
              type="submit"
              class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                class="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              Shorten
            </button>
          </form>
        </div>

        <div
          style={{
            alignSelf: "center",
            alignContent: "center",
            width: "47%",
            marginTop: "2rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              marginTop: "1rem",
              color: "#A29191",
              fontSize: "1.1rem",
              fontWeight: "bold",
              fontFamily: "Poppins",
              margin: "0",
              padding: "0",
            }}
          >
            Unleash the potential of ShortMee, your tech-forward URL shortening
            tool. Transform data into content gold effortlessly. Create,
            analyze, and safeguard your brand with swift precision.{" "}
          </p>{" "}
        </div>

        {shortenUrl ? (
          <div
            style={{
              justifyContent: "center",

              alignSelf: "center",
              alignContent: "center",
              textAlign: "center",
              backgroundColor: "#1a56db",
              width: "30%",
              borderRadius: "10px",
              marginTop: "2rem",
              height: "3rem",
            }}
          >
            <p
              style={{
                color: "white",
                fontSize: "0.9rem",
                fontWeight: "bold",
                alignSelf: "center",
                marginTop: 14,
              }}
            >
              Your short URL is: {"     "}
              <span
                onClick={() => {
                  navigator.clipboard.writeText(shortenUrl);
                  toast.success("Copied to Clipboard!");
                }}
                style={{
                  marginLeft: "10px",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                {"   "} {shortenUrl}
              </span>
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;

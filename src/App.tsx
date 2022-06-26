import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useState } from "react";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Video } from "./components/Video";
import { Lesson } from "./components/Lesson";
import { Event } from "./Pages/Event";

function App() {
  return (
    <>
      <Event />
    </>
  )
}

export default App;

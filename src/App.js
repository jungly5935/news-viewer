import logo from "./logo.svg";
import "./App.css";
import { useState, useCallback } from "react";
import axios from "../node_modules/axios/index";
import { render } from "@testing-library/react";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";
import { Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

const App = () => {
  // const [category, setCategory] = useState("all");
  // const onSelect = useCallback((category) => setCategory(category), []);

  return <Route path="/:category?" component={NewsPage} />;
};

export default App;

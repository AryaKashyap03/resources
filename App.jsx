import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Categories from "./components/Categories";
import ResourcesList from "./components/ResourcesList";
import axios from "axios";
import "./components/styles.css"; // Add this line
import AnimatedText from "./components/AnimatedText";
import Carousel from "./components/Carousel";
import FAQ from "./components/FAQ";
import Banner from "./components/Banner";
import ImageGrid from "./components/ImageGrid";
import MentalHealthTips from "./components/MentalHealthTips";
import Footer from "./components/Footer";
const App = () => {
  const [resources, setResources] = useState([]);
  const [filteredResources, setFilteredResources] = useState([]);
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const data = [
          {
            id: 1,
            title: "Anxiety Guide",
            description: "How to manage anxiety",
            category: "Anxiety",
            link: "https://adaa.org/understanding-anxiety",
          },
          {
            id: 2,
            title: "Depression Basics",
            description: "Understanding depression",
            category: "Depression",
            link: "https://www.nimh.nih.gov/health/topics/depression",
          },
          {
            id: 3,
            title: "Self-Care Tips",
            description: "Daily self-care strategies",
            category: "Self-care",
            link: "https://www.helpguide.org/mental-health/wellbeing/self-care-tips-to-prioritize-your-mental-health",
          },
        ];
        setResources(data);
        setFilteredResources(data);
      } catch (error) {
        console.error("Error fetching resources", error);
      }
    };
    fetchResources();
  }, []);

  useEffect(() => {
    let updatedResources = resources;

    if (category !== "All") {
      updatedResources = updatedResources.filter(
        (resource) => resource.category === category
      );
    }

    if (searchTerm) {
      updatedResources = updatedResources.filter(
        (resource) =>
          resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          resource.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredResources(updatedResources);
  }, [category, searchTerm, resources]);

  return (
    <>
      <div className="main-header">
        <AnimatedText></AnimatedText>
      </div>
      <div className="container">
        <div>
          <h1>Mental Health Resources</h1>
          <SearchBar setSearchTerm={setSearchTerm} />
          <Categories setCategory={setCategory} />
          <ResourcesList resources={filteredResources} />
        </div>
      </div>
      <br />
      <div className="anonCaro">
        <h2>
          <strong>Anonymous Testimonials</strong>
        </h2>
        <div>
          <Carousel />
        </div>
      </div>

      <div className="cards">
        <div className="card">
          <FAQ></FAQ>
        </div>
      </div>
      <div className="ban">
        <Banner></Banner>
      </div>
      <div className="head-image-grid-container">
        <div className="image-grid-container">
          <ImageGrid />
        </div>
        <h1>DISCOVER YOURSELF.</h1>
      </div>
      <div className="megatips">
        <div className="tips-container">
          <MentalHealthTips></MentalHealthTips>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;

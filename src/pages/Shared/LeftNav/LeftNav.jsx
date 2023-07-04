import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftEditorView from "../LeftEditorView";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h2>All Category</h2>
      <div className="pt-3">
        {categories.map((category) => (
          <h5 key={category.id}>
            <Link to={`/category/${category.id}`} className="pb-2 text-decoration-none text-black font-4">{category.name}</Link>
          </h5>
        ))}
      </div>
      <LeftEditorView></LeftEditorView>
    </div>
  );
};

export default LeftNav;

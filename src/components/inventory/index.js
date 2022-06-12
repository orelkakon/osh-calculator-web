import React, { useState } from 'react';
import { FullPage, Square, SquareContent } from "./style"
import CaloriesCircle from "./../calories-circle"
import SearchBar from "./search-bar"
import ResultsView from "./results-view"

const Inventory = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [filterdResults, setFilterdResults] = useState([]);
    const [results, setResults] = useState([{
        name: "פרגיות צלוי",
        carbs: 20,
        proteins: 15,
        fats: 10,
        grams: 100,
        kind: "יחידה",
        calories: 200,
        type: "byUnits"
    },
    {
        name: "דג מושט",
        carbs: 10,
        proteins: 35,
        fats: 5,
        grams: 300,
        kind: "יחידה",
        calories: 500,
        type: "byUnits"
    },
    {
        name: "טונה בשמן טעמן",
        carbs: 10,
        proteins: 35,
        fats: 5,
        grams: 300,
        kind: "יחידה",
        calories: 500,
        type: "byGrams"
    },
    {
        name: "לחם חום",
        carbs: 10,
        proteins: 35,
        fats: 5,
        grams: 300,
        kind: "כף",
        calories: 500,
        type: "byGrams"
    }]);
    const openCloseModal = () => setIsOpen(!modalIsOpen)
    return (
        <FullPage>
            <Square>
                <SquareContent color="blue">חלבון</SquareContent>
                <SquareContent color="green">פחמימה</SquareContent>
                <SquareContent color="red">שומן</SquareContent>
            </Square>
            <CaloriesCircle openCloseModal={openCloseModal} modalIsOpen={modalIsOpen} />
            <SearchBar results={results} setFilterdResults={setFilterdResults}/>
            <ResultsView results={filterdResults} />
        </FullPage>
    );
};

export default Inventory;
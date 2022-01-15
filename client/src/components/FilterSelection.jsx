import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import { setFilteredAssets, setSelectedFilters } from "../actions";
import { filterAssets } from "../helpers";

/**
 * Displays the options for filters, but also triggers setFilteredAssets
 * @returns
 */
const FilterSelection = () => {
  const dispatch = useDispatch();
  // Handle updates in local state and then dispatch to store from useEffect. Could manage it out of redux altogether but figured this was easier
  const [filterState, setFilterState] = useState({});
  const assets = useSelector((state) => state.storestate.assets);

  const checkFilters = () => {
    let filtersSet = false;
    let traits = Object.keys(filterState);
    traits.forEach((trait) => {
      console.log("filterState", filterState[trait]);
      if (filterState[trait].length > 0) {
        filtersSet = true;
      }
    });
    return filtersSet;
  };

  useEffect(() => {
    console.log("filtered state", filterState);
    setSelectedFilters(dispatch, filterState);
    // Check if filters no filters are set. If no filters are set, set full collection back as filtered assets
    console.log("checking filters", checkFilters(filterState));
    if (checkFilters(filterState)) {
      setFilteredAssets(dispatch, filterAssets(assets, filterState));
    } else {
      setFilteredAssets(dispatch, assets);
    }
  }, [filterState]);

  // todo: replace with filters from API
  const filters = {
    traitTypes: {
      hair: ["purple cap", "beanie", "cowboy hat"],
      head: ["Yellow"],
    },
  };

  // Builds the checkbox options for filter widget
  const buildFilterOptions = (trait) => {
    let filterOptions = filters.traitTypes[trait].map((value) => {
      return (
        <Form.Check
          type="checkbox"
          id={value}
          label={value}
          onChange={(e) => {
            // If checked, remove it from selected filters
            let updatedFilterState = { ...filterState };
            if (e.target.checked) {
              if (updatedFilterState[trait] === undefined) {
                updatedFilterState[trait] = [];
                updatedFilterState[trait].push(value);
                setFilterState(updatedFilterState);
              } else {
                updatedFilterState[trait].push(value);
                setFilterState(updatedFilterState);
              }
            } else {
              // If unchecked, remove it
              const index = updatedFilterState[trait].indexOf(value);

              if (index > -1) {
                updatedFilterState[trait].splice(index, 1);
              }
              setFilterState(updatedFilterState);
            }
          }}
        />
      );
    });
    return <Form>{filterOptions}</Form>;
  };

  // Builds the accordion layer of filter widget
  const buildFilters = () => {
    let traitTypes = Object.keys(filters.traitTypes);
    let accordion = traitTypes.map((trait, index) => {
      return (
        <Accordion.Item eventKey={index}>
          <Accordion.Header>{trait}</Accordion.Header>
          <Accordion.Body>{buildFilterOptions(trait)}</Accordion.Body>
        </Accordion.Item>
      );
    });
    return <Accordion>{accordion}</Accordion>;
  };

  return (
    <div>
      {buildFilters()} {JSON.stringify(filterState)}
    </div>
  );
};

export default FilterSelection;
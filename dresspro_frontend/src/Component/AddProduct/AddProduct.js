import React, { useEffect, useReducer } from "react";
import "./AddProduct.css";
import makeData from "../MakeData/MakeData";
import { useNavigate } from "react-router-dom";
import Table from "../Table/Table";
import { randomColor, shortId } from "../Utils/Utils";
import { grey } from "../Colors/Colors";
import axios from "axios";
import LoadFromDbToProduct from "../LoadFromDbToProduct/LoadFromDbToProduct";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function reducer(state, action) {
  switch (action.type) {
    // case "save_to_db_feedback":

    case "fetch_data_success":
      const data = action.payload.data;
      const options = action.payload.options;

      const categoryColumnIndex = state.columns.findIndex(
        (column) => column.id === "category"
      );
      const categoryColumn = state.columns[categoryColumnIndex];

      const updatedCategoryColumn = {
        ...categoryColumn,
        options,
      };

      console.log(updatedCategoryColumn);

      const updatedColumns = state.columns;
      updatedColumns[categoryColumnIndex] = updatedCategoryColumn;

      console.log(updatedColumns);

      return { ...state, data, columns: updatedColumns };

    case "add_option_to_column":
      const optionIndex = state.columns.findIndex(
        (column) => column.id === action.columnId
      );
      return {
        ...state,
        skipReset: true,
        columns: [
          ...state.columns.slice(0, optionIndex),
          {
            ...state.columns[optionIndex],
            options: [
              ...state.columns[optionIndex].options,
              { label: action.option, backgroundColor: action.backgroundColor },
            ],
          },
          ...state.columns.slice(optionIndex + 1, state.columns.length),
        ],
      };
    case "add_row":
      return {
        ...state,
        skipReset: true,
        data: [...state.data, {}],
      };
    case "update_column_type":
      const typeIndex = state.columns.findIndex(
        (column) => column.id === action.columnId
      );
      switch (action.dataType) {
        case "number":
          if (state.columns[typeIndex].dataType === "number") {
            return state;
          } else {
            return {
              ...state,
              columns: [
                ...state.columns.slice(0, typeIndex),
                { ...state.columns[typeIndex], dataType: action.dataType },
                ...state.columns.slice(typeIndex + 1, state.columns.length),
              ],
              data: state.data.map((row) => ({
                ...row,
                [action.columnId]: isNaN(row[action.columnId])
                  ? ""
                  : Number.parseInt(row[action.columnId]),
              })),
            };
          }
        case "select":
          if (state.columns[typeIndex].dataType === "select") {
            return {
              ...state,
              columns: [
                ...state.columns.slice(0, typeIndex),
                { ...state.columns[typeIndex], dataType: action.dataType },
                ...state.columns.slice(typeIndex + 1, state.columns.length),
              ],
              skipReset: true,
            };
          } else {
            let options = [];
            state.data.forEach((row) => {
              if (row[action.columnId]) {
                options.push({
                  label: row[action.columnId],
                  backgroundColor: randomColor(),
                });
              }
            });
            return {
              ...state,
              columns: [
                ...state.columns.slice(0, typeIndex),
                {
                  ...state.columns[typeIndex],
                  dataType: action.dataType,
                  options: [...state.columns[typeIndex].options, ...options],
                },
                ...state.columns.slice(typeIndex + 1, state.columns.length),
              ],
              skipReset: true,
            };
          }
        case "text":
          if (state.columns[typeIndex].dataType === "text") {
            return state;
          } else if (state.columns[typeIndex].dataType === "select") {
            return {
              ...state,
              skipReset: true,
              columns: [
                ...state.columns.slice(0, typeIndex),
                { ...state.columns[typeIndex], dataType: action.dataType },
                ...state.columns.slice(typeIndex + 1, state.columns.length),
              ],
            };
          } else {
            return {
              ...state,
              skipReset: true,
              columns: [
                ...state.columns.slice(0, typeIndex),
                { ...state.columns[typeIndex], dataType: action.dataType },
                ...state.columns.slice(typeIndex + 1, state.columns.length),
              ],
              data: state.data.map((row) => ({
                ...row,
                [action.columnId]: row[action.columnId] + "",
              })),
            };
          }
        default:
          return state;
      }
    case "update_column_header":
      const index = state.columns.findIndex(
        (column) => column.id === action.columnId
      );
      return {
        ...state,
        skipReset: true,
        columns: [
          ...state.columns.slice(0, index),
          { ...state.columns[index], label: action.label },
          ...state.columns.slice(index + 1, state.columns.length),
        ],
      };
    case "update_cell":
      return {
        ...state,
        skipReset: true,
        data: state.data.map((row, index) => {
          if (index === action.rowIndex) {
            return {
              ...state.data[action.rowIndex],
              [action.columnId]: action.value,
            };
          }
          return row;
        }),
      };
    case "add_column_to_left":
      const leftIndex = state.columns.findIndex(
        (column) => column.id === action.columnId
      );
      let leftId = shortId();
      return {
        ...state,
        skipReset: true,
        columns: [
          ...state.columns.slice(0, leftIndex),
          {
            id: leftId,
            label: "Column",
            accessor: leftId,
            dataType: "text",
            created: action.focus && true,
            options: [],
          },
          ...state.columns.slice(leftIndex, state.columns.length),
        ],
      };
    case "add_column_to_right":
      const rightIndex = state.columns.findIndex(
        (column) => column.id === action.columnId
      );
      const rightId = shortId();
      return {
        ...state,
        skipReset: true,
        columns: [
          ...state.columns.slice(0, rightIndex + 1),
          {
            id: rightId,
            label: "Column",
            accessor: rightId,
            dataType: "text",
            created: action.focus && true,
            options: [],
          },
          ...state.columns.slice(rightIndex + 1, state.columns.length),
        ],
      };
    case "delete_column":
      const deleteIndex = state.columns.findIndex(
        (column) => column.id === action.columnId
      );
      return {
        ...state,
        skipReset: true,
        columns: [
          ...state.columns.slice(0, deleteIndex),
          ...state.columns.slice(deleteIndex + 1, state.columns.length),
        ],
      };
    case "enable_reset": // ENABLE RESET
      return {
        ...state,
        skipReset: false,
      };

    default:
      return state;
  }
}

function AddProduct() {
  const [state, dispatch] = useReducer(reducer, makeData());
  const navigate = useNavigate();


  const capitalized = (word) => {
    word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  // LoadFromDbToProduct();
  useEffect(() => {
    axios
      .get("/product")
      .then((response) => {

        const data = response.data.data;

        // Hello Baniex
        // Banji

        console.log(data)

        const dataCategories = Array.from(
          data.reduce(
            (acc, dataEntry) => acc.add(dataEntry.category),
            new Set()
          )
        );

        const options = dataCategories.map((each) => ({
          label: capitalized(each),
          backgroundColor: randomColor(),
        }));


        dispatch({ type: "fetch_data_success", payload: { data, options } });
      })
      .catch();
  }, []);

  useEffect(() => {
    dispatch({ type: "enable_reset" });
    console.log(state.data);
  }, [state.data, state.columns]);

  const saveToDB = () => {
    axios
      .post("/product_changer", { product_data: state.data })
      .then((res) => {

        const data = res.data;

        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          height: 120,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ color: grey(800) }}>Add Products</h1>
      </div>
      <div style={{ overflow: "auto", display: "flex" }}>
        <div
          style={{
            flex: "1 1 auto",
            padding: "1rem",
            maxWidth: 1000,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Table
            columns={state.columns}
            data={state.data}
            dispatch={dispatch}
            skipReset={state.skipReset}
          />
        </div>
      </div>
      <div
        style={{
          height: 140,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div onClick={saveToDB}>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;

import React from "react";
import { useEffect, useState, useContext } from "react";
import { ClipLoader } from "react-spinners";
import { apiLocalDeleteFavourite, apiLocalGetFavourite } from "../helperApi";
import FilterContext from "../context/FilterContext";

const Favourite = () => {
  let initialLoad = true;

  const [loading, setLoading] = useState(true);
  const [favourites, setFavourites] = useState();

  const context = useContext(FilterContext);

  const handlerShowPrevTransactions = (block, street_name) => {
    context.setIsSelected(true);
    //navigate(`../trend/${block}/${street_name}`);
    window.open(`../trend/${block}/${street_name}`);
  };

  const handlerRemoveFavourite = ({id, setFavourites, setLoading, favId}) => {
    setLoading(true);
    apiLocalDeleteFavourite({id, setFavourites, setLoading, favId});
  };

  useEffect(() => {
    if (initialLoad) {
      setLoading(true);
      apiLocalGetFavourite({
        id: 1,
        setLoading: setLoading,
        setFavourites: setFavourites,
      });
      initialLoad = false;
    }
  }, []);
  return (
    <>
      {loading ? (
        <ClipLoader color="#36d7b7" />
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Address</th>
                <th>Show Previous Transactions</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {console.log(favourites)}
              {favourites.map((favourite, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{favourite.block + " " + favourite.streetName}</td>
                  <td>
                    <button
                      onClick={() =>
                        handlerShowPrevTransactions(
                          favourite.block,
                          favourite.streetName
                      )
                      }
                    >
                      Show previous transactions
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        handlerRemoveFavourite({
                          id: 1,
                          setFavourites: setFavourites,
                          setLoading: setLoading,
                          favId: favourite.id,
                        })
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default Favourite;

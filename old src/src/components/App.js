import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

const App = () => {
  return (
    <div className="">
      <h3>Select a song</h3>
      <div className="">
        <div className="text-left col-9">
          <SongList />
        </div>
      </div>
      <div className="col-6">
        <SongDetail />
      </div>
    </div>
  );
};

export default App;

import './App.css'
import { useEffect, useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import { TEXT_BOX_WIDTH } from './consts';
import GeojsonBox  from "./components/GeojsonBox";
import KlccFlat from "./assets/sampleJSON/klcc-flat.json"
import Viewer3D from './components/Viewer';

// Simple debounce function to prevent constantly updating the GeoJSON
const debounce = (fn, ms = 250) => {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}

function App() {
  const [geojson, setGeojson] = useState(KlccFlat);
  const [editingGeoJSON, setEditingGeoJSON] = useState(false);
  const [stringJson, setStringJson] = useState(JSON.stringify(geojson, null, 2));

  // debounce for 1 second before saving a new GeoJSON
  const debouncedSet = useMemo(
    () => debounce((val) =>{
      setEditingGeoJSON(false)
      return setGeojson(JSON.parse(val))
    }, 1000),
    []
  );

  useEffect(() => {
    if (stringJson) {
      setEditingGeoJSON(true);
      debouncedSet(stringJson);
    }
  }, [stringJson, debouncedSet]);

  useEffect(() => {
    if (editingGeoJSON) {
      console.log('Waiting for changes...');
    }
    else{
      console.log('Done');
    }
  }, [editingGeoJSON]);

  return (
      <Box 
        sx={{
          display: "grid",
          height: "100%",
          minWidth: 0,
          gridTemplateColumns: `1fr ${TEXT_BOX_WIDTH}`,
          overflow: "hidden",
          gap: 1,
      }}>
        <Box
          sx={{
            flex: 1,
            minWidth: 0,
            minHeight: 0,
            borderRadius: 1,
            overflow: "hidden",
        }}>
          <Viewer3D
            geojson={geojson}
          />
        </Box>
        <GeojsonBox
          text={stringJson}
          setText={setStringJson}
        />
      </Box>
  );
}

export default App

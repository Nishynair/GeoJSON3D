import { IconButton, Box } from "@mui/material";
import UploadIcon from '@mui/icons-material/Upload';

export default function UploadButton({setFileText = ()=>{} }) {

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    
    if (selectedFile){
      // Read file content as text
      const reader = new FileReader();
      reader.onload = (e) => {
        try{
          // Quick way to validate and format JSON
          const text = JSON.stringify(JSON.parse(e.target.result), null, 2);
          setFileText(text);
          // So that another file can be uploaded
          event.target.value = null;
        } catch(error){
          console.error("Invalid GeoJSON:", error.message);
        }
      }
      reader.readAsText(selectedFile);
    }
       
  };

  return (
    <Box >
      {/* The hidden file input */}
      <input
        accept=".json,.geojson"
        id="upload-json"
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <label htmlFor="upload-json">
        <IconButton variant="contained" component="span">
          <UploadIcon sx={{ color:"white" }}/>
        </IconButton>
      </label>
    </Box>
  );
}

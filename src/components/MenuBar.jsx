import { 
  AppBar, 
  Button, 
  Toolbar, 
  Typography
} from "@mui/material";
import UploadButton from "./MenuButtons/UploadButton";

export default function MenuBar ({setFileText}) {
  return (
    <AppBar position="static" >
      <Toolbar variant="dense">
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: "bold",
            flexGrow: 1,
          }}
        >
          GeoJSON 3D
        </Typography>
        <UploadButton setFileText={setFileText}/>
      </Toolbar>
    </AppBar>

  )
}
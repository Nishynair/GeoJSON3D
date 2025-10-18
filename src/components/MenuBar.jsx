import { 
  AppBar, 
  Toolbar, 
  Typography
} from "@mui/material";
import UploadButton from "./MenuButtons/UploadButton";
import DownloadButton from "./MenuButtons/DownloadButton";
import CopyButton from "./MenuButtons/CopyButton";
import InfoButton from "./MenuButtons/InfoButton";

export default function MenuBar ({text, setText}) {
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
          Geoviewer3D
        </Typography>
        <UploadButton setText={setText}/>
        <DownloadButton text={text}/>
        <CopyButton text={text}/>
        <InfoButton/>
      </Toolbar>
    </AppBar>

  )
}
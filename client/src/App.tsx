import { createTheme } from "@mui/material/styles"
import { useMemo } from "react"
import { themeSettings } from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material"


function App() {
  const theme = useMemo(() => createTheme(themeSettings), []) //once on initial load
  return (
    <div className="app">

      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* reset css on mui */}
      </ThemeProvider>
    </div>
  )
}

export default App

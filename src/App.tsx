import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/index';
import { ThemeProvider } from './context/Theme';

const App: React.FC = () => {
  return (
    <div className='App h-full w-full'>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  )
}

export default App
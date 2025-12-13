import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/index';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/Theme';

const App: React.FC = () => {
  return (
    <div className='App h-full w-full'>
      
      <ThemeProvider>
        <Toaster/>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  )
}

export default App
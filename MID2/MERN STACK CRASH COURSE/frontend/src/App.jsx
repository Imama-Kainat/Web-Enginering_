import React from 'react';
import { Box, Routes, Route } from '@chakra-ui/react';
import CreatePage from './pages/CreatePage';
import HomePage from './pages/HomePage';
import Navbar from './components/navbar';

function App() {
  return (
    <>
     <Box minH={"100vh"} bg="gray.100">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
       
     </Box>
    </>
  );
}

export default App;

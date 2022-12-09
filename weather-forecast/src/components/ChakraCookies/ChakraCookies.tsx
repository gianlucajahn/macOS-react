import { Box, Button, Slide, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import './ChakraCookies.scss';

export default function ChakraCookies () {
   const { isOpen, onToggle } = useDisclosure()
      
    return (
      <>
        <button className="nav cookies-btn" onClick={onToggle}>
          <img className="cookies" src={require("../../resources/images/cookies.png")} />
        </button>
        <Slide direction='bottom' in={isOpen} style={{ zIndex: 10, bottom: "-180px", width: "100vw", left: "-522px" }}>
            <Box
              p='40px'
              color='white'
              mt='4'
              bg='blue.500'
              rounded='md'
              shadow='md'
            >
              <p>This page does not use any type of cookies. In fact, all data is cleared on refresh. This page can fetch your approximate location to provide local weather data. You can disable it on your first page load. No data is fetched if you disable it. <button style=
                {{ 
                    color: "white", 
                    backgroundColor: "#1c1c1c",
                    padding: "3px 10px",
                    borderRadius: "5px",
                    cursor: "pointer", 
                    marginLeft: "2px" 
                }} 
                className="confirm"
                onClick={onToggle}>I understand</button></p>
            </Box>
        </Slide>
      </>
    )
}

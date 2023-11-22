import React from 'react'
import { Drawer, 
        DrawerBody, 
        DrawerHeader, 
        DrawerContent, 
        DrawerCloseButton, 
        DrawerOverlay, 
        Button } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi'
const Header = () => {
  return (
    <>

    <Button pos={'fixed'} top = {4} left = {4} colorScheme = "purple" p={0} w ={10} h ={10} borderRadius  ={"full"}
    >
        <BiMenuAltLeft size = {'20'}/>
    </Button>

    </>
  )
}

export default Header

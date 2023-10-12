import React from 'react';
import Style from "./Section.module.scss";
import classNames from "classnames";
import {Box} from "@mui/material";

const iconClass = "fa fa-power-off";

function Section(props) {
   const {text} = props;
   const {title} = props;

   return (
      <Box component={'section'} className={classNames(Style.section)}
           width={{xs: '80%', md: '50%'}}>
         <Box sx={{backgroundColor: '#101010'}} p={'0.5rem'} borderRadius={'0.5rem 0.5rem 0.5rem 0.5rem'}
              fontSize={'1rem'} display={"flex"}>
            <i className={classNames(iconClass, Style.blue)}/>
            <Box className={classNames(Style.section, Style.title)} alignItems={'center'}>
               {title}
            </Box>
         </Box>
         <Box py={{xs: '1rem', md: '2rem'}} px={{xs: '2rem', md: '3rem'}}
              fontSize={'1rem'}>
            {text}
         </Box>
      </Box>
   );
}

export default Section;
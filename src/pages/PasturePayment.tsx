import React from 'react'
import { useState } from "react";
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const PasturePayment = () => {
  const [value, setValue] = useState('syrt');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <Box sx={{ pl: 5 }}>
      <Typography
        variant='h3'
        component='p'
        sx={{ backgroundColor: '#2F5AA8', padding: '5px 15px', mb: 5 }}
        color='white'>
        КҮЗГҮ ЖАЙЫТ АЯНТЫН АЛУУ ҮЧҮН СУРАМ ЖАРАТУУ
      </Typography>
      <Box sx={{ pl: 10 }}>
        <Typography variant='h4' component='p' sx={{ mb: 5 }}>
          СУРАМЫҢЫЗДА БЕЛГИЛЕНГЕН МАЛДЫН САНЫНА ЖАРАША <span>20</span> ГА ЖАЙЫТ АЯНТЫН АЛА АЛАСЫЗ.
        </Typography>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">ЫЛАЙЫКТУУ ЖАЙЫТ АЯТТАРЫНЫН ТИЗМЕСИ</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel value="syrt" control={<Radio />} label="СЫРТ ЖАЙЫТЫ" />
            <FormControlLabel value="saruu" control={<Radio />} label="САРУУ ЖАЙЫТЫ" />
            <FormControlLabel value="torobel" control={<Radio />} label="ТӨРӨ-БЕЛ ЖАЙЫТЫ" />
            <FormControlLabel value="aksay" control={<Radio />} label="АКСАЙ ЖАЙЫТЫ" />
            <FormControlLabel value="tardobo" control={<Radio />} label="ТАР-ДӨБӨ ЖАЙЫТЫ" />
          </RadioGroup>
        </FormControl>
        <Typography sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
          118 0000 13 74 82 653
          <br/>
          ЖОГОРУДАГЫ ЭСЕПКЕ ТӨЛӨМ ЖҮРГҮЗҮП, ЧЕКТИ ЖҮКТӨҢҮЗ.
          <br/>
          ТӨЛӨМДҮ «МБАНК», «MEGAPAY» ТИРКЕМЕЛЕРИ,«KICB», «DEMIR BANK» БАНКТАРЫ,«PAY24», «O!» ТЕРМИНАЛДАРЫ АРКЫЛУУ ЖҮРГҮЗҮҮГӨ МҮМКҮН .
        </Typography>
          <Button variant='contained' size='large'>
            ЖӨНӨТҮҮ
          </Button>
      </Box>
    </Box>
  )
}

export default PasturePayment

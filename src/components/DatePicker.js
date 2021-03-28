import React from 'react'
import styled from 'styled-components';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';

import { es } from 'date-fns/locale'

function parseDate(str, format, locale) {
  const parsed = dateFnsParse(str, format, new Date(), { locale: es });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

function formatDate(date, format, locale) {
  return dateFnsFormat(date, format, { locale: es });
}


export const DatePicker = ({date, setDate}) => {
    return (
        <ContainerDatePicker>
            <DayPickerInput
                    value={date}
                    onDayChange={(day)=> setDate(day)}
                    format="dd 'de' MMMM 'de' yyyy"
                    formatDate={formatDate}
                    parseDate={parseDate}
                    placeholder={`${dateFnsFormat(new Date(), "dd 'de' MMMM 'de' yyyy")}`}
            />
        </ContainerDatePicker>
    )
}

const ContainerDatePicker = styled.div`
    input{
        max-width:210px;
        backgroun:transparent;
        border:none;
        border-bottom:solid 1px gray;
        text-align:center;
        outline:none;
        padding:.8rem;
        font-size:18px;
    }
`; 




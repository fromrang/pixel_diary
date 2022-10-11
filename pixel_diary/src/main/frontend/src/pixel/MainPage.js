import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { format, addMonths, subMonths } from 'date-fns';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { isSameMonth, isSameDay, addDays, parse } from 'date-fns';
import "./styles/main.css"


//다음 날짜로 가는 화살표 양 옆으로 옮기기
//날짜 클릭시 일기 쓸 수 있는 페이지 만들기
const RenderHeader = ({ currentMonth, prevMonth, nextMonth }) => {
    return (
        <div className="header">
            {/* <div className="col col-end1">
                <Icon icon="bi:arrow-left-circle-fill" onClick={prevMonth} />
            </div> */}
            <div className="col col-start">
                <span className="text">
                    <span className="text month">
                        {format(currentMonth, 'M')}월
                    </span>
                    {format(currentMonth, 'yyyy')}
                </span>
            </div>
            {/* <div className="col col-end2">
                <Icon icon="bi:arrow-right-circle-fill" onClick={nextMonth} />
            </div> */}
        </div>
    );
};

const RenderDays = () => {
    const days = [];
    const date = ['Sun', 'Mon', 'Thu', 'Wed', 'Thrs', 'Fri', 'Sat'];

    for (let i = 0; i < 7; i++) {
        days.push(
            <div className="col" key={i}>
                {date[i]}
            </div>,
        );
    }

    return <div className="days row">{days}</div>;
};

const RenderCells = ({ currentMonth, selectedDate, onDateClick }) => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            formattedDate = format(day, 'd');
            const cloneDay = day;
            days.push(
                <div
                    className={`col cell ${
                        !isSameMonth(day, monthStart)
                            ? 'disabled'
                            : isSameDay(day, selectedDate)
                            ? 'selected'
                            : format(currentMonth, 'M') !== format(day, 'M')
                            ? 'not-valid'
                            : 'valid'
                    }`}
                    key={day}
                    //onClick={() => onDateClick(parse(cloneDay))}
                    onClick={() => onDateClick(cloneDay)}
                >
                    <span
                        className={
                            format(currentMonth, 'M') !== format(day, 'M')
                                ? 'text not-valid'
                                : ''
                        }
                    >
                        {formattedDate}
                    </span>
                </div>,
            );
            day = addDays(day, 1);
        }
        rows.push(
            <div className="row" key={day}>
                {days}
            </div>,
        );
        days = [];
    }
    return <div className="body">{rows}</div>;
};

export const MainPage = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };
    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };
    const onDateClick = (day) => {
        //setSelectedDate(day);
        console.log(day);
        //이 부분에 날짜를 클릭할 시 아래에 창이 띄워지도록 수정
    };
    return (
        <div className="calendar">
            

            <RenderHeader
                currentMonth={currentMonth}
                prevMonth={prevMonth}
                nextMonth={nextMonth}
            />
            <RenderDays />
            <div className="col col-end1">
                <Icon icon="bi:arrow-left-circle-fill" onClick={prevMonth} />
            </div>
            <RenderCells
                currentMonth={currentMonth}
                selectedDate={selectedDate}
                onDateClick={onDateClick}
            />
            
            <div className="col col-end2">
                <Icon icon="bi:arrow-right-circle-fill" onClick={nextMonth} />
            </div> 
        </div>
    );
};
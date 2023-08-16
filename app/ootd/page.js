'use client'

import React, { useState } from 'react';

import {
  postOotd
} from '@/actions'
const OuterList = ['패딩', '무스탕', '코트', '플리스/뽀글이', '점퍼', '자켓', '후드집업', '가디건'];
const TopList = ['니트/스웨터', '후드티셔츠', '맨투맨/스웨트셔츠', '셔츠/블라우스', '긴팔 티셔츠', '반소매 티셔츠', '민소매 티셔츠'];
const BottomList = ['데님 팬츠', '코튼 팬츠', '슈트팬츠/슬랙스', '트레이닝/조거 팬츠', '레깅스', '숏 팬츠', '스커트', '원피스'];
const AccList = ['비니', '볼캡', '우산'];

export default function Ootd() {
  const [checkedList, setCheckedList] = useState({
    OuterList: [],
    TopList: [],
    BottomList: [],
    AccList: []
  });

  const CheckboxChangeHandler = (category, value) => {
    const updatedCheckedList = { ...checkedList };
    const index = updatedCheckedList[category].indexOf(value);
    
    if (index !== -1) {
        updatedCheckedList[category].splice(index, 1);
    } else {
        updatedCheckedList[category].push(value);
    }
    
    setCheckedList(updatedCheckedList);
  };

  const onSubmit = async () => {
    console.log('선택항목:', checkedList);
    await postOotd(checkedList);
    alert('제출에 성공했습니다.');

    
    // Submit 후 리셋
    setCheckedList({
        OuterList: [],
        TopList: [],
        BottomList: [],
        AccList: []
      });
  };


  const CheckboxList = ({ title, options }) => (
    <div>
      <h2>{title}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {options.map(option => (
          <div key={option} style={{ marginRight: '10px' }}>
            <input
              type="checkbox"
              id={option}
              name={option}
              checked={checkedList[title].includes(option)}
              onChange={() => CheckboxChangeHandler(title, option)}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className='ootd-sheet'>
      <h1><p className='ootd-sheet-title'>OOTD를 입력해볼까요?</p></h1>
      <div className='ootd-sheet-checkbox'><CheckboxList title="OuterList" options={OuterList} /></div>
      <div className='ootd-sheet-checkbox'><CheckboxList title="TopList" options={TopList} /></div>
      <div className='ootd-sheet-checkbox'><CheckboxList title="BottomList" options={BottomList} /></div>
      <div className='ootd-sheet-checkbox'><CheckboxList title="AccList" options={AccList} /></div>

      <div className='ootd-sheet-submit'><button className="ootd-submit-button" onClick={onSubmit}>Submit</button></div>
    </div>
  );
}

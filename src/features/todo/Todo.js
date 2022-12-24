import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export function Todo() {
  const state = useSelector(state => state.todo);
  const dispatch = useDispatch();


  return (
    <div>
      todo list here
    </div>
  );
}

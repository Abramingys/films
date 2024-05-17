import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addToFavorites,
  removeFromFavorites,
  selectFavorites,
} from '../../redux/slices/favoriteSlice';
import styles from './FavoriteButton.module.scss';

export function FavoriteButton({ kinopoiskId }) {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();
  const isActive = favorites.includes(kinopoiskId);

  const handleClick = () => {
    if (isActive) {
      dispatch(removeFromFavorites(kinopoiskId));
      console.log('хуй');
    } else {
      dispatch(addToFavorites(kinopoiskId));
      console.log('пизда');
    }
  };

  return (
    <button
      className={`${styles.favoriteButton} ${isActive ? styles.active : ''}`}
      onClick={handleClick}
    >
      <span className={styles.buttonText}>
        {isActive ? 'Удалить из избранного' : 'Добавить в избранное'}
      </span>
    </button>
  );
}

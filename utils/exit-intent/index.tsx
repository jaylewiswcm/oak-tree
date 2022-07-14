import React, { useState, useEffect } from 'react';
import { setCookie, getCookie } from 'cookies-next';
// Context 
import { useAppContext } from '../../context/state';
export function ExitIntent() {
    const { setFormModal } = useAppContext()
    window.addEventListener("mouseout", e => {
        if (e.relatedTarget === null) {
            console.log('exit intent')
            setFormModal(true);
        }
    });
    return null;
  }

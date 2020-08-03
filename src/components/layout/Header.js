import React, { useState } from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
export const Header = ({ darkMode, setDarkMode }) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);

  return (
    <header className='header' data-test-id='header'>
      <nav>
        <div className='logo'>
          <img src='/images/logo.png' alt='Todoist' />
        </div>
        <div className='settings'>
          <ul>
            <li data-test-id='quick-add-task-action' className='settings__add'>
              +
            </li>
            <li className='settings__darkmode'>
              <button
                data-testid='dark-mode-action'
                aria-label='Darkmode on/off'
                type='button'
                onClick={() => setDarkMode(!darkMode)}
              >
                <FaPizzaSlice />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

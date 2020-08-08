import { ProjectsProvider, SelectedProjectProvider } from './context';
import React, { useState } from 'react';

import { Content } from './components/layout/Content';
import { Header } from './components/layout/Header';

const Routes = ({ darkModeDefault = false }) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault);
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main
          data-testid='application'
          className={darkMode ? 'darkmode' : undefined}
        >
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Content />
        </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};

export default Routes;

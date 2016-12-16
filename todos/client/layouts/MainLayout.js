'use strict';

import React from 'react';
import AccountsUI from '../accounts/accounts';

export const MainLayout = ({ content }) => (
  <div className="main-layout">
    <header>
      <h2>My Resolutions</h2>
      <nav>
        <a href="/">Resolutions</a>
        <a href="/about">About</a>
        <AccountsUI />
      </nav>
    </header>
    <main>
      { content }
    </main>
  </div>
);

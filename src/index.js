import React from 'react';
import ReactDOM from 'react-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserAuthContextProvider } from './context/userAuthContext'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { Launch, Home, Signin, Signup, Profile, Podium, Community, Exercises, Resources, PageNotFound, Admin } from './screens/index';
import './index.css';
import VideoPlayer from '././components/Sessions/VideoPlayer';
import AdminRoute from './components/AdminRoute';
import { OnlineStatusProvider } from './hooks/useOnlineStatus';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <UserAuthContextProvider>
      <OnlineStatusProvider>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />}></Route>
          <Route path="/launch" element={<Launch />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          {/* Protected Routes & Navigation */}
          <Route path="home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="sessions" element={<ProtectedRoute><Exercises /></ProtectedRoute>} />
          <Route path="community" element={<ProtectedRoute><Community /></ProtectedRoute>} />
          <Route path="podium" element={<ProtectedRoute><Podium /></ProtectedRoute>} />
          <Route path="resources" element={<ProtectedRoute><Resources /></ProtectedRoute>} />
          <Route path="admin" element={<ProtectedRoute><AdminRoute><Admin /></AdminRoute></ProtectedRoute>} />
          <Route path="/profile/:page" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/profile/" element={<Navigate replace to="/profile/edges" />} />
          <Route path="/VideoDetail/:videoId" element={<ProtectedRoute><VideoPlayer /></ProtectedRoute>} />
          {/* 404 roune */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </OnlineStatusProvider>
      </UserAuthContextProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

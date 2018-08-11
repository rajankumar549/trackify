import React from 'react'
import Header from './Header'
import AppRoutes from '../routes/AppRoutes';
import Loader from './Global/Loader';
import Footer from './Global/Footer';

const Applayout = () => (
  <div id='trackify-main'>
    <Header />
    <AppRoutes />
    <Footer />
    <Loader />
  </div>
)

export default Applayout
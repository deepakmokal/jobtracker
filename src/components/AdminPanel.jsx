import React, { useEffect } from "react";
import { Header } from "../layout/Header";
import MainContent from "../layout/MainContent";
import Sidebar from "./Sidebar";
import { SidebarProvider } from "../Context/SidebarContext";
import {  useSelector } from "react-redux";

import Loader from './UI/Loader'
import { ToastContainer, toast } from "react-toastify";



const AdminPanel = () => {
  ToastContainer
  const {user, isLoading} = useSelector((state) => state.user)

  if (isLoading) 
    return <Loader />
  
  return (
    
    <SidebarProvider>
      
      <div className="app flex">
        <Sidebar />
        <div className="content w-full">
          <Header />
          <MainContent />
        </div>
      </div>
      
    </SidebarProvider>
  );
};

export default AdminPanel;

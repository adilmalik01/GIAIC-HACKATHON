"use client";
import { useEffect } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";

const PageViewTracker = () => {
  const pathname = usePathname();

  useEffect(() => {
    const updateViews = async () => {
      try {
        await axios.post("/api/update-views", { page: pathname });
      } catch (error) {
        console.error("Error updating views:", error);
      }
    };
    updateViews();
  }, [pathname]);

  return null;
};

export default PageViewTracker;
